import { fechaDiff } from "./diasDif";

export const eventsFuturos = (eventos = []) => {
  const eventosFilter = eventos.filter((item) => fechaDiff(item.start) > 0);
  return eventosFilter;
};

export const eventsHoy = (eventos = []) => {
  const eventosFilter = eventos.filter((item) => fechaDiff(item.start) === 0);
  return eventosFilter;
};

export const eventsHoyAndFuturos = (eventos = []) => {
  const eventosFilter = eventos.filter((item) => fechaDiff(item.start) >= 0);
  return eventosFilter;
};

export const eventsPasados = (eventos = []) => {
  const eventosFilter = eventos.filter((item) => fechaDiff(item.start) < 0);
  return eventosFilter;
};

export const DateColorEvent = (date) => {
  const diffDays = fechaDiff(date);
  if (diffDays < 0) {
    return "#FFD8E1";
  }
  if (diffDays > 0) {
    return "#CDEBFF";
  }
  return "#eeeeee";
};
