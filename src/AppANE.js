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
import { BlogsProvider } from "./context/BlogsContext";
import { SocketProvider } from "./context/SocketContext";
moment.locale("es");

export const AppANE = () => {
  return (
    <MatrimoniosProvider>
      <DiocesisProvider>
        <ConyuguesProvider>
          <BlogsProvider>
            <UsuariosProvider>
              <AppProvider>
                <AuthProvider>
                  <SocketProvider>
                    <AppRouter />
                  </SocketProvider>
                </AuthProvider>
              </AppProvider>
            </UsuariosProvider>
          </BlogsProvider>
        </ConyuguesProvider>
      </DiocesisProvider>
    </MatrimoniosProvider>
  );
};

export default AppANE;
