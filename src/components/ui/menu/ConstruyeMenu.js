import React from "react";
import { MenuDirectorio } from "./MenuDirectorio";
import { MenuParametros } from "./MenuParametros";
import { MenuVacio } from "./MenuVacio";

export const ConstruyeMenu = ({ option }) => {
  switch (option) {
    case "usuarios":
    case "admin":
    case "param":
    case "usuariosalta":
    case "notifi":
      return <MenuParametros />;
    case "directorio":
    case "matrimonios":
    case "sacerdotes":
    case "matrimonionew":
    case "sacerdotenew":
      return <MenuDirectorio />;
    case "vacia":
      return <MenuParametros />;

    default:
      return <MenuVacio />;
  }
};
