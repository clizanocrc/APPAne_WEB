import React, { useContext } from "react";
import { Divider } from "@material-ui/core";
import { AppContext } from "../context/AppContext";
import moment from "moment";
import { DateColorEvent } from "../helpers/eventsFilter";


export const EventCard = (event) => {
  const { showModalLoadingCalendar, selecEvento } = useContext(AppContext);
  const fecha = moment(event.start).format("DD-MMMM-yyyy");

  const handleClick = (e) => {
    e.preventDefault();
    selecEvento(event);
    showModalLoadingCalendar();
  };

  return (
    <div
      style={{
        borderColor: "Highlight",
        borderStyle: "solid",
        borderRadius: 15,
        backgroundColor: DateColorEvent(event.start),
        width: 190,
        margin: 5,
      }}
      className="card animate__animated animate__pulse"
    >
      <div className="container">
        <h6>
          <b>{event.title}</b>
        </h6>
        <label>{event.notes.substr(0, 20)}...</label>
        <label>{fecha}</label>
        <Divider />
        <button className="btn btn-secondary mt-2 mb-2" onClick={handleClick}>
          Ver Evento...
        </button>
      </div>
    </div>
  );
};
