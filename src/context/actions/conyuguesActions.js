import { types } from "../../types/types";

export const registraConyugues = (resp, dispatch) => {
  const { total, conyuges } = resp;
  dispatch({
    type: types.conyugesCargados,
    payload: {
      total: total,
      conyugues: conyuges,
    },
  });
};

export const limpiaConyuges = (dispatch) => {
  dispatch({
    type: types.conyugesPurga,
  });
};
