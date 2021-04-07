import React, { useContext } from "react";
import { Divider } from "@material-ui/core";

import { AuthContext } from "../../../context/AuthContext";
import { MenuItem } from "../atom/MenuItem";

export const MenuParametros = () => {
  const { auth } = useContext(AuthContext);
  switch (auth.rol) {
    case "SUPER_ADMIN_ROLE":
    case "ADMIN_ROLE":
      return (
        <div className="navbar-nav">
          <MenuItem route="/home/admin" caption="Panel" />
          <Divider />

          {auth.rol === "SUPER_ADMIN_ROLE" && (
            <MenuItem route="/home/param" caption="Parámetros" />
          )}

          <MenuItem route="/home/usuarios" caption="Usuarios" />
          <MenuItem route="/home/usuariosalta" caption="Alta de Usuarios" />
          <Divider />

          <MenuItem route="/home/notifi" caption="Notificaciones" />
        </div>
      );

    default:
      break;
  }
};
