import React from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { FormSacerdote } from "../../components/ui/directorio/FormSacerdote";

export const SacerdotePage = () => {
  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>
      <div
        className="col-md-10"
        style={{ height: "85vh", overflowY: "scroll" }}
      >
        <FormSacerdote />
      </div>
    </div>
  );
};
