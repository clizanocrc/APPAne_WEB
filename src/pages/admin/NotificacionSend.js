import moment from "moment";
import React, { useContext } from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { AuthContext } from "../../context/AuthContext";
import { SocketContext } from "../../context/SocketContext";

export const NotificacionSend = () => {
  const { socket } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);

  const handleClick = () => {
    console.log("Click");
    socket.emit("mis-notificaciones-todas", auth.uid);
  };

  const handleCrear = () => {
    const data = {
      title: "Primera Notificación",
      notes: "Probando la primera Notififcacion",
      para: "6082f18d35ae563c282172f6",
      de: "6082f18d35ae563c282172f6",
      fechaenviado: moment(),
      leido: false,
      fechaleido: null,
    };

    socket.emit("enviar-notificacion", data);
  };
  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div>Envío de Notificaciones</div>
      <button className="btn btn-primary" onClick={handleClick}>
        Pedir Notificaciones
      </button>
      <button className="btn btn-primary" onClick={handleCrear}>
        Enviar Notificaciones
      </button>
    </div>
  );
};
