import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { AuthVerify } from "../components/AuthVerify";
import { AuthContext } from "../context/AuthContext";
import { PrincipalPage } from "../pages/PrincipalPage";
import { AuthRouter } from "./AuthRouter";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = () => {
  const { auth, verificaToken } = useContext(AuthContext);

  useEffect(() => {
    verificaToken();
  }, [verificaToken]);

  if (auth.checking) {
    return <AuthVerify />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            isAuthenticated={auth.logged}
            path="/auth"
            component={AuthRouter}
          />
          <PrivateRouter
            isAuthenticated={auth.logged}
            exact
            path="/"
            component={PrincipalPage}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
