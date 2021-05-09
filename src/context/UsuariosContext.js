import React, { createContext, useReducer } from "react";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { usuariosReducer } from "../reducers/usuariosReducer";
import { registraUsuarios, limpiaUsuarios } from "./actions/usuariosActions";
import { initialState } from "./initialState/usuariosInitialState";
import defaultUser from "../assets/defaultUser.png";

export const UsuariosContext = createContext();

const limite = 1000;
const desde = 0;

export const UsuariosProvider = ({ children }) => {
  const [usuarios, dispatch] = useReducer(usuariosReducer, initialState);

  //   Carga todos los Matrimonios
  const cargaUsuarios = async () => {
    try {
      const resp = await fetchConToken(
        `usuarios?limite=${limite}&desde=${desde}`
      );
      if (resp.ok) {
        registraUsuarios(resp, dispatch);
      } else {
        limpiaUsuarios(dispatch);
        Swal.fire("error", resp.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const purgaUsuarios = () => {
    limpiaUsuarios(dispatch);
  };
  const avatarUsuario = (uid) => {
    const usuario = usuarios.usuarios.filter((usuario) => uid === usuario.uid);
    if (usuario) {
      if (!usuario[0].images) {
        return defaultUser;
      } else {
        return usuario[0].images;
      }
    } else {
      return defaultUser;
    }
  };
  const nombreUsuario = (uid) => {
    const usuario = usuarios.usuarios.filter((usuario) => uid === usuario.uid);
    if (usuario) {
      return usuario[0].nombre;
    } else {
      return "";
    }
  };

  return (
    <UsuariosContext.Provider
      value={{
        usuarios,
        cargaUsuarios,
        purgaUsuarios,
        avatarUsuario,
        nombreUsuario,
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};
