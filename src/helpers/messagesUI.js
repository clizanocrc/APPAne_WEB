import Swal from "sweetalert2";

export const viewErrors = (data) => {
  const { msg, errors } = data;
  // console.log(errors);
  if (errors) {
    var errores = ":";
    errors.map((error) => (errores += ` ${error.msg},`));
    Swal.fire("Error", msg + errores, "error");
  } else {
    Swal.fire("Error", msg, "error");
  }
};

export const exitoFire = (texto = "Exitoso") => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: texto,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const exitoFireOK = (texto = "Exitoso") => {
  Swal.fire("Exito", { texto }, "success");
};
