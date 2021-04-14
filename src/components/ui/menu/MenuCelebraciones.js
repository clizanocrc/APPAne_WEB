import React, { useContext } from "react";
import { Divider } from "@material-ui/core";

import { AuthContext } from "../../../context/AuthContext";
import { MenuItem } from "../atom/MenuItem";

export const MenuCelebraciones = () => {
  const { auth } = useContext(AuthContext);
  switch (auth.rol) {
    case "SUPER_ADMIN_ROLE":
    case "ADMIN_ROLE":
      return (
        <div className="navbar-nav">
          <MenuItem route="/home/celebraciones" caption="Celebraciones" />
          <Divider />
          <MenuItem
            route="/home/celebracionesnew"
            caption="Crear Celebraciones"
          />
          <Divider />
          <MenuItem route="/home/celebraciones" caption="Celebraciones" />
        </div>
      );
    case "USER_ROLE":
      return (
        <div className="navbar-nav">
          <MenuItem route="/home/celebraciones" caption="Celebraciones" />
          <Divider />
          <MenuItem route="/home/celebraciones" caption="Celebraciones" />
        </div>
      );
    default:
      break;
  }
};
