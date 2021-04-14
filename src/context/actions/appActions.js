import { types } from "../../types/types";

export const showLoading = (dispatch) => {
  dispatch({
    type: types.showLoading,
  });
};

export const hideLoading = (dispatch) => {
  dispatch({
    type: types.hideLoading,
  });
};

export const appLimpia = (dispatch) => {
  dispatch({
    type: types.resetState,
  });
};
