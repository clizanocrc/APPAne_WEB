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

  // Escuchar Notificacion personal
  useEffect(() => {
    socket?.on("notifi-personal", (resp) => {
      if (resp.ok) {
        notificacionFire(resp);
      }
    });
  }, [socket]);

  //Acciones

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
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
