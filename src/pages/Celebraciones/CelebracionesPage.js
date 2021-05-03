import React from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";

import { AniversariosPage } from "./AniversariosPage";
import { CumpleanosPage } from "./CumpleanosPage";

export const CelebracionesPage = () => {
  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>
      <div>
        <AniversariosPage />
      </div>
      <div>
        <CumpleanosPage genero="F" />
      </div>
      <div>
        <CumpleanosPage genero="M" />
      </div>
    </div>
  );
};
