import React, { useContext } from "react";
import {
  RoleControlCol,
  TextControlCol,
  RoleControlColAlta,
} from "../../components/ui/atom/FormControls";
import { AppContext } from "../../context/AppContext";
import { AuthContext } from "../../context/AuthContext";
import { aupdateUsuario } from "../../controlers/usuarios";
import { exitoFire } from "../../helpers/messagesUI";
import { useForm } from "../../hooks/useForm";

export const UsuariosAltaForm = ({ usuario }) => {
  const { auth } = useContext(AuthContext);
  const { showModalLoading, hideModalLoading } = useContext(AppContext);
  const [formValues, onChange] = useForm(usuario);

  const onSubmit = async (e) => {
    e.preventDefault();
    showModalLoading();
    if (await aupdateUsuario(formValues)) {
      exitoFire("Usuario Actualizado...!");
    }
    hideModalLoading();
  };

  return (
    // <div className="div-titulo">
    <div className="flexbox-container">
      <form className="input-group" onSubmit={onSubmit}>
        <TextControlCol
          label="Nombre"
          name="nombre"
          value={formValues.nombre}
          callBack={onChange}
          activado={false}
        />
        <TextControlCol
          label="Correo"
          name="correo"
          value={formValues.correo}
          callBack={onChange}
          activado={false}
        />
        {auth.rol === "SUPER_ADMIN_ROLE" ? (
          <RoleControlCol
            name="rol"
            value={formValues.rol}
            callBack={onChange}
          />
        ) : (
          <RoleControlColAlta
            name="rol"
            value={formValues.rol}
            callBack={onChange}
          />
        )}
        <button type="submit" className="btn btn-primary ml-2">
          Actualizar
        </button>
      </form>
    </div>
  );
};
