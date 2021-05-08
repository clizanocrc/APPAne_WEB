import { initialState } from "../context/initialState/appInitialState";
import { types } from "../types/types";

export const appReducer = (state, action) => {
  switch (action.type) {
    case types.showLoading:
      return {
        ...state,
        isLoading: true,
      };
    case types.hideLoading:
      return {
        ...state,
        isLoading: false,
      };

    case types.resetState:
      return {
        initialState,
      };
    //Eventos
    case types.showLoadingCalendar:
      return {
        ...state,
        isLoadingCalendar: true,
      };

    case types.hideLoadingCalendar:
      return {
        ...state,
        isLoadingCalendar: false,
      };
    case types.eventosCargados:
      return {
        ...state,
        ...action.payload,
      };

    case types.eventoSeleccionado:
      return {
        ...state,
        eventoSeleccionado: action.payload,
      };
    case types.eventoSeleccionadoDelete:
      return {
        ...state,
        eventoSeleccionado: [],
      };

    case types.eventoAdd:
      return {
        ...state,
        eventos: [...state.eventos, action.payload],
      };
    case types.eventoUpdate:
      return {
        ...state,
        eventos: state.eventos.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };
    case types.eventoDelete:
      return {
        ...state,
        eventos: state.eventos.filter(
          (e) => e.id !== state.eventoSeleccionado.id
        ),
      };

    //Parámetros
    case types.paramsCargados:
      return {
        ...state,
        ...action.payload,
      };
    case types.paramsPurga:
      return {
        ...state,
        params: [],
      };
    case types.paramsUpdate:
      return {
        ...state,
        ...action.payload,
      };

    //BLog
    case types.showLoadingComentarios:
      return {
        ...state,
        isLoadingComentarios: true,
      };

    case types.hideLoadingComentarios:
      return {
        ...state,
        isLoadingComentarios: false,
      };

    case types.showLoadingMensaje:
      return {
        ...state,
        isLoadingMensaje: true,
      };

    case types.hideLoadingMensaje:
      return {
        ...state,
        isLoadingMensaje: false,
      };
    default:
      return state;
  }
};
