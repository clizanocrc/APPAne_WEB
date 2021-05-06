import React, { useContext } from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { SocketContext } from "../../context/SocketContext";
import { NotiCard } from "../../components/NotiCard";

export const NotificacionesPage = () => {
  const { socketState } = useContext(SocketContext);
  const { notificacionesRecibidas } = socketState;

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
    </div>
  );
};
