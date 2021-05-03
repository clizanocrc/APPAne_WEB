import { types } from "../../types/types";

// Matrimonios
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
export const seleccionaMatrimonio = (payload, dispatch) => {
  dispatch({
    type: types.matrimonioSeleccionado,
    payload,
  });
};
export const LimpiaMatrimonios = (dispatch) => {
  dispatch({
    type: types.matrimoniosPurga,
  });
};
export const addMatrimonio = (payload, dispatch) => {
  dispatch({
    type: types.matrimonioAdd,
    payload,
  });
};
export const updateMatrimonio = (payload, dispatch) => {
  dispatch({
    type: types.matrimonioUpdate,
    payload,
  });
};
export const deleteMatrimonio = (payload, dispatch) => {
  dispatch({
    type: types.matrimonioDelete,
    payload,
  });
};

// Sacerdotes
export const registraSacerdotes = (resp, dispatch) => {
  const { totalS, sacerdotes } = resp;
  dispatch({
    type: types.sacerdotesCargados,
    payload: {
      totalS: totalS,
      sacerdotes: sacerdotes,
    },
  });
};
export const seleccionaSacerdote = (payload, dispatch) => {
  dispatch({
    type: types.sacerdoteSeleccionado,
    payload,
  });
};
export const LimpiaSacerdotes = (dispatch) => {
  dispatch({
    type: types.matrimoniosPurga,
  });
};
export const addSacerdote = (payload, dispatch) => {
  dispatch({
    type: types.sacerdoteAdd,
    payload,
  });
};
export const updateSacerdote = (payload, dispatch) => {
  dispatch({
    type: types.sacerdoteUpdate,
    payload,
  });
};
export const deleteSacerdote = (payload, dispatch) => {
  dispatch({
    type: types.sacerdoteDelete,
    payload,
  });
};
