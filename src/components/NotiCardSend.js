import moment from "moment";
import React, { useContext } from "react";
import { Divider } from "@material-ui/core";
import { SocketContext } from "../context/SocketContext";
import defaultUser from "../assets/defaultUser.png";
import { IconRed } from "./ui/atom/IconRed";

export const NotiCardSend = ({ noti }) => {
  const { setNotificacion } = useContext(SocketContext);
  const fecha = moment(noti.fechaenviado).format("DD-MMMM-yyyy HH:MM");
  const color = !noti.leido ? "lightgreen" : "lightgrey";
  const handleClick = (e) => {
    e.preventDefault();
    setNotificacion(noti);
    // if (!noti.leido) {
    //   socket.emit("notificacion-leida", noti);
    // }
    // // setNotificacion(noti);
  };

  const textoLectura = !noti.fechaleido
    ? "Aún sin leer"
    : "Leído el " + moment(noti.fechaleido).format("DD-MMMM-yyyy HH:MM");

  return (
    <div
      style={{
        borderColor: "Highlight",
        borderStyle: "solid",
        borderRadius: 15,
        backgroundColor: color,
        // width: 400,
        margin: 5,
        cursor: "pointer",
      }}
      className="card animate__animated animate__pulse"
      onClick={handleClick}
    >
      <div className="mb-2 ml-2">
        <img
          alt={noti.title}
          src={noti.para.images ? noti.para.images : defaultUser}
          style={{
            width: "40px",
            height: "40px",
            objectFit: "fill",
            borderRadius: 50,
            // backgroundColor: "lightslategray",
            marginTop: 5,
            marginBottom: 5,
            marginRight: 10,
          }}
        />
        <b>Para: {noti.para.nombre}</b>
      </div>
      <div className="container">
        <h6>
          <span>{noti.title}</span>
        </h6>
        <Divider />
        <span>{noti.notes.substr(0, 100)}...</span>
        <Divider />
        <div style={{ cursor: "pointer" }}>
          <small className={"ml-2"}>Enviada el {fecha}</small>

          <IconRed status={noti.leido} />
          <small className={"ml-2"}>{textoLectura}</small>
        </div>
        {/* <span>{fecha}</span> */}
        {/* <label>{fecha}</label> */}
      </div>
    </div>
  );
};
