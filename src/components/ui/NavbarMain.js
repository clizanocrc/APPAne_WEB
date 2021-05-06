import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Divider } from "@material-ui/core";

import { AuthContext } from "../../context/AuthContext";
import { MenuItem } from "./atom/MenuItem";
import { MenuItemPerfil } from "./atom/MenuItemPerfil";
import { SearchForm } from "./SearchForm";
import { MenuItemNotificaciones } from "./atom/MenuItemNotificaciones";

export const NavbarMain = () => {
  const { auth, logout } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    history.replace("/auth");
    logout();
  };

  return (
    // <nav className="navbar navbar-expand-sm navbar-dark bg-dark animate__animated animate__fadeInLeft">
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <i className="fa fa-home bigicon mr-3"></i>
        APP Ane
      </Link>
      <div className="navbar-collapse">
        <div
          className="navbar-nav"
          // style={{
          //   position: "absolute",
          // }}
        >
          {(auth.rol === "SUPER_ADMIN_ROLE" || auth.rol === "ADMIN_ROLE") && (
            <MenuItem
              route="/home/admin"
              caption="Parámetros"
              // icon="fa fa-cogs"
            />
          )}
          <MenuItem
            route="/home/directorio"
            caption="Directorio"
            // icon="fa fa-address-card"
          />
          <MenuItem route="/home/blog" caption="Blog" />
          <MenuItem
            route="/home/calendario"
            caption="Calendario"
            // icon="fa fa-calendar-alt"
          />
        </div>
      </div>
      <SearchForm />
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <Divider orientation="vertical" flexItem />
          <MenuItemNotificaciones route="/home/notifis" />
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
