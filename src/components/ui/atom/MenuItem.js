import React from "react";
import { NavLink } from "react-router-dom";
// import heart from "../../../assets/heart.png";
import "../../../css/img.css";

export const MenuItem = ({ route, caption }) => {
  const style = "nav-item nav-link ml-2";
  return (
    <div style={{ flexDirection: "row", alignItems: "self-start" }}>
      <NavLink activeClassName="active" className={style} exact to={route}>
        {caption}
      </NavLink>
      {/* <img src={heart} alt="" className="imagen" /> */}
    </div>
  );
};
