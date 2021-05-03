import React from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";

export const BlogPage = () => {
  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div>
        <h6>Pagina del Blog, generalidades, categorías y resúmenes</h6>
      </div>
    </div>
  );
};
