import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { NavbarMain } from "../components/ui/NavbarMain";
import {
  PrincipalPage,
  UsuariosPage,
  AdminPage,
  DirectorioPage,
  CelebracionesPage as CelebPage,
  MatrimoniosPage,
  SacerdotesPage,
  SacerdotesPageAdd as SacerdoteAdd,
  PerfilPage,
  ParamPage,
  MatrimoniosPageAdd as MatrimoniosAdd,
  UsuariosAltaPage,
  NotificacionSend,
} from "../pages";

export const DashboardRoutes = () => {
  return (
    <>
      <NavbarMain />
      <div>
        <Switch>
          <Route exact path="/home" component={PrincipalPage} />
          <Route exact path="/home/usuarios" component={UsuariosPage} />
          <Route exact path="/home/usuariosalta" component={UsuariosAltaPage} />
          <Route exact path="/home/admin" component={AdminPage} />
          <Route exact path="/home/param" component={ParamPage} />
          <Route exact path="/home/notifi" component={NotificacionSend} />

          <Route exact path="/home/directorio" component={DirectorioPage} />
          <Route exact path="/home/matrimonios" component={MatrimoniosPage} />
          <Route exact path="/home/matrimonionew" component={MatrimoniosAdd} />
          <Route exact path="/home/sacerdotes" component={SacerdotesPage} />
          <Route exact path="/home/sacerdotenew" component={SacerdoteAdd} />
          <Route exact path="/home/perfil" component={PerfilPage} />
          <Route exact path="/home/celebraciones" component={CelebPage} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};
