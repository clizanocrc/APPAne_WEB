import { initialState } from "../context/initialState/conyugesInitialState";
import { types } from "../types/types";

export const conyugesReducer = (conyuges, action) => {
  // console.log(action);
  switch (action.type) {
    case types.conyugesCargados:
      return {
        ...conyuges,
        ...action.payload,
      };

    case types.conyugeSeleccionado:
      return {
        ...conyuges,
        conyugueSeleccionado: action.payload,
      };

    case types.conyugeAdd:
      return {
        ...conyuges,
        conyuges: [...conyuges.conyuges, action.payload],
      };

    case types.conyugeUpdate:
      return {
        ...conyuges,
        conyuges: conyuges.conyuges.map((e) =>
          e.id === action.payload._id ? action.payload : e
        ),
      };

    case types.conyugeDelete:
      return {
        ...conyuges,
        conyuges: conyuges.conyuges.filter((e) => e.id !== action.payload._id),
      };

    case types.conyugesPurga:
      return initialState;
    default:
      return conyuges;
  }
};
