import { initialState } from "../context/initialState/conyugesInitialState";
import { types } from "../types/types";

export const conyugesReducer = (conyuges, action) => {
  switch (action.type) {
    case types.conyugesCargados:
      return {
        ...conyuges,
        ...action.payload,
      };
    case types.conyugesPurga:
      return initialState;
    default:
      return conyuges;
  }
};
