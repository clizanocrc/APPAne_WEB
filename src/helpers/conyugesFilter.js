import { diasDiff } from "./diasDif";

const ordenarFecha = (conyuges) => {
  conyuges.sort(function (a, b) {
    if (a.fechaNacimiento > b.fechaNacimiento) {
      return 1;
    }
    if (a.fechaNacimiento < b.fechaNacimiento) {
      return -1;
    }
    return 0;
  });
  return conyuges;
};
const ordenarDescFecha = (conyuges) => {
  conyuges.sort(function (a, b) {
    if (a.fechaNacimiento < b.fechaNacimiento) {
      return 1;
    }
    if (a.fechaNacimiento > b.fechaNacimiento) {
      return -1;
    }
    return 0;
  });
  return conyuges;
};

export const cumpleanosHoy = (conyuges = []) => {
  const conyugesFilter = conyuges.filter(
    (item) => diasDiff(item.fechaNacimiento) === 0
  );
  return ordenarFecha(conyugesFilter);
};

export const cumpleanosFuturos = (conyuges = []) => {
  const conyugesFilter = conyuges.filter(
    (item) => diasDiff(item.fechaNacimiento) > 0
  );
  return ordenarFecha(conyugesFilter);
};

export const cumpleanosPasados = (conyuges = []) => {
  const conyugesFilter = conyuges.filter(
    (item) => diasDiff(item.fechaNacimiento) < 0
  );
  return ordenarDescFecha(conyugesFilter);
};

export const DateColor = (date) => {
  const diffDays = diasDiff(date);
  if (diffDays < 0) {
    return "#FFD8E1";
  }
  if (diffDays > 0) {
    return "#CDEBFF";
  }
  return "#eeeeee";
};
