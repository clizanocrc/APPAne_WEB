import React from "react";
import { useHistory } from "react-router-dom";

import { ConstruyeMenu } from "./menu/ConstruyeMenu";

import "../../css/navbar.css";
import { tamVentana } from "../../helpers/sizeWindow";

export const NavbarLeft = () => {
  const history = useHistory();
  const ruta = history.location.pathname.split("/");
  const option = ruta[ruta.length - 1];
  const tam = tamVentana();

  return (
    // <nav className="navbar_left navbar-dark bg-dark">

    <nav
      // className="navbar_left navbar-light bg-light animate__animated animate__backInUp"
      className="navbar_left navbar-light bg-light"
      style={{ height: `${tam[1] - 60}px` }}
    >
      <ConstruyeMenu option={option} />
    </nav>
  );
};
