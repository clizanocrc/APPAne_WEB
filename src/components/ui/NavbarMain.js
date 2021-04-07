import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Divider } from "@material-ui/core";

import { AuthContext } from "../../context/AuthContext";
import { MenuItem } from "./atom/MenuItem";
import { MenuItemPerfil } from "./atom/MenuItemPerfil";

export const NavbarMain = () => {
  const { auth, logout } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    history.replace("/auth");
    logout();
  };
  return (
    //     <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        APP Ane
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          {(auth.rol === "SUPER_ADMIN_ROLE" || auth.rol === "ADMIN_ROLE") && (
            <MenuItem route="/home/admin" caption="Parámetros" />
          )}
          <MenuItem route="/home/directorio" caption="Directorio" />
          <MenuItem route="/home/celebraciones" caption="Celebraciones" />
          <MenuItem route="/home/1010" caption="1010" />
          <MenuItem route="/home/documentos" caption="Documentos" />
          <MenuItem route="/home/noticias" caption="Noticias" />
        </div>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <Divider orientation="vertical" flexItem />
          <MenuItemPerfil route="/home/perfil" caption={auth.name} />
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Salir
          </button>
        </ul>
      </div>
    </nav>
  );
};
