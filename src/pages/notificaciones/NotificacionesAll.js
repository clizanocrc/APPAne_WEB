import React from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";

export const NotificacionesAll = () => {
  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div>
        <h6>Todos los Mensajes</h6>
      </div>
    </div>
  );
};
