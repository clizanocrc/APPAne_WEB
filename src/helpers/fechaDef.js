import { diasDiff } from "./diasDif";

const fechaDiffAniversario = (fechaOrigen) => {
  const dias = diasDiff(fechaOrigen);

  if (dias < 0) {
    return {
      dias,
      msg: `Ya celebraron su aniversario hace ${dias * -1} días`,
    };
  } else if (dias === 0) {
    return {
      dias,
      msg: "Hoy es su aniversario",
    };
  } else {
    return {
      dias,
      msg: `Faltan ${dias} días para su aniversario`,
    };
  }
};

const fechaDifCumple = (fechaOrigen) => {
  const dias = diasDiff(fechaOrigen);

  if (dias < 0) {
    return {
      dias,
      msg: `Ya celebraró su cumpleaños hace ${dias * -1} días`,
    };
  } else if (dias === 0) {
    return {
      dias,
      msg: "Hoy es su cumpleaños",
    };
  } else {
    return {
      dias,
      msg: `Faltan ${dias} días para su cumpleaños`,
    };
  }
};

const fechaDiffOrdenacion = (fechaOrigen) => {
  const dias = diasDiff(fechaOrigen);

  if (dias < 0) {
    return {
      dias,
      msg: "Ya calebró su aniversario",
    };
  } else if (dias === 0) {
    return {
      dias,
      msg: "Hoy es su aniversario",
    };
  } else {
    return {
      dias,
      msg: `Faltan ${dias} días para su aniversario`,
    };
  }
};
export { fechaDiffOrdenacion, fechaDifCumple, fechaDiffAniversario };
