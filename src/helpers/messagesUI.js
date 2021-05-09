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

export const errorSimpleFire = (texto = "Error") => {
  Swal.fire("Error", texto, "error");
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

export const notificacionFire = (data) => {
  const { msg, images } = data;
  Swal.fire({
    // icon: "success",
    title: msg,
    imageUrl: images,
    imageWidth: 100,
    imageHeight: 125,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

export const confirmDeleteFire = async (titulo) => {
  let resultado;
  await Swal.fire({
    title: titulo,
    showDenyButton: true,
    // showCancelButton: true,
    confirmButtonText: `Eliminar`,
    denyButtonText: `Cancelar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      resultado = true;
    } else if (result.isDenied) {
      resultado = false;
    }
  });
  return resultado;
};

export const notificacionTimer = (title, mensaje, timer) => {
  let timerInterval;
  Swal.fire({
    title: title,
    html: mensaje,
    // html: "I will close in <b></b> milliseconds.",
    position: "top-end",
    timer: timer,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      timerInterval = setInterval(() => {
        const content = Swal.getContent();
        if (content) {
          const b = content.querySelector("b");
          if (b) {
            b.textContent = Swal.getTimerLeft();
          }
        }
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
};
