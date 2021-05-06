import React from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";

export const NotificacionesSends = () => {
  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div>
        <h6>Mensajes Enviados</h6>
      </div>
    </div>
  );
};
