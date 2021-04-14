import React, { useContext } from "react";
import { Divider } from "@material-ui/core";

import { AuthContext } from "../../../context/AuthContext";
import { MenuItem } from "../atom/MenuItem";

export const MenuNoticias = () => {
  const { auth } = useContext(AuthContext);
  switch (auth.rol) {
    case "SUPER_ADMIN_ROLE":
    case "ADMIN_ROLE":
      return (
        <div className="navbar-nav">
          <MenuItem route="/home/news" caption="Noticias" />
          <Divider />
          <MenuItem route="/home/newsnew" caption="Crear Noticias" />
          <Divider />
          <MenuItem route="/home/news" caption="Noticias" />
        </div>
      );
    case "USER_ROLE":
      return (
        <div className="navbar-nav">
          <MenuItem route="/home/news" caption="Noticias" />
          <Divider />
          <MenuItem route="/home/news" caption="Noticias" />
        </div>
      );
    default:
      break;
  }
};
