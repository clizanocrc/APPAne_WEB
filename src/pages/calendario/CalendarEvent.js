import React from "react";

export const CalendarEvent = ({ event }) => {
  const { title, notes } = event;
  return (
    <div className="animate__animated animate__flash">
      <strong>{title}</strong>
      <span> | {notes}</span>
    </div>
  );
};
