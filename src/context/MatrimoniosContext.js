import React, { createContext, useReducer } from "react";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { matrimoniosReducer } from "../reducers/matrimoniosReducer";
import {
  registraMatrimonios,
  LimpiaMatrimonios,
  seleccionaMatrimonio,
  addMatrimonio,
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
    console.log(data);
    addMatrimonio(data, dispatch);
  };

  const editarMatrimonio = (data) => {
    console.log(data);
    // addMatrimonio(data, dispatch);
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
      }}
    >
      {children}
    </MatrimoniosContext.Provider>
  );
};
