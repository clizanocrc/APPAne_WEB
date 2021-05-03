import { Link } from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { BlogsContext } from "../../context/BlogsContext";
import { blogsXCategoria } from "../../helpers/db/dbHelpers";

export const BlogPage = () => {
  const { blogs, seleccionaCat } = useContext(BlogsContext);
  const history = useHistory();

  const categoriasContador = blogsXCategoria(blogs.categorias, blogs.blogs);

  const handleClick = (id) => {
    seleccionaCat(id);
    history.push("/home/blogs");
  };

  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div className="col-md-7">
        <h6>Pagina del Blog, generalidades, categorías y resúmenes</h6>
      </div>

      <div
        className="m-4  animate__animated animate__bounceInLeft"
        style={{
          borderColor: "Highlight",
          borderStyle: "solid",
          borderRadius: 30,
          backgroundColor: "lightsteelblue",
        }}
        // onclick={handleClick}
      >
        <div className="m-4">
          <div
            style={{
              backgroundColor: "aqua",
              textAlign: "center",
            }}
            className="form-control"
          >
            Blogs por Categoría
          </div>
          {blogs.categorias.map((categ) => (
            <li
              className="form-control"
              key={categ.id}
              onClick={() => handleClick(categ.id)}
            >
              <Link>
                {categ.descripcion}
                {" :   "}
                {categoriasContador[categ.descripcion]
                  ? categoriasContador[categ.descripcion]
                  : 0}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
