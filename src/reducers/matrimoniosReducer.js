import { initialState } from "../context/initialState/matrimoniosInitialState";
import { types } from "../types/types";

export const matrimoniosReducer = (matrimonios, action) => {
  switch (action.type) {
    case types.matrimoniosCargados:
      return {
        ...matrimonios,
        ...action.payload,
      };

    case types.matrimonioSeleccionado:
      return {
        ...matrimonios,
        matrimonioSeleccionado: action.payload,
      };

    case types.matrimonioAdd:
      return {
        ...matrimonios,
        matrimonios: [...matrimonios.matrimonios, action.payload],
      };

    case types.matrimonioUpdate:
      return {
        ...matrimonios,
        matrimonios: matrimonios.matrimonios.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.matrimonioDelete:
      return {
        ...matrimonios,
        matrimonios: matrimonios.matrimonios.filter(
          (e) => e.id !== matrimonios.matrimonioSeleccionado.id
        ),
      };

    case types.sacerdotesCargados:
      return {
        ...matrimonios,
        ...action.payload,
      };

    case types.sacerdoteSeleccionado:
      return {
        ...matrimonios,
        sacerdoteSeleccionado: action.payload,
      };

    case types.sacerdoteAdd:
      return {
        ...matrimonios,
        sacerdotes: [...matrimonios.sacerdotes, action.payload],
      };

    case types.sacerdoteUpdate:
      return {
        ...matrimonios,
        sacerdotes: matrimonios.sacerdotes.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.sacerdoteDelete:
      return {
        ...matrimonios,
        sacerdotes: matrimonios.sacerdotes.filter(
          (e) => e.id !== matrimonios.sacerdoteSeleccionado.id
        ),
      };

    case types.matrimoniosPurga:
      return initialState;
    default:
      return matrimonios;
  }
};
