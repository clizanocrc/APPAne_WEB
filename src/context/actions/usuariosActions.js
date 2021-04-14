import { types } from "../../types/types";

export const registraUsuarios = (resp, dispatch) => {
  const { total, usuarios } = resp;
  dispatch({
    type: types.usuariosCargados,
    payload: {
      total: total,
      usuarios: usuarios,
    },
  });
};

export const limpiaUsuarios = (dispatch) => {
  dispatch({
    type: types.usuariosPurga,
  });
};
