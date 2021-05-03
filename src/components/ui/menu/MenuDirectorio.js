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
        // <div className="navbar-nav">
        <div className="navbar-collapse">
          <MenuItem route="/home/directorio" caption="Directorio" />
          <Divider />
          <MenuItem
            route="/home/matrimonionew"
            caption="+ Matrimonio"
            icon="fa fa-address-card"
          />
          <MenuItem
            route="/home/sacerdotenew"
            caption="+ Sacerdote"
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
          <Divider />

          <MenuItem
            route="/home/calendario"
            caption="Calendario"
            icon="fa fa-calendar-alt"
          />
          <MenuItem
            route="/home/celebraciones"
            caption="Celebraciones"
            icon="fa fa-calendar-alt"
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
          <Divider />

          <MenuItem
            route="/home/calendario"
            caption="Calendario"
            icon="fa fa-calendar-alt"
          />
          <MenuItem
            route="/home/celebraciones"
            caption="Celebraciones"
            icon="fa fa-calendar-alt"
          />
        </div>
      );
    default:
      break;
  }
};
