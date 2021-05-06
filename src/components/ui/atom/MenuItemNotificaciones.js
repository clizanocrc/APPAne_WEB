import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SocketContext } from "../../../context/SocketContext";
import "../../../css/img.css";
import bell from "../../../assets/bell2.png";
import { AuthContext } from "../../../context/AuthContext";

export const MenuItemNotificaciones = ({ route }) => {
  const { socketState, socket } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);
  const { notificacionesRecibidas } = socketState;
  const total = notificacionesRecibidas.length;
  const style = "nav-item nav-link text-info";

  const handleNotificaciones = () => {
    socket.emit("mis-notificaciones-todas", auth.uid);
  };

  return (
    <div
      style={{
        flexDirection: "row",
        alignItems: "self-start",
      }}
    >
      <NavLink
        activeClassName="active"
        className={style}
        exact
        to={route}
        onClick={handleNotificaciones}
      >
        <img
          alt={"hotificaciones"}
          src={bell}
          style={{
            width: "40px",
            height: "40px",
            // objectFit: "contain",
            objectFit: "scale-down",
            borderRadius: 10,
            backgroundColor: total > 0 ? "green" : "transparent",
            marginTop: 5,
            marginBottom: 5,
            marginRight: 10,
          }}
        />
        {total} {total === 1 ? "Mensaje" : "Mensajes"}
      </NavLink>
    </div>
  );
};
