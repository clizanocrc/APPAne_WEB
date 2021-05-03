/* eslint-disable no-unused-vars */
import { fetchConToken, fetchImgConToken } from "../helpers/fetch";
import { viewErrors } from "../helpers/messagesUI";
import { insertConyuge, deleteConyugue, updateConyugue } from "./conyugues";

//Matrimonios
export const matrimonioAdd = async (data) => {
  const esposo = await insertConyuge(data, "M");
  if (!esposo.ok) {
    viewErrors(esposo);
    return esposo;
  }
  const esposa = await insertConyuge(data, "F");
  if (!esposa.ok) {
    await deleteConyugue(esposo.data.id, true);
    viewErrors(esposa);
    return esposa;
  }

  const matrimonio = await matrimonioCrea(data, esposo, esposa);
  if (!matrimonio.ok) {
    await deleteConyugue(esposo.data.id, true);
    await deleteConyugue(esposa.data.id, true);
    viewErrors(matrimonio);
    return matrimonio;
  }

  const matrimonioFinal = await fetchConToken(
    `matrimonios/${matrimonio.data.id}`
  );

  return matrimonioFinal;
};

export const matrimonioUpdate = async (data, dataActual) => {
  const { id, images: imagesActual } = dataActual;
  const { images } = data;

  const {
    nombrematrimonio,
    telefono,
    email,
    direccion,
    generalidades,
    activo,
    fechaMatrimonio,
    diocesis,
    bloque,
  } = data;

  const matrimonio = await fetchConToken(
    `matrimonios/${id}`,
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
    },
    "PUT"
  );
  //Validación de la Respuesta
  if (!matrimonio.ok) {
    viewErrors(matrimonio);
    return matrimonio;
  }
  let resp;
  if (images) {
    if (images !== imagesActual) {
      resp = await fetchImgConToken(
        `uploadsimg/matrimonios/${id}`,
        images,
        "PUT"
      );
    }
  }

  const esposaresp = await updateConyugue(data, dataActual, "F");
  if (!esposaresp.ok) {
    viewErrors(esposaresp);
    return esposaresp;
  }

  const esposoresp = await updateConyugue(data, dataActual, "M");
  if (!esposoresp.ok) {
    viewErrors(esposoresp);
    return esposoresp;
  }

  const matrimonioFinal = await fetchConToken(
    `matrimonios/${matrimonio.data.id}`
  );

  if (matrimonioFinal.ok) {
    return {
      ok: true,
      msg: "Matrimonio Actualizado",
      data: matrimonioFinal.data,
    };
  } else {
    return {
      ok: false,
      msg: "Matrimonio Desactivado...!",
      data: {},
    };
  }
};

const matrimonioCrea = async (data, esposo, esposa) => {
  const {
    nombrematrimonio,
    telefono,
    email,
    direccion,
    generalidades,
    activo,
    fechaMatrimonio,
    diocesis,
    bloque,
  } = data;
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
  let resp;
  if (data.images) {
    resp = await fetchImgConToken(
      `uploadsimg/matrimonios/${matrimonio.data.id}`,
      data.images,
      "PUT"
    );
    // console.log(resp);
    //TODO: Verificar resultados de la actualizacion de la imagen
  }
  return matrimonio;
};

//Sacerdotes
export const SacerdoteAdd = async (data) => {
  const matrimonio = await sacerdoteCrea(data);
  if (!matrimonio.ok) {
    viewErrors(matrimonio);
    return matrimonio;
  }

  const matrimonioFinal = await fetchConToken(
    `matrimonios/${matrimonio.data.id}`
  );

  return matrimonioFinal;
};

export const sacerdoteUpdate = async (data, dataActual) => {
  const { id, images: imagesActual } = dataActual;
  const { images } = data;

  const {
    nombrematrimonio,
    telefono,
    email,
    direccion,
    generalidades,
    activo,
    fechaMatrimonio,
    diocesis,
    bloque,
  } = data;

  const matrimonio = await fetchConToken(
    `matrimonios/${id}`,
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
    },
    "PUT"
  );
  //Validación de la Respuesta
  if (!matrimonio.ok) {
    viewErrors(matrimonio);
    return matrimonio;
  }
  let resp;
  if (images) {
    if (images !== imagesActual) {
      resp = await fetchImgConToken(
        `uploadsimg/matrimonios/${id}`,
        images,
        "PUT"
      );
    }
  }
  const matrimonioFinal = await fetchConToken(
    `matrimonios/${matrimonio.data.id}`
  );
  if (matrimonioFinal.ok) {
    return {
      ok: true,
      msg: "Sacerdote Actualizado",
      data: matrimonioFinal.data,
    };
  } else {
    return {
      ok: false,
      msg: "Sacerdote Desactivado...!",
      data: {},
    };
  }
};

const sacerdoteCrea = async (data) => {
  const {
    nombrematrimonio,
    telefono,
    email,
    direccion,
    generalidades,
    activo,
    fechaMatrimonio,
    diocesis,
    bloque,
  } = data;
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
      esMatrimonio: false,
    },
    "POST"
  );
  // console.log(matrimonio);
  let resp;
  if (data.images) {
    resp = await fetchImgConToken(
      `uploadsimg/matrimonios/${matrimonio.data.id}`,
      data.images,
      "PUT"
    );
    // console.log(resp);
    //TODO: Verificar resultados de la actualizacion de la imagen
  }
  return matrimonio;
};
