import React, { createContext, useReducer } from "react";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { matrimoniosReducer } from "../reducers/matrimoniosReducer";
import {
  registraMatrimonios,
  LimpiaMatrimonios,
  seleccionaMatrimonio,
  addMatrimonio,
  updateMatrimonio,
  deleteMatrimonio,
  registraSacerdotes,
  seleccionaSacerdote,
  LimpiaSacerdotes,
  addSacerdote,
  updateSacerdote,
  deleteSacerdote,
} from "./actions/matrimoniosActions";
import { initialState } from "./initialState/matrimoniosInitialState";

export const MatrimoniosContext = createContext();

const limite = 1000;
const desde = 0;

export const MatrimoniosProvider = ({ children }) => {
  const [matrimonios, dispatch] = useReducer(matrimoniosReducer, initialState);

  //   Carga todos los Matrimonios
  const cargaMatrimonios = async () => {
    try {
      const resp = await fetchConToken(
        `matrimonios?limite=${limite}&desde=${desde}`
      );
      if (resp.ok) {
        registraMatrimonios(resp, dispatch);
        registraSacerdotes(resp, dispatch);
      } else {
        LimpiaMatrimonios(dispatch);
        Swal.fire("error", resp.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const selecMatrimonio = (matrimonio) => {
    seleccionaMatrimonio(matrimonio, dispatch);
  };

  const purgaMatrimonios = () => {
    LimpiaMatrimonios(dispatch);
  };

  const agregaMatrimonio = (data) => {
    addMatrimonio(data, dispatch);
  };

  const editarMatrimonio = (data) => {
    updateMatrimonio(data, dispatch);
  };

  const eliminarMatrimonio = (data) => {
    deleteMatrimonio(data, dispatch);
  };

  const selecSacerdote = (matrimonio) => {
    seleccionaSacerdote(matrimonio, dispatch);
  };

  const purgaSacerdotes = () => {
    LimpiaSacerdotes(dispatch);
  };

  const agregaSacerdote = (data) => {
    addSacerdote(data, dispatch);
  };

  const editarSacerdote = (data) => {
    updateSacerdote(data, dispatch);
  };

  const eliminarSacerdote = (data) => {
    deleteSacerdote(data, dispatch);
  };

  const selecConyuge = (matrimonio) => {
    seleccionaMatrimonio(matrimonio, dispatch);
  };

  return (
    <MatrimoniosContext.Provider
      value={{
        matrimonios,
        cargaMatrimonios,
        purgaMatrimonios,
        selecMatrimonio,
        agregaMatrimonio,
        editarMatrimonio,
        eliminarMatrimonio,
        selecSacerdote,
        purgaSacerdotes,
        agregaSacerdote,
        editarSacerdote,
        eliminarSacerdote,
        selecConyuge,
      }}
    >
      {children}
    </MatrimoniosContext.Provider>
  );
};
