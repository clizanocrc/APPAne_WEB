import React, { useContext } from "react";
import { Divider } from "@material-ui/core";
import { AppContext } from "../context/AppContext";
import moment from "moment";

export const NotiCard = ({ noti }) => {
  const { showModalLoadingCalendar, selecEvento } = useContext(AppContext);
  const fecha = moment(noti.fechaenviado).format("DD-MMMM-yyyy HH:MM");
  const color = !noti.leido ? "lightgreen" : "lightgrey";
  const handleClick = (e) => {
    e.preventDefault();
    selecEvento(noti);
    showModalLoadingCalendar();
  };

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
    >
      <div className="mb-2 ml-2">
        <img
          alt={noti.title}
          src={noti.de.images}
          style={{
            width: "40px",
            height: "40px",
            objectFit: "fill",
            borderRadius: 50,
            backgroundColor: "lightslategray",
            marginTop: 5,
            marginBottom: 5,
            marginRight: 10,
          }}
        />
        <b>De: {noti.de.nombre}</b>
      </div>
      <div className="container">
        <h6>
          <span>{noti.title}</span>
        </h6>
        <Divider />
        <span>{noti.notes.substr(0, 100)}...</span>
        <Divider />

        <span>{fecha}</span>
        {/* <label>{fecha}</label> */}
      </div>
    </div>
  );
};
