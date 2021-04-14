import React, { useContext } from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { UsuariosContext } from "../../context/UsuariosContext";
import { UsuariosForm } from "./UsuariosForm";

export const UsuariosPage = () => {
  const { usuarios } = useContext(UsuariosContext);

  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>
      <div className="col-md-10">
        <div className="div-titulo">
          <label className="col-md-3">Nombre</label>
          <label className="col-md-3">Correo</label>
          <label className="col-md-2">Rol</label>
          <label className="col-md-3">Activo</label>
          <label className="col-md-2">Actualizar</label>
        </div>
        {usuarios.usuarios.map((usuario) => (
          <UsuariosForm key={usuario.uid} usuario={usuario} />
        ))}
      </div>
    </div>
  );
};
