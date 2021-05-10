import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import {
  errorSimpleFire,
  exitoFire,
  notificacionFire,
  // notificacionTimer,
} from "../helpers/messagesUI";
import { useSocket } from "../hooks/useSocket";
import { AuthContext } from "./AuthContext";
import { socketReducer } from "../reducers/socketReducer";
import {
  limpiaUsuariosOnline,
  registraUsuariosOnline,
} from "./actions/socketActions";
import { initialState } from "./initialState/socketInitialState";
import { types } from "../types/types";

export const SocketContext = createContext();
export const SocketProvider = ({ children }) => {
  const { socket, onLine, conectarSocket, desconectarSocket } = useSocket(
    process.env.REACT_APP_URL
  );
  const { auth } = useContext(AuthContext);
  const [socketState, dispatch] = useReducer(socketReducer, initialState);

  //Listeners

  //#region Socket
  useEffect(() => {
    //Conectar el Socket cuando el usuario se logea
    if (auth.logged) {
      conectarSocket();
    }
  }, [auth, conectarSocket]);
  useEffect(() => {
    //Desconectar el siocket cuando el usuario se desconecta
    if (!auth.logged) {
      desconectarSocket();
      limpiaUsuariosOnline(dispatch);
    }
  }, [auth, desconectarSocket]);
  useEffect(() => {
    //Escuchar los cambios en los Usuarios Conectados
    socket?.on("lista-usuarios", (usuarios) => {
      registraUsuariosOnline(usuarios, auth.uid, dispatch);
    });
  }, [socket, auth]);
  //#endregion

  //#region Notificaciones
  //Escuchar los cambios en las notificaciones
  useEffect(() => {
    socket?.on("tus-notificaciones-todas", (notificaciones) => {
      dispatch({
        type: types.notificacionesRegistra,
        payload: notificaciones,
      });
    });
  }, [socket]);

  //Escuchar respuestas del resultado del envío de notificaciones
  useEffect(() => {
    socket?.on("resp-notifi", (resp) => {
      if (resp.ok) {
        exitoFire(resp.msg);
        desSeleccionaUsuarios();
      } else {
        errorSimpleFire(resp.msg);
      }
    });
  }, [socket]);
  useEffect(() => {
    socket?.on("resp-notifi-leida", (resp) => {
      if (resp.ok) {
        updateNotiSelected(resp.notificacion);
      }
    });
  }, [socket]);
  useEffect(() => {
    socket?.on("tus-notificaciones-recibidas", (resp) => {
      if (resp.ok) {
        setNotificacionesRecibidas(resp);
      }
    });
  }, [socket]);
  useEffect(() => {
    socket?.on("tus-notificaciones-enviadas", (resp) => {
      if (resp.ok) {
        setNotificacionesEnviadas(resp);
      }
    });
  }, [socket]);
  // Escuchar Notificacion personal
  useEffect(() => {
    socket?.on("notifi-personal", (resp) => {
      if (resp.ok) {
        notificacionFire(resp);
      }
    });
  }, [socket]);

  //#endregion

  //#region Chat
  // Escuchar mensajes de chat
  useEffect(() => {
    socket?.on("obtener-chat", (resp) => {
      if (resp.ok) {
        cargarChat(resp.chat);
      }
    });
  }, [socket]);

  useEffect(() => {
    socket?.on("mensaje-personal", (resp) => {
      if (resp.ok) {
        registraMensaje(resp.mensaje);
      }
    });
  }, [socket]);

  useEffect(() => {
    socket?.on("chat-leido", (resp) => {
      // console.log(resp);
      if (resp.ok) {
        leidoChat(resp.mensajes);
      }
    });
  }, [socket]);

  useEffect(() => {
    socket?.on("chat-no-leido", (resp) => {
      if (resp.ok) {
        chatNoLeido(resp.chatSinLeer);
        // console.log(socketState);
        // if (resp.chatSinLeer.length > 0) {
        //   if (socketState.chatActivo === null) {
        //     console.log(socketState.chatActivo);
        //     notificacionTimer(
        //       "Tiene nuevos mensajes en el Chat!!!",
        //       "Revísalos",
        //       1000
        //     );
        //   }
        // }
      }
    });
  }, [socket]);
  //#endregion

  //Acciones

  //#region Acciones del Chat

  const activarChat = async (data) => {
    activaChat(data.mensajesDe);
    const payload = {
      miId: data.miId,
      mensajesDe: data.mensajesDe,
    };
    socket.emit("obtener-chat", payload);
  };
  const chatLeido = (uid) => {
    socket.emit("chat-leido", uid);
  };
  const activaChat = (uid) => {
    dispatch({
      type: types.activarChat,
      payload: uid,
    });
  };
  const cargarChat = (chat) => {
    dispatch({
      type: types.cargaChat,
      payload: chat,
    });
  };
  const leidoChat = (chat) => {
    dispatch({
      type: types.leidoMensajeChat,
      payload: chat,
    });
  };
  const chatNoLeido = (chat) => {
    dispatch({
      type: types.cargaChatNoLeido,
      payload: chat,
    });
  };
  const registraMensaje = (chat) => {
    dispatch({
      type: types.resgistraMensajeChat,
      payload: chat,
    });
  };

  //#endregion

  //#region Acciones de Notificaciones
  const updateNotiSelected = (payload) => {
    dispatch({
      type: types.updateNotificacionActiva,
      payload,
    });
  };
  const seleccionaUsuarios = () => {
    dispatch({
      type: types.notificacionesSelecUsuarios,
    });
  };
  const desSeleccionaUsuarios = () => {
    dispatch({
      type: types.notificacionesPurgaUsuarios,
    });
  };
  const seleccionaUsuario = (payload) => {
    dispatch({
      type: types.notificacionesSelecUsuario,
      payload,
    });
  };
  const eliminaUsuario = (payload) => {
    dispatch({
      type: types.notificacionesEliminaUsuario,
      payload,
    });
  };
  const setNotificacion = (payload) => {
    dispatch({
      type: types.setNotificacionActiva,
      payload,
    });
  };
  const setNotificacionesRecibidas = (payload) => {
    dispatch({
      type: types.notificacionesRecibidas,
      payload,
    });
  };
  const setNotificacionesEnviadas = (payload) => {
    dispatch({
      type: types.notificacionesEnviadas,
      payload,
    });
  };
  const UnSetNotificacion = () => {
    dispatch({
      type: types.unSetNotificacionActiva,
    });
  };
  //#endregion

  return (
    <SocketContext.Provider
      value={{
        socket,
        socketState,
        onLine,
        seleccionaUsuarios,
        desSeleccionaUsuarios,
        seleccionaUsuario,
        eliminaUsuario,
        setNotificacion,
        UnSetNotificacion,
        activarChat,
        activaChat,
        chatLeido,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
