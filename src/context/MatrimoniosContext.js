import React, { createContext, useReducer } from "react";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { matrimoniosReducer } from "../reducers/matrimoniosReducer";
import {
  registraMatrimonios,
  LimpiaMatrimonios,
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

  const purgaMatrimonios = () => {
    LimpiaMatrimonios(dispatch);
  };

  return (
    <MatrimoniosContext.Provider
      value={{ matrimonios, cargaMatrimonios, purgaMatrimonios }}
    >
      {children}
    </MatrimoniosContext.Provider>
  );
};
