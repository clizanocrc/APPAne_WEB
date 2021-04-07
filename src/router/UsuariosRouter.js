import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { UsuariosPage } from "../components/users/UsuariosPage";

import "../css/login-register.css";

export const UsuariosRouter = () => {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-t-50 p-b-90">
          <Switch>
            <Route exact path="/usuarios" component={UsuariosPage} />
            <Redirect to="/usuarios" />
          </Switch>
        </div>
      </div>
    </div>
  );
};
