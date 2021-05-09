import React, { useContext } from "react";
import { UsuarioOnLineItem } from "../../components/sockets/UsuarioOnLineItem";
import { SocketContext } from "../../context/SocketContext";

export const UsuariosOnline = () => {
  const { socketState } = useContext(SocketContext);
  return (
    <div>
      <h6 className="mb-2 mt-">Miembros en Línea</h6>

      {socketState.usuariosOnLine.map((usuario) => (
        <UsuarioOnLineItem key={usuario.uid} usuario={usuario} />
      ))}
    </div>
  );
};
