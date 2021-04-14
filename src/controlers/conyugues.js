import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";

export const deleteConyugue = async (id, permanente) => {
  try {
    const resp = await fetchConToken(
      `conyuges/${id}`,
      { permanente },
      "DELETE"
    );
    if (resp.ok) {
      console.log("Borrado");
    } else {
      Swal.fire("error", resp.msg);
    }
  } catch (error) {
    console.log(error);
  }
};
