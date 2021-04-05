import React, { createContext, useReducer } from "react";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { matrimoniosReducer } from "../reducers/matrimoniosReducer";
import { types } from "../types/types";
import { initialState } from "./MatrimoniosInitialState";

export const MatrimoniosContext = createContext();

const limite = 1000;
const desde = 0;

export const MatrimoniosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(matrimoniosReducer, initialState);

  //   Carga todos los Matrimonios
  const cargaMatrimonios = async () => {
    try {
      const resp = await fetchConToken(
        `matrimonios?limite=${limite}&desde=${desde}`
      );
      if (resp.ok) {
        dispatch({
          type: types.matrimoniosCargados,
          payload: {
            total: resp.total,
            matrimonios: resp.matrimonios,
          },
        });
      } else {
        Swal.fire("error", resp.msg);
        dispatch({
          type: types.matrimoniosCargados,
          payload: initialState,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const purgaMatrimonios = () => {
    dispatch({
      type: types.matrimoniosPurga,
    });
  };

  return (
    <MatrimoniosContext.Provider
      value={{ state, cargaMatrimonios, purgaMatrimonios }}
    >
      {children}
    </MatrimoniosContext.Provider>
  );
};
