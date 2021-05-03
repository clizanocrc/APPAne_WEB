import moment from "moment";

export const prepareEvents = (events = []) => {
  return events.map((e) => ({
    ...e,
    // user: e.usuario,
    end: moment(e.end).toDate(),
    start: moment(e.start).toDate(),
  }));
};

export const prepareEventNew = (event) => {
  return {
    id: event.id,
    title: event.title,
    notes: event.notes,
    end: moment(event.end).toDate(),
    start: moment(event.start).toDate(),
    user: { _id: event.user },
  };
};

export const prepareEventEdit = (event) => {
  return {
    id: event.id,
    title: event.title,
    notes: event.notes,
    end: moment(event.end).toDate(),
    start: moment(event.start).toDate(),
    user: { _id: event.user },
  };
};
