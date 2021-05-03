import React, { createContext, useReducer } from "react";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { conyugesReducer } from "../reducers/conyugesReducer";
import {
  registraConyugues,
  seleccionaConyuge,
  limpiaConyuges,
  addConyuge,
  updateConyuge,
  deleteConyuge,
} from "./actions/conyuguesActions";
import { initialState } from "./initialState/conyugesInitialState";

export const ConyuguesContext = createContext();

const limite = 1000;
const desde = 0;

export const ConyuguesProvider = ({ children }) => {
  const [conyuges, dispatch] = useReducer(conyugesReducer, initialState);

  //   Carga todos los Conyuges
  const cargaConyugues = async () => {
    try {
      const resp = await fetchConToken(
        `conyuges?limite=${limite}&desde=${desde}`
      );
      if (resp.ok) {
        registraConyugues(resp, dispatch);
      } else {
        limpiaConyuges(dispatch);
        Swal.fire("error", resp.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const selecConyuge = (conyuge) => {
    seleccionaConyuge(conyuge, dispatch);
  };

  const purgaConyuges = () => {
    limpiaConyuges(dispatch);
  };

  const agregaConyuge = (data) => {
    addConyuge(data, dispatch);
  };

  const editarConyuge = (data) => {
    updateConyuge(data, dispatch);
  };

  const eliminarConyuge = (data) => {
    deleteConyuge(data, dispatch);
  };

  return (
    <ConyuguesContext.Provider
      value={{
        conyuges,
        cargaConyugues,
        purgaConyuges,
        selecConyuge,
        agregaConyuge,
        editarConyuge,
        eliminarConyuge,
      }}
    >
      {children}
    </ConyuguesContext.Provider>
  );
};
