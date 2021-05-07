import React from "react";
import { MenuDirectorio } from "./MenuDirectorio";
import { MenuParametros } from "./MenuParametros";
import { MenuVacio } from "./MenuVacio";
import { MenuBlog } from "./MenuBlog";
import { MenuNotificaciones } from "./MenuNotificaciones";

export const ConstruyeMenu = ({ option }) => {
  switch (option) {
    case "usuarios":
    case "admin":
    case "param":
    case "sendnotifi":
      return <MenuParametros etiquetaHome="Panel" />;
    case "usuariosalta":
      return <MenuParametros etiquetaHome="Alta de Usuarios" />;
    case "directorio":
    case "matrimonios":
    case "matrimonio":
    case "sacerdotes":
    case "sacerdote":
    case "matrimonioedit":
    case "sacerdoteedit":
    case "sacerdotenew":
    case "celebraciones":
    case "calendario":
    case "conyugenav":
      return <MenuDirectorio etiquetaHome="Directorio" />;
    case "matrimonionew":
      return <MenuDirectorio etiquetaHome="Crear Matrimonio" />;
    case "blog":
    case "blogs":
    case "blognew":
    case "blogview":
      return <MenuBlog etiquetaHome="Blog" />;
    case "notifis":
    case "notinoread":
    case "notiread":
    case "notispeak":
    case "notisends":
      return <MenuNotificaciones etiquetaHome="Mensajes" />;
    case "vacia":
      return <MenuParametros etiquetaHome="" />;
    default:
      return <MenuVacio />;
  }
};
