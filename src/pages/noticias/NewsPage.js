import React from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";

export const NewsPage = () => {
  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div>Noticias</div>
    </div>
  );
};
