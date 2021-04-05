import React, { createContext, useCallback, useContext, useState } from "react";
import { fetchSinToken, fetchConToken } from "../helpers/fetch";
import { MatrimoniosContext } from "../context/MatrimoniosContext";

export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  correo: null,
  rol: null,
};

export const AuthProvider = ({ children }) => {
  const { cargaMatrimonios, purgaMatrimonios } = useContext(MatrimoniosContext);
  const [auth, setAuth] = useState(initialState);

  const login = async (correo, password) => {
    const resp = await fetchSinToken(
      "auth/login",
      { correo, password },
      "POST"
    );

    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { uid, correo, nombre, rol } = resp.usuario;
      setAuth({
        uid,
        checking: false,
        logged: true,
        name: nombre,
        correo,
        rol,
      });
      cargaMatrimonios();
    }
    return { ok: resp.ok, msg: resp.msg };
  };

  const register = async (correo, password, name) => {
    const resp = await fetchSinToken(
      "usuarios",
      { correo, password, nombre: name, rol: "USER_ROLE" },
      "POST"
    );
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { uid, correo, nombre, rol } = resp.usuario;
      setAuth({
        uid,
        checking: false,
        logged: true,
        name: nombre,
        correo,
        rol,
      });
      cargaMatrimonios();
      return { ok: resp.ok, msg: resp.msg };
    } else {
      return { ok: resp.ok, msg: resp.msg, errores: resp.errors };
    }
  };

  const verificaToken = useCallback(async () => {
    const token = localStorage.getItem("token");
    //Si el token no existe
    if (!token) {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        correo: null,
        rol: null,
      });
      return { ok: false, msg: "Token no existe" };
    }
    const resp = await fetchConToken("auth/");
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { uid, correo, nombre, rol } = resp.usuario;
      setAuth({
        uid,
        checking: false,
        logged: true,
        name: nombre,
        correo,
        rol,
      });
      cargaMatrimonios();
    } else {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        correo: null,
        rol: null,
      });
    }
    return { ok: resp.ok, msg: resp.msg };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    purgaMatrimonios();
    localStorage.removeItem("token");
    setAuth({
      checking: false,
      logged: false,
    });
    // dispatch({ type: types.purgarChat });
  };

  return (
    <AuthContext.Provider
      value={{ auth, login, register, verificaToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
