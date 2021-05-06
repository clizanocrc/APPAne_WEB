import React from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";

export const NotificacionesRead = () => {
  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div>
        <h6>Menajes Leidos</h6>
      </div>
    </div>
  );
};
