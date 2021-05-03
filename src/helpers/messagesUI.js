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

export const exitoFire = (texto = "Exitoso", time = 1500) => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: texto,
    showConfirmButton: false,
    timer: time,
    imageUrl:
      "https://res.cloudinary.com/dyor179ps/image/upload/v1619880963/APPAne/params/emm4_qo1mfy.png",
    imageWidth: 225,
    imageHeight: 275,
  });
};

// export const exitoFireOK = (texto = "Exitoso") => {
//   Swal.fire("Exito", { texto }, "success");
// };

export const errorSimpleFire = (texto = "Error") => {
  Swal.fire("Error", { texto }, "error");
};

export const exitoFireOK = (texto = "Exitoso") => {
  Swal.fire({
    icon: "success",
    title: texto,
    imageUrl:
      "https://res.cloudinary.com/dyor179ps/image/upload/v1619880963/APPAne/params/emm4_qo1mfy.png",
    imageWidth: 225,
    imageHeight: 275,
  });
};
