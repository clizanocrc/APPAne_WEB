import { initialState } from "../context/MatrimoniosInitialState";
import { types } from "../types/types";

export const matrimoniosReducer = (state, action) => {
  switch (action.type) {
    case types.matrimoniosCargados:
      return {
        ...state,
        ...action.payload,
      };
    case types.matrimoniosPurga:
      return initialState;
    default:
      return state;
  }
};
