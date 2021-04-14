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

    default:
      return state;
  }
};
