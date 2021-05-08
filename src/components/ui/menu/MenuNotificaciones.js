import React from "react";
import { Divider } from "@material-ui/core";

import { MenuItem } from "../atom/MenuItem";

export const MenuNotificaciones = ({ etiquetaHome }) => {
  return (
    <div className="navbar-collapse">
      <MenuItem route="/home/notifis" caption={etiquetaHome} />

      <Divider />

      <MenuItem
        route="/home/notinoread"
        caption="Sin Leer"
        icon="fa fa-inbox"
      />
      <MenuItem route="/home/notiread" caption="Leidos" icon="fa fa-glasses" />

      <MenuItem
        route="/home/notisends"
        caption="Enviados"
        icon="fa fa-share-square"
      />

      <Divider />

      <MenuItem route="/home/notispeak" caption="Chat" icon="fa fa-comments" />
    </div>
  );
};
