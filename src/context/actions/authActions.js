import { types } from "../../types/types";

export const registraLogin = (resp, dispatch) => {
  const { uid, correo, nombre, images, rol } = resp.usuario;
  dispatch({
    type: types.authLogin,
    payload: {
      uid,
      checking: false,
      logged: true,
      name: nombre,
      correo,
      rol,
      images,
    },
  });
};

export const registraLogout = (dispatch) => {
  dispatch({
    type: types.authLogout,
  });
};
