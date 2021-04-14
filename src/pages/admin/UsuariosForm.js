import React, { useContext } from "react";
import {
  RoleControlCol,
  TextControlCol,
  SiNoControlCol,
} from "../../components/ui/atom/FormControls";
import { AppContext } from "../../context/AppContext";
import { AuthContext } from "../../context/AuthContext";
import { aupdateUsuario } from "../../controlers/usuarios";
import { exitoFire } from "../../helpers/messagesUI";
import { useForm } from "../../hooks/useForm";

export const UsuariosForm = ({ usuario }) => {
  // console.log(usuario);
  const { auth } = useContext(AuthContext);
  const { showModalLoading, hideModalLoading } = useContext(AppContext);
  const [formValues, handleInputChange] = useForm(usuario);
  const onSubmit = async (e) => {
    e.preventDefault();
    showModalLoading();
    if (await aupdateUsuario(formValues)) {
      console.log("Actualizado");
      exitoFire("Usuario actualizado...!");
    }
    hideModalLoading();
  };
  // console.log(formValues);

  const active =
    auth.rol === "ADMIN_ROLE" && formValues.rol === "SUPER_ADMIN_ROLE"
      ? false
      : true;

  return (
    <div className="div-titulo">
      <form className="input-group" onSubmit={onSubmit}>
        <TextControlCol
          label="Nombre"
          name="nombre"
          value={formValues.nombre}
          callBack={handleInputChange}
          activado={active}
        />
        <TextControlCol
          label="Correo"
          name="correo"
          value={formValues.correo}
          callBack={handleInputChange}
          activado={active}
        />
        <RoleControlCol
          name="rol"
          value={formValues.rol}
          callBack={handleInputChange}
          activado={auth.rol === "SUPER_ADMIN_ROLE" ? true : false}
        />

        <SiNoControlCol
          name="estado"
          value={formValues.estado}
          callBack={handleInputChange}
          activado={active}
        />
        <button
          type="submit"
          className="btn btn-primary ml-2"
          disabled={!active}
        >
          Actualizar
        </button>
      </form>
    </div>
  );
};
