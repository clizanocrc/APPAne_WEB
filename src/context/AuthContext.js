import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";
import {
  fetchSinToken,
  fetchConToken,
  fetchImgConToken,
} from "../helpers/fetch";
import { authReducer } from "../reducers/authReducer";

import { MatrimoniosContext } from "../context/MatrimoniosContext";
import { ConyuguesContext } from "./ConyuguesContext";
import { DiocesisContext } from "./DiocesisContext";
import { UsuariosContext } from "./UsuariosContext";

import { registraLogin, registraLogout } from "./actions/authActions";
import { initialState } from "../context/initialState/authInicialState";
import { AppContext } from "./AppContext";
import { BlogsContext } from "./BlogsContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { cargaMatrimonios, purgaMatrimonios } = useContext(MatrimoniosContext);
  const { cargaDiocesis, purgaDiocesis } = useContext(DiocesisContext);
  const { cargaConyugues, purgaConyuges } = useContext(ConyuguesContext);
  const { cargaBlogs, purgaBlogs } = useContext(BlogsContext);
  const { cargaUsuarios, purgaUsuarios } = useContext(UsuariosContext);
  const { cargaEventos, cargaParams, limpiaParams } = useContext(AppContext);
  const [auth, dispatch] = useReducer(authReducer, initialState);

  const login = async (correo, password) => {
    const resp = await fetchSinToken(
      "auth/login",
      { correo, password },
      "POST"
    );
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      registraLogin(resp, dispatch);
      cargaDiocesis();
      cargaConyugues();
      cargaMatrimonios();
      cargaBlogs();
      cargaUsuarios();
      cargaEventos("desc");
      cargaParams();
    }
    return { ok: resp.ok, msg: resp.msg };
  };

  const updatePerfilUsuario = async (uid, data, imgActual) => {
    const { images, ...resto } = data;
    if (imgActual !== images) {
      await fetchImgConToken(`uploadsimg/usuarios/${uid}`, images, "PUT");
    }
    const resp = await fetchConToken(`usuarios/${uid}`, resto, "PATCH");
    if (resp.ok) {
      registraLogin(resp, dispatch);
    }
    return { ok: resp.ok, msg: resp.msg };
  };

  const updatePassUsuario = async (uid, data) => {
    const resp = await fetchConToken(`usuarios/pass/${uid}`, data, "PATCH");
    if (resp.ok) {
      logout();
    }
    return { ok: resp.ok, msg: resp.msg };
  };

  const register = async (correo, password, name) => {
    const resp = await fetchSinToken(
      "usuarios",
      { correo, password, nombre: name, rol: "NEW_USER_ROLE" },
      "POST"
    );
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      registraLogin(resp, dispatch);
      cargaConyugues();
      cargaDiocesis();
      cargaMatrimonios();
      cargaBlogs();
      cargaUsuarios();
      cargaEventos("desc");
      cargaParams();

      return { ok: resp.ok, msg: resp.msg };
    } else {
      return { ok: resp.ok, msg: resp.msg, errores: resp.errors };
    }
  };

  const verificaToken = useCallback(async () => {
    const token = localStorage.getItem("token");
    //Si el token no existe
    if (!token) {
      registraLogout(dispatch);
      return { ok: false, msg: "Token no existe" };
    }
    const resp = await fetchConToken("auth/");
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      registraLogin(resp, dispatch);
      cargaConyugues();
      cargaDiocesis();
      cargaMatrimonios();
      cargaBlogs();
      cargaUsuarios();
      cargaEventos("desc");
      cargaParams();
    } else {
      registraLogout(dispatch);
    }
    return { ok: resp.ok, msg: resp.msg };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    purgaConyuges();
    purgaBlogs();
    purgaDiocesis();
    purgaMatrimonios();
    purgaUsuarios();
    registraLogout(dispatch);
    limpiaParams();
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        register,
        verificaToken,
        updatePassUsuario,
        logout,
        updatePerfilUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
