import React, { createContext, useReducer } from "react";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { diocesisReducer } from "../reducers/diocesisReducer";
import { registraDiocesis, limpiaDiocesis } from "./actions/diocesisActions";
import { initialState } from "./initialState/diocesisInitialState";

export const DiocesisContext = createContext();

const limite = 1000;
const desde = 0;

export const DiocesisProvider = ({ children }) => {
  const [diocesis, dispatch] = useReducer(diocesisReducer, initialState);

  //   Carga todos los Matrimonios
  const cargaDiocesis = async () => {
    try {
      const resp = await fetchConToken(
        `diocesis?limite=${limite}&desde=${desde}`
      );
      if (resp.ok) {
        registraDiocesis(resp, dispatch);
      } else {
        limpiaDiocesis(dispatch);
        Swal.fire("error", resp.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const purgaDiocesis = () => {
    limpiaDiocesis(dispatch);
  };

  return (
    <DiocesisContext.Provider
      value={{ diocesis, cargaDiocesis, purgaDiocesis }}
    >
      {children}
    </DiocesisContext.Provider>
  );
};
