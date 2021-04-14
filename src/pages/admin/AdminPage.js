import React from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";

export const AdminPage = () => {
  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div>Panel de Administración</div>
    </div>
  );
};
