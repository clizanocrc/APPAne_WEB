import React, { useContext } from "react";
import { Divider } from "@material-ui/core";

import { AuthContext } from "../../../context/AuthContext";
import { MenuItem } from "../atom/MenuItem";

export const MenuDocumentos = () => {
  const { auth } = useContext(AuthContext);
  switch (auth.rol) {
    case "SUPER_ADMIN_ROLE":
    case "ADMIN_ROLE":
      return (
        <div className="navbar-nav">
          <MenuItem route="/home/docs" caption="Documentos" />
          <Divider />
          <MenuItem route="/home/docsnew" caption="Crear Documentos" />
          <Divider />
          <MenuItem route="/home/docs" caption="Documentos" />
        </div>
      );
    case "USER_ROLE":
      return (
        <div className="navbar-nav">
          <MenuItem route="/home/docs" caption="Documentos" />
          <Divider />
          <MenuItem route="/home/docs" caption="Documentos" />
        </div>
      );
    default:
      break;
  }
};
