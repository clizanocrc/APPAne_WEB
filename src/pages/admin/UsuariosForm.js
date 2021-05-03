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
  const { auth } = useContext(AuthContext);
  const { showModalLoading, hideModalLoading } = useContext(AppContext);
  const [formValues, onChange] = useForm(usuario);
  const onSubmit = async (e) => {
    e.preventDefault();
    showModalLoading();
    if (await aupdateUsuario(formValues)) {
      exitoFire("Usuario actualizado...!");
    }
    hideModalLoading();
  };

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
          callBack={onChange}
          activado={active}
        />
        <TextControlCol
          label="Correo"
          name="correo"
          value={formValues.correo}
          callBack={onChange}
          activado={active}
        />
        <RoleControlCol
          name="rol"
          value={formValues.rol}
          callBack={onChange}
          activado={auth.rol === "SUPER_ADMIN_ROLE" ? true : false}
        />

        <SiNoControlCol
          name="estado"
          value={formValues.estado}
          callBack={onChange}
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
