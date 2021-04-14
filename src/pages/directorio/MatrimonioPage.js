import React from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { FormMatrimonio } from "../../components/ui/directorio/FormMatrimonio";
import { FormConyuge } from "../../components/ui/directorio/FormConyuge";

export const MatrimonioPage = () => {
  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>
      <div className="col-md-10">
        <FormMatrimonio />
        <FormConyuge genero="F" />
        <FormConyuge genero="M" />
      </div>
    </div>
  );
};
