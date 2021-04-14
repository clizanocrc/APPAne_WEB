/* eslint-disable no-unused-vars */
import { fetchConToken, fetchImgConToken } from "../helpers/fetch";
import { viewErrors } from "../helpers/messagesUI";
import { deleteConyugue } from "./conyugues";

export const matrimonioAdd = async (data) => {
  const {
    nombrematrimonio,
    telefono,
    email,
    direccion,
    generalidades,
    images,
    activo,
    fechaMatrimonio,
    diocesis,
    bloque,
    nombreEsposo,
    apellidosEsposo,
    telefonoEsposo,
    emailEsposo,
    fechaNacimientoEsposo,
    imagesEsposo,
    nombreEsposa,
    apellidosEsposa,
    telefonoEsposa,
    emailEsposa,
    fechaNacimientoEsposa,
    imagesEsposa,
  } = data;

  //Validaciones de Datos

  //Fetchs
  //Creación del Esposo
  const esposo = await fetchConToken(
    "conyuges",
    {
      nombre: nombreEsposo,
      apellido: apellidosEsposo,
      genero: "M",
      telefono: telefonoEsposo,
      email: emailEsposo,
      fechaNacimiento: fechaNacimientoEsposo,
    },
    "POST"
  );
  // Validación de la Respuesta
  if (!esposo.ok) {
    viewErrors(esposo);
    return esposo;
  }

  //Creación de la Esposa
  const esposa = await fetchConToken(
    "conyuges",
    {
      nombre: nombreEsposa,
      apellido: apellidosEsposa,
      genero: "F",
      telefono: telefonoEsposa,
      email: emailEsposa,
      fechaNacimiento: fechaNacimientoEsposa,
    },
    "POST"
  );
  //Validación de la Respuesta
  if (!esposa.ok) {
    await deleteConyugue(esposo.id, true);
    viewErrors(esposa);
    return esposa;
  }

  //Creación del Matrimonio
  const matrimonio = await fetchConToken(
    "matrimonios",
    {
      nombrematrimonio,
      activo,
      telefono,
      email,
      fechaMatrimonio,
      direccion,
      generalidades,
      bloque,
      diocesis,
      esposo: esposo.data.id,
      esposa: esposa.data.id,
    },
    "POST"
  );
  //Validación de la Respuesta
  if (!matrimonio.ok) {
    await deleteConyugue(esposo.id, true);
    await deleteConyugue(esposa.id, true);
    viewErrors(matrimonio);
    return matrimonio;
  }

  //Subir Imagenes
  let resp;
  //Subir Imagen del Esposo
  if (imagesEsposo) {
    resp = await fetchImgConToken(
      `uploadsimg/conyuges/${esposo.data.id}`,
      imagesEsposo,
      "PUT"
    );
  }
  //TODO: Validación de la Respuesta
  //Subir Imagen del Esposo
  if (imagesEsposa) {
    resp = await fetchImgConToken(
      `uploadsimg/conyuges/${esposa.data.id}`,
      imagesEsposa,
      "PUT"
    );
  }
  //TODO: Validación de la Respuesta
  //Subir Imagen del Matrimonio
  if (images) {
    resp = await fetchImgConToken(
      `uploadsimg/matrimonios/${matrimonio.data.id}`,
      images,
      "PUT"
    );
  }
  //TODO: Validación de la Respuesta

  const matrimonioFinal = await fetchConToken(
    `matrimonios/${matrimonio.data.id}`
  );

  return matrimonioFinal;
};

export const matrimonioEdit = (props) => {
  console.log(props);
};
