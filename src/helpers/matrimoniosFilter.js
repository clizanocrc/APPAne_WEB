import { diasDiff } from "./diasDif";

const ordenarFecha = (matrimonios) => {
  matrimonios.sort(function (a, b) {
    if (a.fechaMatrimonio > b.fechaMatrimonio) {
      return 1;
    }
    if (a.fechaMatrimonio < b.fechaMatrimonio) {
      return -1;
    }
    return 0;
  });
  return matrimonios;
};
const ordenarDescFecha = (matrimonios) => {
  matrimonios.sort(function (a, b) {
    if (a.fechaMatrimonio < b.fechaMatrimonio) {
      return 1;
    }
    if (a.fechaMatrimonio > b.fechaMatrimonio) {
      return -1;
    }
    return 0;
  });
  return matrimonios;
};

export const aniversariosHoy = (matrimonios = []) => {
  const matrimoniosFilter = matrimonios.filter(
    (item) => diasDiff(item.fechaMatrimonio) === 0
  );
  return ordenarFecha(matrimoniosFilter);
};

export const aniversariosFuturos = (matrimonios = []) => {
  const matrimoniosFilter = matrimonios.filter(
    (item) => diasDiff(item.fechaMatrimonio) > 0
  );
  return ordenarFecha(matrimoniosFilter);
};

export const aniversariosPasados = (matrimonios = []) => {
  const matrimoniosFilter = matrimonios.filter(
    (item) => diasDiff(item.fechaMatrimonio) < 0
  );
  return ordenarDescFecha(matrimoniosFilter);
};
