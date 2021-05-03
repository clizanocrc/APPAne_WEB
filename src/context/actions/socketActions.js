import { types } from "../../types/types";

export const registraUsuariosOnline = (usuarios, dispatch) => {
  dispatch({
    type: types.socketUsuarioOnLine,
    payload: {
      usuariosOnLine: usuarios,
    },
  });
};

export const limpiaUsuariosOnline = (dispatch) => {
  dispatch({
    type: types.socketUsuarioPurga,
  });
};
