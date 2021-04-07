import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthRouter } from "./AuthRouter";
import { DashboardRoutes } from "./DashboardRoutes";

import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import { AuthVerify } from "../components/miselaneos/AuthVerify";
import { UsuarioVerify } from "../components/miselaneos/UsuarioVerify";

export const AppRouter = () => {
  const { auth, verificaToken } = useContext(AuthContext);

  useEffect(() => {
    verificaToken();
  }, [verificaToken]);

  if (auth.checking) {
    return <AuthVerify />;
  }

  if (auth.rol === "NEW_USER_ROLE") {
    return <UsuarioVerify />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            path="/auth"
            component={AuthRouter}
            isAuthenticated={auth.logged}
          />
          <PrivateRouter
            path="/home"
            component={DashboardRoutes}
            isAuthenticated={auth.logged}
          />
          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
};
