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

    case types.notificacionesRecibidas:
      return {
        ...socketState,
        notificacionesRecibidas: action.payload.notificacionesRecibidas,
      };

    case types.notificacionesEnviadas:
      return {
        ...socketState,
        notificacionesEnviadas: action.payload.notificacionesEnviadas,
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

    //Chat
    case types.activarChat:
      return {
        ...socketState,
        chatActivo: action.payload,
      };

    case types.cargaChat:
      return {
        ...socketState,
        chat: action.payload,
      };

    case types.cargaChatNoLeido:
      return {
        ...socketState,
        chatNoLeido: action.payload,
      };

    case types.resgistraMensajeChat:
      return {
        ...socketState,
        chat: [...socketState.chat, action.payload],
      };

    case types.leidoMensajeChat:
      // console.log(action.payload);
      return {
        ...socketState,
        chat: socketState.chat.map((e) =>
          e._id === action.payload._id ? action.payload : e
        ),
      };
    default:
      return socketState;
  }
};
