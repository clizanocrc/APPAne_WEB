import React, { useContext } from "react";
import { Divider } from "@material-ui/core";

import { AuthContext } from "../../../context/AuthContext";
import { MenuItem } from "../atom/MenuItem";

export const Menu1010 = () => {
  const { auth } = useContext(AuthContext);
  switch (auth.rol) {
    case "SUPER_ADMIN_ROLE":
    case "ADMIN_ROLE":
      return (
        <div className="navbar-nav">
          <MenuItem route="/home/1010" caption="1010 Diario" />
          <Divider />
          <MenuItem route="/home/1010new" caption="Crear 1010" />
          <Divider />
          <MenuItem route="/home/1010" caption="1010 Diario" />
        </div>
      );
    case "USER_ROLE":
      return (
        <div className="navbar-nav">
          <MenuItem route="/home/1010" caption="1010 Diario" />
          <Divider />
          <MenuItem route="/home/1010" caption="1010 Diario" />
        </div>
      );
    default:
      break;
  }
};
