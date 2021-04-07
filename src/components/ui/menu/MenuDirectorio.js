import React, { useContext } from "react";
import { Divider } from "@material-ui/core";

import { AuthContext } from "../../../context/AuthContext";
import { MenuItem } from "../atom/MenuItem";

export const MenuDirectorio = () => {
  const { auth } = useContext(AuthContext);
  switch (auth.rol) {
    case "SUPER_ADMIN_ROLE":
    case "ADMIN_ROLE":
      return (
        <div className="navbar-nav">
          <MenuItem route="/home/directorio" caption="Directorio" />
          <Divider />
          <MenuItem route="/home/matrimonionew" caption="Crear Matrimonio" />
          <MenuItem route="/home/sacerdotenew" caption="Crear Sacerdote" />
          <Divider />
          <MenuItem route="/home/matrimonios" caption="Matrimonios" />
          <MenuItem route="/home/sacerdotes" caption="Sacerdotes" />
        </div>
      );
    case "USER_ROLE":
      return (
        <div className="navbar-nav">
          <MenuItem route="/home/directorio" caption="Directorio" />
          <Divider />
          <MenuItem route="/home/matrimonios" caption="Matrimonios" />
          <MenuItem route="/home/sacerdotes" caption="Sacerdotes" />
        </div>
      );
    default:
      break;
  }
};
