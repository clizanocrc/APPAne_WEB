import React, { useContext } from "react";
import { UsuarioOnLineItemNoti } from "../../components/sockets/UsuarioOnLineItemNoti";
import { SocketContext } from "../../context/SocketContext";

export const UsuariosOnlineNotificaciones = () => {
  const { socketState, seleccionaUsuarios, desSeleccionaUsuarios } = useContext(
    SocketContext
  );

  const handleTodos = () => {
    desSeleccionaUsuarios();
    seleccionaUsuarios();
  };
  const handleNinguno = () => {
    desSeleccionaUsuarios();
  };

  return (
    <div>
      <h6 className="mb-2 mt-4">Enviar a...</h6>
      <div className=" divjustificadocentro mb-2">
        <button className="btn btn-outline-primary" onClick={handleTodos}>
          A Todos
        </button>
        <button
          className="btn btn-outline-primary ml-1"
          onClick={handleNinguno}
        >
          Ninguno
        </button>
      </div>
      {socketState.usuariosOnLine.map((usuario) => (
        <UsuarioOnLineItemNoti key={usuario.uid} usuario={usuario} />
      ))}
    </div>
  );
};
