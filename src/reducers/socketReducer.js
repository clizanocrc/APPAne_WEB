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
        // notificacionActiva: action.payload.notificacionesRecibidas.filter(
        //   (e) => e.id === socketState.notificacionActiva.id
        // ),
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
    case types.setNotificacionActiva:
      return {
        ...socketState,
        notificacionActiva: action.payload,
      };

    case types.updateNotificacionActiva:
      return {
        ...socketState,
        notificacionActiva: action.payload,
      };

    case types.unSetNotificacionActiva:
      return {
        ...socketState,
        notificacionActiva: [],
      };
    default:
      return socketState;
  }
};
