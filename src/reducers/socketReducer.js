import { initialState } from "../context/initialState/socketInitialState";
import { types } from "../types/types";

export const socketReducer = (socketState, action) => {
  switch (action.type) {
    //Socket
    case types.socketUsuarioOnLine:
      return {
        ...socketState,
        ...action.payload,
      };
    case types.socketUsuarioPurga:
      return initialState;
    //Notificaciones
    case types.notificacionesRegistra:
      return {
        ...socketState,
        total: action.payload.total,
        notificacionesEnviadas: action.payload.notificacionesEnviadas,
        notificacionesRecibidas: action.payload.notificacionesRecibidas,
      };
    case types.notificacionesSelecUsuarios:
      return {
        ...socketState,
        usuariosSeleccionados: socketState.usuariosOnLine,
      };
    case types.notificacionesPurgaUsuarios:
      return {
        ...socketState,
        usuariosSeleccionados: [],
      };
    case types.notificacionesSelecUsuario:
      return {
        ...socketState,
        usuariosSeleccionados: [
          ...socketState.usuariosSeleccionados,
          action.payload,
        ],
      };
    case types.notificacionesEliminaUsuario:
      return {
        ...socketState,
        usuariosSeleccionados: socketState.usuariosSeleccionados.filter(
          (e) => e.uid !== action.payload.uid
        ),
      };
    default:
      return socketState;
  }
};
