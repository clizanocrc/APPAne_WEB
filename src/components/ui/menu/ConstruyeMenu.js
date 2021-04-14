import React from "react";
import { MenuCelebraciones } from "./MenuCelebraciones";
import { MenuDirectorio } from "./MenuDirectorio";
import { MenuParametros } from "./MenuParametros";
import { Menu1010 } from "./Menu1010";
import { MenuVacio } from "./MenuVacio";
import { MenuDocumentos } from "./MenuDocumentos";
import { MenuNoticias } from "./MenuNoticias";

export const ConstruyeMenu = ({ option }) => {
  switch (option) {
    case "usuarios":
    case "admin":
    case "param":
    case "notifi":
      return <MenuParametros etiquetaHome="Panel" />;

    case "usuariosalta":
      return <MenuParametros etiquetaHome="Alta de Usuarios" />;

    case "directorio":
    case "matrimonios":
    case "matrimonio":
    case "sacerdotes":
    case "matrimonioedit":
    case "sacerdotenew":
      return <MenuDirectorio etiquetaHome="Directorio" />;
    case "matrimonionew":
      return <MenuDirectorio etiquetaHome="Crear Matrimonio" />;

    case "celebraciones":
    case "celebracionesnew":
      return <MenuCelebraciones etiquetaHome="Celebraciones" />;

    case "1010":
    case "1010new":
      return <Menu1010 etiquetaHome="1010 Diarios" />;

    case "docs":
    case "docsnew":
      return <MenuDocumentos etiquetaHome="Documentos" />;

    case "news":
    case "newsnew":
      return <MenuNoticias etiquetaHome="Noticias" />;
    case "vacia":
      return <MenuParametros etiquetaHome="" />;

    default:
      return <MenuVacio />;
  }
};
