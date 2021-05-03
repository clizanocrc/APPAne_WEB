import React, { useContext } from "react";
import { EventCard } from "../../components/EventCard";
import { AppContext } from "../../context/AppContext";
import { eventsHoyAndFuturos } from "../../helpers/eventsFilter";

export const EventsPage = () => {
  const { state } = useContext(AppContext);
  const { eventos } = state;
  return (
    <div className="card-columns card-columns-main mt-2">
      {eventsHoyAndFuturos(eventos).map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
};
