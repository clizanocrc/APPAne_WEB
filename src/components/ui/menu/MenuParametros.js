import React, { useContext } from "react";
import { Divider } from "@material-ui/core";

import { AuthContext } from "../../../context/AuthContext";
import { MenuItem } from "../atom/MenuItem";

export const MenuParametros = ({ etiquetaHome }) => {
  const { auth } = useContext(AuthContext);

  switch (auth.rol) {
    case "SUPER_ADMIN_ROLE":
    case "ADMIN_ROLE":
      return (
        // <div className="navbar-nav">
        <div className="navbar-collapse">
          <MenuItem route="/home/admin" caption={etiquetaHome} />

          <Divider />

          {auth.rol === "SUPER_ADMIN_ROLE" && (
            <MenuItem
              route="/home/param"
              caption="Parámetros"
              icon="fa fa-cogs"
            />
          )}

          <MenuItem
            route="/home/usuarios"
            caption="Usuarios"
            icon="fa fa-users"
          />
          <MenuItem
            route="/home/usuariosalta"
            caption="Alta de Usuarios"
            icon="fa fa-user-plus"
          />
          <Divider />

          <MenuItem
            route="/home/notifi"
            caption="Notificaciones"
            icon="fa fa-comment"
          />
        </div>
      );

    default:
      break;
  }
};
