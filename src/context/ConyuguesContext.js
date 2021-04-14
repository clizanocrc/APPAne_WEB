import React, { createContext, useReducer } from "react";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { conyugesReducer } from "../reducers/conyugesReducer";
import { registraConyugues, limpiaConyuges } from "./actions/conyuguesActions";
import { initialState } from "./initialState/conyugesInitialState";

export const ConyuguesContext = createContext();

const limite = 1000;
const desde = 0;

export const ConyuguesProvider = ({ children }) => {
  const [conyugues, dispatch] = useReducer(conyugesReducer, initialState);

  //   Carga todos los Matrimonios
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

  const purgaConyuges = () => {
    limpiaConyuges(dispatch);
  };

  return (
    <ConyuguesContext.Provider
      value={{ conyugues, cargaConyugues, purgaConyuges }}
    >
      {children}
    </ConyuguesContext.Provider>
  );
};
