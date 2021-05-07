import { types } from "../../types/types";

export const registraUsuariosOnline = (usuarios, dispatch) => {
  const UsuariosOnLine = usuarios.filter(
    (usuario) => usuario.rol !== "NEW_USER_ROLE"
  );
  dispatch({
    type: types.socketUsuarioOnLine,
    payload: {
      usuariosOnLine: UsuariosOnLine,
    },
  });
};

export const limpiaUsuariosOnline = (dispatch) => {
  dispatch({
    type: types.socketUsuarioPurga,
  });
};
