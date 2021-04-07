import { types } from "../../types/types";

export const registraMatrimonios = (resp, dispatch) => {
  const { total, matrimonios } = resp;
  dispatch({
    type: types.matrimoniosCargados,
    payload: {
      total: total,
      matrimonios: matrimonios,
    },
  });
};

export const LimpiaMatrimonios = (dispatch) => {
  dispatch({
    type: types.matrimoniosPurga,
  });
};
