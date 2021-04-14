import React, { createContext, useReducer } from "react";
import { appReducer } from "../reducers/appReducer";
import { showLoading, hideLoading, appLimpia } from "./actions/appActions";
import { initialState } from "./initialState/appInitialState";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const showModalLoading = () => {
    showLoading(dispatch);
  };

  const hideModalLoading = () => {
    hideLoading(dispatch);
  };

  const purgaApp = () => {
    appLimpia(dispatch);
  };

  return (
    <AppContext.Provider
      value={{ state, showModalLoading, hideModalLoading, purgaApp }}
    >
      {children}
    </AppContext.Provider>
  );
};
