import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import defaultUser from "../../../assets/defaultUser.png";
import "../../../css/img.css";

export const MenuItemPerfil = ({ route, caption }) => {
  const { auth } = useContext(AuthContext);
  // const nombre = caption.split(" ");
  const style = "nav-item nav-link text-info";
  return (
    <div
      style={{
        flexDirection: "row",
        alignItems: "self-start",
      }}
    >
      <NavLink activeClassName="active" className={style} exact to={route}>
        <img
          alt={auth.name}
          src={auth.images ? auth.images : defaultUser}
          style={{
            width: "40px",
            height: "40px",
            objectFit: "fill",
            borderRadius: 50,
            // backgroundColor: "lightslategray",
            marginTop: 5,
            marginBottom: 5,
            marginRight: 10,
          }}
        />
        {caption}
      </NavLink>
    </div>
  );
};
