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

    case types.matrimoniosPurga:
      return initialState;
    default:
      return matrimonios;
  }
};
