import React, { useContext } from "react";
import { Divider } from "@material-ui/core";

import { AuthContext } from "../../../context/AuthContext";
import { MenuItem } from "../atom/MenuItem";

export const MenuBlog = () => {
  const { auth } = useContext(AuthContext);
  switch (auth.rol) {
    case "SUPER_ADMIN_ROLE":
    case "ADMIN_ROLE":
      return (
        // <div className="navbar-nav">
        <div className="navbar-collapse">
          <MenuItem route="/home/blog" caption="Blog" />
          <Divider />
          <MenuItem route="/home/blognew" caption="Crear Blog" />
          <Divider />
          <MenuItem route="/home/blogs" caption="Todos los Blogs" />
        </div>
      );
    case "USER_ROLE":
      return (
        // <div className="navbar-nav">
        <div className="navbar-collapse">
          <MenuItem route="/home/blog" caption="Blog" />
          <Divider />
          <MenuItem route="/home/blogs" caption="Todos los Blogs" />
        </div>
      );
    default:
      break;
  }
};
