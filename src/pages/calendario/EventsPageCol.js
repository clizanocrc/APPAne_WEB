import { Divider } from "@material-ui/core";
import React, { useContext } from "react";
import { EventCard } from "../../components/EventCard";
import { AppContext } from "../../context/AppContext";
import {
  eventsFuturos,
  eventsHoy,
  eventsPasados,
} from "../../helpers/eventsFilter";

export const EventsPageCol = () => {
  const { state } = useContext(AppContext);
  const { eventos } = state;
  return (
    <div className="card">
      <p>Futuros</p>
      {eventsFuturos(eventos).map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
      <Divider />
      <p>Hoy</p>

      {eventsHoy(eventos).map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
      <Divider />
      <p>Pasados</p>

      {eventsPasados(eventos).map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
      <Divider />
    </div>
  );
};
