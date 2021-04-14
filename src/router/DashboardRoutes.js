import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { SpinerModal } from "../components/ui/atom/SpinerModal";
import { NavbarMain } from "../components/ui/NavbarMain";
import {
  PrincipalPage,
  UsuariosPage,
  AdminPage,
  DirectorioPage,
  DocPage,
  DocPageAdd,
  CelebracionesPage as CelebPage,
  CelebracionesPageAdd as CelebNewPage,
  MatrimoniosPage,
  NewsPage,
  NewsPageAdd,
  SacerdotesPage,
  SacerdotesPageAdd as SacerdoteAdd,
  P1010Page,
  P1010PageAdd,
  PerfilPage,
  ParamPage,
  MatrimoniosPageAdd as MatrimoniosAdd,
  MatrimoniosPageEdit as MatrimoniosEdit,
  UsuariosAltaPage,
  NotificacionSend,
  MatrimonioPage,
} from "../pages";

export const DashboardRoutes = () => {
  return (
    <>
      <NavbarMain />
      <SpinerModal />
      <div>
        <Switch>
          <Route exact path="/home" component={PrincipalPage} />
          <Route exact path="/home/usuarios" component={UsuariosPage} />
          <Route exact path="/home/usuariosalta" component={UsuariosAltaPage} />
          <Route exact path="/home/admin" component={AdminPage} />
          <Route exact path="/home/param" component={ParamPage} />
          <Route exact path="/home/notifi" component={NotificacionSend} />
          <Route exact path="/home/perfil" component={PerfilPage} />

          <Route exact path="/home/directorio" component={DirectorioPage} />
          <Route exact path="/home/matrimonios" component={MatrimoniosPage} />
          <Route exact path="/home/matrimonio" component={MatrimonioPage} />
          <Route exact path="/home/matrimonionew" component={MatrimoniosAdd} />
          <Route
            exact
            path="/home/matrimonioedit"
            component={MatrimoniosEdit}
          />
          <Route exact path="/home/sacerdotes" component={SacerdotesPage} />
          <Route exact path="/home/sacerdotenew" component={SacerdoteAdd} />

          <Route exact path="/home/celebraciones" component={CelebPage} />
          <Route exact path="/home/celebracionesnew" component={CelebNewPage} />

          <Route exact path="/home/1010" component={P1010Page} />
          <Route exact path="/home/1010new" component={P1010PageAdd} />

          <Route exact path="/home/docs" component={DocPage} />
          <Route exact path="/home/docsnew" component={DocPageAdd} />

          <Route exact path="/home/news" component={NewsPage} />
          <Route exact path="/home/newsnew" component={NewsPageAdd} />

          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};
