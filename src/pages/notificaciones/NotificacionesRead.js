import React, { useContext, useState } from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { SocketContext } from "../../context/SocketContext";
import { NotiCard } from "../../components/NotiCard";
import { NotificacionPage } from "./NotificacionPage";

export const NotificacionesRead = () => {
  const { socketState, UnSetNotificacion } = useContext(SocketContext);
  const { notificacionesRecibidas } = socketState;

  const leidos = notificacionesRecibidas.filter((noti) => noti.leido === true);

  useState(() => {
    UnSetNotificacion();
  }, [notificacionesRecibidas]);

  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div className="col-md-4" style={{ height: "85vh", overflowY: "scroll" }}>
        {leidos.map((noti) => (
          <NotiCard key={noti.id} noti={noti} />
        ))}
      </div>
      <div className={"m-4"}>
        <h4 className={"mb-4"}>Mensajes Leidos</h4>
        <NotificacionPage />
      </div>
    </div>
  );
};
