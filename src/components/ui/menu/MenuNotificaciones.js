import React, { useContext } from "react";
import { Divider } from "@material-ui/core";

import { AuthContext } from "../../../context/AuthContext";
import { MenuItem } from "../atom/MenuItem";

export const MenuNotificaciones = ({ etiquetaHome }) => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="navbar-collapse">
      <MenuItem route="/home/notifis" caption={etiquetaHome} />

      <Divider />

      {auth.rol === "SUPER_ADMIN_ROLE" && (
        <MenuItem
          route="/home/sendnotifi"
          caption="Mensajes Masivos"
          icon="fa fa-share"
        />
      )}
      <Divider />

      <MenuItem
        route="/home/notinoread"
        caption="Sin Leer"
        icon="fa fa-inbox"
      />
      <MenuItem route="/home/notiread" caption="Leidos" icon="fa fa-glasses" />

      <MenuItem
        route="/home/notiall"
        caption="Todos"
        icon="fa fa-globe-americas"
      />

      <MenuItem
        route="/home/notisends"
        caption="Enviados"
        icon="fa fa-share-square"
      />

      <Divider />

      <MenuItem
        route="/home/notispeak"
        caption="Conversaciones"
        icon="fa fa-comments"
      />
    </div>
  );
};
