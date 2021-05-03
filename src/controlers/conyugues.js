import Swal from "sweetalert2";
import { fetchConToken, fetchImgConToken } from "../helpers/fetch";

export const insertConyuge = async (data, genero) => {
  const images = genero === "M" ? data.imagesEsposo : data.imagesEsposa;

  let datos;
  if (genero === "M") {
    datos = {
      nombre: data.nombreEsposo,
      apellido: data.apellidosEsposo,
      genero,
      telefono: data.telefonoEsposo,
      email: data.emailEsposo,
      fechaNacimiento: data.fechaNacimientoEsposo,
    };
  } else {
    datos = {
      nombre: data.nombreEsposa,
      apellido: data.apellidosEsposa,
      genero,
      telefono: data.telefonoEsposa,
      email: data.emailEsposa,
      fechaNacimiento: data.fechaNacimientoEsposa,
    };
  }
  const conyuge = await fetchConToken("conyuges", datos, "POST");
  let resp;
  if (images) {
    resp = await fetchImgConToken(
      `uploadsimg/conyuges/${conyuge.data.id}`,
      images,
      "PUT"
    );
    console.log(resp);
    //TODO: Verificar resultados de la actualizacion de la imagen
  }
  return conyuge;
};

export const updateConyugue = async (data, dataActual, genero) => {
  const { imagesEsposa, imagesEsposo } = data;
  const { esposo, esposa } = dataActual;
  let datos;
  let url;
  const images = genero === "M" ? imagesEsposo : imagesEsposa;
  const imagesDB = genero === "M" ? esposo.images : esposa.images;

  if (genero === "M") {
    url = `conyuges/${esposo._id}`;
    datos = {
      nombre: data.nombreEsposo,
      apellido: data.apellidosEsposo,
      genero: data.genero,
      telefono: data.telefonoEsposo,
      email: data.emailEsposo,
      fechaNacimiento: data.fechaNacimientoEsposo,
    };
  } else {
    url = `conyuges/${esposa._id}`;
    datos = {
      nombre: data.nombreEsposa,
      apellido: data.apellidosEsposa,
      genero: data.genero,
      telefono: data.telefonoEsposa,
      email: data.emailEsposa,
      fechaNacimiento: data.fechaNacimientoEsposa,
    };
  }
  const conyuge = await fetchConToken(url, datos, "PUT");
  let resp;
  if (images) {
    if (images !== imagesDB) {
      // eslint-disable-next-line no-unused-vars
      resp = await fetchImgConToken(
        `uploadsimg/conyuges/${conyuge.data.id}`,
        images,
        "PUT"
      );
    }
  }
  return conyuge;
};

export const deleteConyugue = async (id, permanente) => {
  try {
    const resp = await fetchConToken(
      `conyuges/${id}`,
      { permanente },
      "DELETE"
    );
    if (resp.ok) {
      console.log("Registro Borrado");
    } else {
      Swal.fire("error", resp.msg);
    }
  } catch (error) {
    console.log(error);
  }
};
