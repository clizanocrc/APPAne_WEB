import moment from "moment";

const now = moment().minutes(0).seconds(0);

const nowPlus1 = now.clone().add(1, "hours");

export const initialFormMatrimonio = {
  nombrematrimonio: "",
  telefono: "",
  email: "",
  images: "",
  diocesis: "",
  bloque: "Primero",
  activo: "1",
  fechaMatrimonio: now.toDate(),
  direccion: "",
  generalidades: "Ninguna",
  nombreEsposo: "",
  apellidosEsposo: "",
  telefonoEsposo: "",
  emailEsposo: "",
  fechaNacimientoEsposo: now.toDate(),
  imagesEsposo: "",
  nombreEsposa: "",
  telefonoEsposa: "",
  apellidosEsposa: "",
  emailEsposa: "",
  fechaNacimientoEsposa: now.toDate(),
  imagesEsposa: "",
};

export const initialFormSacerdotes = {
  nombrematrimonio: "",
  telefono: "",
  email: "",
  images: "",
  diocesis: "",
  bloque: "Primero",
  activo: "1",
  fechaMatrimonio: now.toDate(),
  fechaOrdenacion: now.toDate(),
  direccion: "",
  generalidades: "Ninguna",
};

export const initEvent = {
  title: "",
  notes: "",
  start: now.toDate(),
  end: nowPlus1.toDate(),
  // user: {},
};

export const initialFormBlog = {
  titulo: "",
  contenidocorto: "",
  contenido: "",
  images: "",
  categoria: "",
};

// export const initialFormMatrimonio = {
//   nombrematrimonio: "Lizano",
//   telefono: "24463218",
//   email: "loslizano@sacipcr.com",
//   direccion: "Atenas",
//   generalidades: "Ninguna",
//   images: "",
//   activo: "1",
//   fechaMatrimonio: now.toDate(),
//   diocesis: "605fa438cc52954df4ab9ab5",
//   bloque: "Primero",
//   nombreEsposo: "Carlos",
//   apellidosEsposo: "Lizano",
//   telefonoEsposo: "88131936",
//   emailEsposo: "kaycrc@gmail.com",
//   fechaNacimientoEsposo: now.toDate(),
//   imagesEsposo: "",
//   nombreEsposa: "Catalina",
//   apellidosEsposa: "Campos",
//   telefonoEsposa: "83505252",
//   emailEsposa: "katy@gmail.com",
//   fechaNacimientoEsposa: now.toDate(),
//   imagesEsposa: "",
// };
