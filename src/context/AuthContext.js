import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";
import { fetchSinToken, fetchConToken } from "../helpers/fetch";
import { authReducer } from "../reducers/authReducer";
import { MatrimoniosContext } from "../context/MatrimoniosContext";
import { registraLogin, registraLogout } from "./actions/authActions";
import { initialState } from "../context/initialState/authInicialState";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { cargaMatrimonios, purgaMatrimonios } = useContext(MatrimoniosContext);
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
      cargaMatrimonios();
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
      registraLogout(dispatch);
      return { ok: false, msg: "Token no existe" };
    }
    const resp = await fetchConToken("auth/");
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      registraLogin(resp, dispatch);
      cargaMatrimonios();
    } else {
      registraLogout(dispatch);
    }
    return { ok: resp.ok, msg: resp.msg };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    purgaMatrimonios();
    registraLogout(dispatch);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ auth, login, register, verificaToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
