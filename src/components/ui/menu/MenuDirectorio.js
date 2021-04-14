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
          <MenuItem
            route="/home/matrimonionew"
            caption="Crear Matrimonio"
            icon="fa fa-address-card"
          />
          <MenuItem
            route="/home/sacerdotenew"
            caption="Crear Sacerdote"
            icon="fa fa-address-card"
          />
          <Divider />
          <MenuItem
            route="/home/matrimonios"
            caption="Matrimonios"
            icon="fa fa-restroom"
          />
          <MenuItem
            route="/home/sacerdotes"
            caption="Sacerdotes"
            icon="fa fa-male"
          />
        </div>
      );
    case "USER_ROLE":
      return (
        <div className="navbar-nav">
          <MenuItem route="/home/directorio" caption="Directorio" />
          <Divider />
          <MenuItem
            route="/home/matrimonios"
            caption="Matrimonios"
            icon="fa fa-restroom"
          />
          <MenuItem
            route="/home/sacerdotes"
            caption="Sacerdotes"
            icon="fa fa-male"
          />
        </div>
      );
    default:
      break;
  }
};
