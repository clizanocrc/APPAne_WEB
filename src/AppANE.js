import React from "react";
import moment from "moment";
import "moment/locale/es";

import { AppProvider } from "./context/AppContext";
import { AuthProvider } from "./context/AuthContext";
import { MatrimoniosProvider } from "./context/MatrimoniosContext";
import { DiocesisProvider } from "./context/DiocesisContext";
import { AppRouter } from "./router/AppRouter";
import { ConyuguesProvider } from "./context/ConyuguesContext";
import { UsuariosProvider } from "./context/UsuariosContext";

moment.locale("es");

export const AppANE = () => {
  return (
    <AppProvider>
      <MatrimoniosProvider>
        <DiocesisProvider>
          <ConyuguesProvider>
            <UsuariosProvider>
              <AuthProvider>
                <AppRouter />
              </AuthProvider>
            </UsuariosProvider>
          </ConyuguesProvider>
        </DiocesisProvider>
      </MatrimoniosProvider>
    </AppProvider>
  );
};

export default AppANE;
