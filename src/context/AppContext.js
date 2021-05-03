import React, { createContext, useReducer } from "react";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import {
  prepareEventNew,
  prepareEventEdit,
  prepareEvents,
} from "../helpers/prepareEvents";
import { appReducer } from "../reducers/appReducer";
import { types } from "../types/types";
import { initialState } from "./initialState/appInitialState";
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const limite = 1000;
  const desde = 0;
  //APP
  const showModalLoading = () => {
    dispatch({
      type: types.showLoading,
    });
  };
  const hideModalLoading = () => {
    dispatch({
      type: types.hideLoading,
    });
  };
  const purgaApp = () => {
    dispatch({
      type: types.resetState,
    });
  };
  const limpiaParams = async () => {
    dispatch({
      type: types.paramsPurga,
    });
  };
  const paramsCarga = (resp, dispatch) => {
    const { params } = resp;
    dispatch({
      type: types.paramsCargados,
      payload: {
        params,
      },
    });
  };
  const cargaParams = async () => {
    try {
      const resp = await fetchConToken("parametros");
      if (resp.ok) {
        paramsCarga(resp, dispatch);
      } else {
        limpiaParams();
        Swal.fire("error", resp.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //Calendar
  const showModalLoadingCalendar = () => {
    dispatch({
      type: types.showLoadingCalendar,
    });
  };
  const hideModalLoadingCalendar = () => {
    dispatch({
      type: types.hideLoadingCalendar,
    });
  };
  //Eventos
  const registraEventos = (resp, dispatch) => {
    // const { eventos } = resp;
    const eventos = prepareEvents(resp.eventos);
    dispatch({
      type: types.eventosCargados,
      payload: {
        eventos: eventos,
      },
    });
  };
  const cargaEventos = async (orden = "asc") => {
    try {
      const resp = await fetchConToken(
        `calendario?limite=${limite}&desde=${desde}&orden=${orden}`
      );
      if (resp.ok) {
        registraEventos(resp, dispatch);
      } else {
        dispatch({
          type: types.eventosPurga,
        });
        Swal.fire("error", resp.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const selecEvento = (evento) => {
    dispatch({
      type: types.eventoSeleccionado,
      payload: evento,
    });
  };
  const agregaEvento = (data) => {
    dispatch({
      type: types.eventoAdd,
      payload: prepareEventNew(data),
    });
  };
  const editarEvento = (data) => {
    dispatch({
      type: types.eventoUpdate,
      payload: prepareEventEdit(data),
    });
  };
  const eliminarEvento = (data) => {
    dispatch({
      type: types.eventoDelete,
      payload: data,
    });
  };
  const purgaEventoSelecciondo = () => {
    dispatch({
      type: types.eventoSeleccionadoDelete,
    });
  };
  //Blog
  const showModalComentarios = () => {
    dispatch({
      type: types.showLoadingComentarios,
    });
  };
  const hideModalComentarios = () => {
    dispatch({
      type: types.hideLoadingComentarios,
    });
  };
  return (
    <AppContext.Provider
      value={{
        state,
        showModalLoading,
        hideModalLoading,
        purgaApp,
        cargaEventos,
        cargaParams,
        selecEvento,
        agregaEvento,
        limpiaParams,
        editarEvento,
        eliminarEvento,
        showModalLoadingCalendar,
        hideModalLoadingCalendar,
        purgaEventoSelecciondo,
        showModalComentarios,
        hideModalComentarios,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
