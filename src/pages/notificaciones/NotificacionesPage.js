import React, { useContext } from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { SocketContext } from "../../context/SocketContext";
import { NotiCard } from "../../components/NotiCard";
import { NotificacionPage } from "./NotificacionPage";
import { AddNewMensaje } from "../../components/ui/AddNewMensaje";

export const NotificacionesPage = () => {
  const { socketState } = useContext(SocketContext);
  const { notificacionesRecibidas } = socketState;

  // useState(() => {
  //   UnSetNotificacion();
  // }, [notificacionesRecibidas]);

  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div className="col-md-4" style={{ height: "85vh", overflowY: "scroll" }}>
        {notificacionesRecibidas.map((noti) => (
          <NotiCard key={noti.id} noti={noti} />
        ))}
      </div>
      <div className={"m-4"}>
        <h4 className={"mb-4"}>Todos los Mensajes</h4>
        <NotificacionPage />
      </div>
      <AddNewMensaje />
    </div>
  );
};
