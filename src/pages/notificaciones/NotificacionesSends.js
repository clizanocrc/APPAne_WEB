import React, { useContext } from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { SocketContext } from "../../context/SocketContext";
import { NotiCardSend } from "../../components/NotiCardSend";
import { NotificacionSendPage } from "./NotificacionSendPage";
import { AddNewMensaje } from "../../components/ui/AddNewMensaje";

export const NotificacionesSends = () => {
  const { socketState } = useContext(SocketContext);
  const { notificacionesEnviadas } = socketState;

  // useState(() => {
  //   UnSetNotificacion();
  // }, [notificacionesEnviadas]);

  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>
      <div className="col-md-4" style={{ height: "87vh", overflowY: "scroll" }}>
        {notificacionesEnviadas.map((noti) => (
          <NotiCardSend key={noti.id} noti={noti} />
        ))}
      </div>
      <div className={"m-4"}>
        <h4 className={"mb-4"}>Mensajes Enviados</h4>
        <NotificacionSendPage />
      </div>
      <AddNewMensaje />
    </div>
  );
};
