import React from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";

export const PerfilPage = () => {
  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>
      <div>Perfil de Usuario</div>
    </div>
  );
};
