import { initialState } from "../context/initialState/diocesisInitialState";
import { types } from "../types/types";

export const diocesisReducer = (diocesis, action) => {
  switch (action.type) {
    case types.diocesisCargados:
      return {
        ...diocesis,
        ...action.payload,
      };
    case types.diocesisPurga:
      return initialState;
    default:
      return diocesis;
  }
};
