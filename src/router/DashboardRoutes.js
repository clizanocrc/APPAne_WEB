import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { SpinerModal } from "../components/ui/atom/SpinerModal";
import { NavbarMain } from "../components/ui/NavbarMain";
import { CalendarModal } from "../pages/calendario/CalendarModal";

import {
  PrincipalPage,
  UsuariosPage,
  AdminPage,
  DirectorioPage,
  BlogPage,
  BlogsPage,
  BlogPageAdd,
  BlogPageView,
  CelebracionesPage as CelebPage,
  MatrimoniosPage,
  SacerdotesPage,
  SacerdotesPageAdd as SacerdoteAdd,
  PerfilPage,
  ParamPage,
  ConyugePage,
  MatrimoniosPageAdd as MatrimoniosAdd,
  MatrimoniosPageEdit as MatrimoniosEdit,
  UsuariosAltaPage,
  NotificacionSend,
  MatrimonioPage,
  SacerdotePage,
  SacerdotePageEdit as SacerdotesEdit,
  CalendarScreen,
  ConyugePageNavbar,
  BlogPageEdit,
  NotificacionesPage as NotiPage,
  NotificacionesNoRead as NotiNew,
  NotificacionesRead as NotiRead,
  NotificacionesSpeak as NotiSpeak,
  NotificacionesSends as NotiSends,
} from "../pages";
import { BlogComentariosModal } from "../pages/blog/BlogComentariosModal";
import { NotificacionCreaModal } from "../pages/notificaciones/NotificacionCreaModal";

export const DashboardRoutes = () => {
  return (
    <>
      <SpinerModal />
      <CalendarModal />
      <BlogComentariosModal />
      <NotificacionCreaModal />
      <NavbarMain />
      <div>
        <Switch>
          <Route exact path="/home" component={PrincipalPage} />
          <Route exact path="/home/usuarios" component={UsuariosPage} />
          <Route exact path="/home/usuariosalta" component={UsuariosAltaPage} />
          <Route exact path="/home/admin" component={AdminPage} />
          <Route exact path="/home/param" component={ParamPage} />
          <Route exact path="/home/perfil" component={PerfilPage} />
          <Route exact path="/home/sendnotifi" component={NotificacionSend} />

          <Route exact path="/home/notifis" component={NotiPage} />
          <Route exact path="/home/notinoread" component={NotiNew} />
          <Route exact path="/home/notiread" component={NotiRead} />
          <Route exact path="/home/notispeak" component={NotiSpeak} />
          <Route exact path="/home/notisends" component={NotiSends} />

          <Route exact path="/home/directorio" component={DirectorioPage} />
          <Route exact path="/home/matrimonios" component={MatrimoniosPage} />
          <Route exact path="/home/matrimonio" component={MatrimonioPage} />
          <Route exact path="/home/matrimonionew" component={MatrimoniosAdd} />
          <Route
            exact
            path="/home/matrimonioedit"
            component={MatrimoniosEdit}
          />
          <Route exact path="/home/conyuge" component={ConyugePage} />
          <Route exact path="/home/conyugenav" component={ConyugePageNavbar} />
          <Route exact path="/home/sacerdotes" component={SacerdotesPage} />
          <Route exact path="/home/sacerdote" component={SacerdotePage} />
          <Route exact path="/home/sacerdoteedit" component={SacerdotesEdit} />
          <Route exact path="/home/sacerdotenew" component={SacerdoteAdd} />
          <Route exact path="/home/calendario" component={CalendarScreen} />
          <Route exact path="/home/celebraciones" component={CelebPage} />
          <Route exact path="/home/blog" component={BlogPage} />
          <Route exact path="/home/blogs" component={BlogsPage} />
          <Route exact path="/home/blognew" component={BlogPageAdd} />
          <Route exact path="/home/blogedit" component={BlogPageEdit} />
          <Route exact path="/home/blogview" component={BlogPageView} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};
