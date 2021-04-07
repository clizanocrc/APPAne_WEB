import React from "react";
import { useHistory } from "react-router-dom";

import { ConstruyeMenu } from "./menu/ConstruyeMenu";

import "../../css/navbar.css";

export const NavbarLeft = () => {
  const history = useHistory();
  const ruta = history.location.pathname.split("/");
  const option = ruta[ruta.length - 1];

  return (
    // <nav className="navbar_left navbar-dark bg-dark">

    <nav className="navbar_left navbar-light bg-light">
      <div className="navbar-collapse">
        <ConstruyeMenu option={option} />
      </div>
    </nav>
  );
};
