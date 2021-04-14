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
