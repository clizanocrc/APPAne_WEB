import React, { useContext } from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { SocketContext } from "../../context/SocketContext";
import { NotiCard } from "../../components/NotiCard";
import { NotificacionPage } from "./NotificacionPage";
import { AddNewMensaje } from "../../components/ui/AddNewMensaje";

export const NotificacionesNoRead = () => {
  const { socketState } = useContext(SocketContext);
  const { notificacionesRecibidas } = socketState;

  const sinLeer = notificacionesRecibidas.filter(
    (noti) => noti.leido === false
  );

  // useState(() => {
  //   UnSetNotificacion();
  // }, [notificacionesRecibidas]);

  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div className="col-md-4" style={{ height: "85vh", overflowY: "scroll" }}>
        {sinLeer.map((noti) => (
          <NotiCard key={noti.id} noti={noti} />
        ))}
      </div>
      <div className={"m-4"}>
        <h4 className={"mb-4"}>Mensajes sin Leer</h4>
        <NotificacionPage />
      </div>
      <AddNewMensaje />
    </div>
  );
};
