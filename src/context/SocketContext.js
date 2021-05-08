import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import {
  errorSimpleFire,
  exitoFire,
  notificacionFire,
} from "../helpers/messagesUI";
import { useSocket } from "../hooks/useSocket";
import { socketReducer } from "../reducers/socketReducer";
import { types } from "../types/types";
import {
  limpiaUsuariosOnline,
  registraUsuariosOnline,
} from "./actions/socketActions";
import { AuthContext } from "./AuthContext";
import { initialState } from "./initialState/socketInitialState";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, onLine, conectarSocket, desconectarSocket } = useSocket(
    process.env.REACT_APP_URL
  );
  const { auth } = useContext(AuthContext);

  const [socketState, dispatch] = useReducer(socketReducer, initialState);

  useEffect(() => {
    if (auth.logged) {
      conectarSocket();
    }
  }, [auth, conectarSocket]);
  useEffect(() => {
    if (!auth.logged) {
      desconectarSocket();
      limpiaUsuariosOnline(dispatch);
    }
  }, [auth, desconectarSocket]);
  //Escuchar los cambios en los Usuarios Conectados
  useEffect(() => {
    socket?.on("lista-usuarios", (usuarios) => {
      registraUsuariosOnline(usuarios, dispatch);
    });
  }, [socket]);
  //Escuchar los cambios en las notificaciones
  useEffect(() => {
    socket?.on("tus-notificaciones-todas", (notificaciones) => {
      dispatch({
        type: types.notificacionesRegistra,
        payload: notificaciones,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  //Chat
  const activarChat = async (uid) => {
    console.log(uid);
    activaChat(uid);
    //Cargar los mensajes de la base de datos
    //TODO: Emitir la solicitud de los mensajes del chat

    // const resp = await fetchConToken(`mensajes/${usuario.uid}`);
    const resp = [];

    cargarChat(resp);

    //Mover el scroll
    // scrollToBotton("messagesAll");
  };

  //Acciones
  //Chat

  const activaChat = (uid) => {
    dispatch({
      type: types.activarChat,
      payload: uid,
    });
  };

  const cargarChat = (mensajes) => {
    dispatch({
      type: types.cargaChat,
      payload: mensajes,
    });
  };

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
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
