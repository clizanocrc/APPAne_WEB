import { fetchConToken } from "../helpers/fetch";
import { viewErrors } from "../helpers/messagesUI";

export const aupdateUsuario = async (data) => {
  const { uid, nombre, correo, rol, estado } = data;

  try {
    const resp = await fetchConToken(
      `usuarios/${uid}`,
      { nombre, correo, rol, estado },
      "PUT"
    );

    // console.log(resp);
    if (!resp.ok) {
      viewErrors(resp);
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};

// export const updatePerfilUsuario = async (uid, data) => {
//   const { images, ...resto } = data;

//   try {
//     const resp = await fetchConToken(`usuarios/${uid}`, resto, "PATCH");
//     if (!resp.ok) {
//       viewErrors(resp);
//       return false;
//     }
//     return true;
//   } catch (error) {
//     console.log(error);
//   }
// };
