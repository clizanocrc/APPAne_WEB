import { types } from "../../types/types";

export const registraConyugues = (resp, dispatch) => {
  const { total, conyuges } = resp;
  dispatch({
    type: types.conyugesCargados,
    payload: {
      total: total,
      conyuges: conyuges,
    },
  });
};

export const seleccionaConyuge = (payload, dispatch) => {
  dispatch({
    type: types.conyugeSeleccionado,
    payload,
  });
};

export const limpiaConyuges = (dispatch) => {
  dispatch({
    type: types.conyugesPurga,
  });
};

export const addConyuge = (payload, dispatch) => {
  dispatch({
    type: types.conyugeAdd,
    payload,
  });
};
export const updateConyuge = (payload, dispatch) => {
  dispatch({
    type: types.conyugeUpdate,
    payload,
  });
};
export const deleteConyuge = (payload, dispatch) => {
  dispatch({
    type: types.conyugeDelete,
    payload,
  });
};
