import { types } from "../../types/types";

export const registraDiocesis = (resp, dispatch) => {
  const { total, diocesis } = resp;
  dispatch({
    type: types.diocesisCargados,
    payload: {
      total: total,
      diocesis: diocesis,
    },
  });
};

export const limpiaDiocesis = (dispatch) => {
  dispatch({
    type: types.diocesisPurga,
  });
};
