import { initialState } from "../context/initialState/usuariosInitialState";
import { types } from "../types/types";

export const usuariosReducer = (usuarios, action) => {
  switch (action.type) {
    case types.usuariosCargados:
      return {
        ...usuarios,
        ...action.payload,
      };
    case types.usuariosPurga:
      return initialState;
    default:
      return usuarios;
  }
};
