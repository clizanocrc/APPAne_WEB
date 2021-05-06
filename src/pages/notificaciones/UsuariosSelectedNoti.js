import React, { useContext } from "react";
import { UsuarioSelectNoti } from "../../components/sockets/UsuarioSelectNoti";
import { SocketContext } from "../../context/SocketContext";

export const UsuariosSelectedNoti = () => {
  const { socketState } = useContext(SocketContext);

  return (
    <div>
      <h6 className="mb-2 mt-4">Seleccionados</h6>
      <div className=" divjustificadocentro mb-2"></div>
      {socketState.usuariosSeleccionados.map((usuario) => (
        <UsuarioSelectNoti key={usuario.uid} usuario={usuario} />
      ))}
    </div>
  );
};
