import { initialState } from "../context/initialState/authInicialState";
import { types } from "../types/types";

export const authReducer = (auth, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...auth,
        ...action.payload,
      };
    case types.authLogout:
      return initialState;
    default:
      return auth;
  }
};
