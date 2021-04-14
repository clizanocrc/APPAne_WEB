import React, { createContext, useReducer } from "react";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { usuariosReducer } from "../reducers/usuariosReducer";
import { registraUsuarios, limpiaUsuarios } from "./actions/usuariosActions";
import { initialState } from "./initialState/usuariosInitialState";

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

  return (
    <UsuariosContext.Provider
      value={{ usuarios, cargaUsuarios, purgaUsuarios }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};
