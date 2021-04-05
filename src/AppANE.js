import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { MatrimoniosProvider } from "./context/MatrimoniosContext";
import { AppRouter } from "./router/AppRouter";

import "./styles.css";

import moment from "moment";
import "moment/locale/es";
moment.locale("es");

export const AppANE = () => {
  return (
    <MatrimoniosProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </MatrimoniosProvider>
  );
};

export default AppANE;
