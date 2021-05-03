import moment from "moment";

const currentDate = moment().set({
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
  year: 0,
});
export const diasDiff = (fechaOrigen) => {
  const dateCelebracion = moment(fechaOrigen);
  const dateCelebracionDia = moment(dateCelebracion).set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    year: 0,
  });
  return dateCelebracionDia.diff(currentDate, "days");
};

export const fechaDiff = (fechaOrigen) => {
  const currentDate = moment().set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  });
  const date = moment(fechaOrigen);
  const dateDays = moment(date).set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  });
  return dateDays.diff(currentDate, "days");
};
