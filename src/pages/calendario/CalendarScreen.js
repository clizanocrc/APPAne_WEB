import React, { useContext, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import { messages } from "../../helpers/calendar-messages-es";
import { CalendarEvent } from "./CalendarEvent";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/es";

import { AddNewFab } from "../../components/ui/AddNewFab";
import { AppContext } from "../../context/AppContext";
import { AuthContext } from "../../context/AuthContext";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { EventsPageCol } from "..";
import { DateColorEvent } from "../../helpers/eventsFilter";

moment.locale("es");
const localizer = momentLocalizer(moment);
export const CalendarScreen = () => {
  const {
    state,
    selecEvento,
    showModalLoadingCalendar,
    purgaEventoSelecciondo,
  } = useContext(AppContext);
  const { eventos } = state;

  const { auth } = useContext(AuthContext);
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  if (!eventos) return null;

  const onSelectEvent = (e) => {
    selecEvento(e);
    showModalLoadingCalendar();
  };
  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  const onSelectSlot = (e) => {
    purgaEventoSelecciondo();
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      // backgroundColor: auth.uid === event.user._id ? "#000000" : "#99FF00",
      color: auth.uid === event.user._id ? "#367cf7" : "#000000",
      backgroundColor: DateColorEvent(start),
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      // color: "#367cf7",
    };
    return {
      style,
    };
  };

  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div className="col-md-8">
        <div className="mt-1 calendar-screen mr-0 ml-0">
          <Calendar
            localizer={localizer}
            events={eventos}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "87vh" }}
            messages={messages}
            eventPropGetter={eventStyleGetter}
            onSelectEvent={onSelectEvent}
            onView={onViewChange}
            onSelectSlot={onSelectSlot}
            selectable={true}
            view={lastView}
            components={{ event: CalendarEvent }}
          />
        </div>
      </div>
      <div className="col-md-2" style={{ height: "87vh", overflowY: "scroll" }}>
        <h6>Eventos en el tiempo</h6>
        <EventsPageCol />
        {(auth.rol === "ADMIN_ROLE" || auth.rol === "SUPER_ADMIN_ROLE") && (
          <AddNewFab />
        )}
      </div>
    </div>
  );
};
