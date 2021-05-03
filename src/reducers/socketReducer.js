import { initialState } from "../context/initialState/socketInitialState";
import { types } from "../types/types";

export const socketReducer = (socketState, action) => {
  switch (action.type) {
    case types.socketUsuarioOnLine:
      return {
        ...socketState,
        ...action.payload,
      };
    case types.socketUsuarioPurga:
      return initialState;
    default:
      return socketState;
  }
};
