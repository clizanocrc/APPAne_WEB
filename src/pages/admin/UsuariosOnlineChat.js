import React, { useContext } from "react";
import { UsuarioOnLineItemChat } from "../../components/sockets/UsuarioOnLineItemChat";
import { SocketContext } from "../../context/SocketContext";

export const UsuariosOnlineChat = () => {
  const { socketState } = useContext(SocketContext);
  return (
    <div className={"mt-2"}>
      {socketState.usuariosOnLine.map((usuario) => (
        <UsuarioOnLineItemChat key={usuario.uid} usuario={usuario} />
      ))}
    </div>
  );
};
