import React, { useContext } from "react";

import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { UsuariosContext } from "../../context/UsuariosContext";
import { UsuariosAltaForm } from "./UsuariosAltaForm";

export const UsuariosAltaPage = () => {
  const { usuarios } = useContext(UsuariosContext);
  const usuariosNew = [];

  usuarios.usuarios.forEach((usuario) => {
    if (usuario.rol === "NEW_USER_ROLE") {
      usuariosNew.push(usuario);
    }
  });

  return (
    // <div className="flexbox-container-row">
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>
      <div className="col-md-10">
        <div className="div-titulo">
          <label className="col-md-4">Nombre</label>
          <label className="col-md-4">Correo</label>
          <label className="col-md-3">Rol</label>
          {/* <label className="col-md-2">Actualizar</label> */}
        </div>
        {usuariosNew.map((usuario) => (
          <UsuariosAltaForm key={usuario.uid} usuario={usuario} />
        ))}
      </div>
    </div>
  );
};
