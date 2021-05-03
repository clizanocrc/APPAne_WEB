import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

export const MenuItemBack = () => {
  const history = useHistory();

  return (
    <NavLink
      activeClassName="active"
      className={{ color: "steelblue" }}
      exact
      // to={}
      onClick={history.goBack()}
    >
      <i
        className={"fa fa-back bigicon mr-2"}
        style={{ color: "steelblue" }}
      ></i>
      Regresar
    </NavLink>
  );
};
