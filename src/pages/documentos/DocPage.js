import React from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";

export const DocPage = () => {
  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div>Documentos</div>
    </div>
  );
};
