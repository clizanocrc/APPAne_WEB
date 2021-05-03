import React, { useContext } from "react";
import { UsuarioOnLineItem } from "../../components/sockets/UsuarioOnLineItem";
import { SocketContext } from "../../context/SocketContext";

export const UsuariosOnline = () => {
  const { socketState } = useContext(SocketContext);
  console.log(socketState.usuariosOnLine);
  return (
    <div>
      <h6 className="mb-2 mt-4">Usuarios en Línea</h6>

      {socketState.usuariosOnLine.map((usuario) => (
        <UsuarioOnLineItem key={usuario.id} usuario={usuario} />
      ))}
    </div>
  );
};
