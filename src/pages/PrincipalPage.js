import React from "react";
import { NavbarLeft } from "../components/ui/NavbarLeft";
export const PrincipalPage = () => {
  return (
    <div>
      <div className="flexbox-container">
        <div className="col-md-2">
          <NavbarLeft />
        </div>
        <div>Página Principal</div>
      </div>
    </div>
  );
};
