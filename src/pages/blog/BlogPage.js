import { Link } from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { ImgBlog } from "../../components/blog/AutorPubli";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { BlogsContext } from "../../context/BlogsContext";
import { blogsXCategoria } from "../../helpers/db/dbHelpers";

export const BlogPage = () => {
  const { blogs, seleccionaCat } = useContext(BlogsContext);
  const history = useHistory();

  const categoriasContador = blogsXCategoria(blogs.categorias, blogs.blogs);
  const imgPortada =
    "https://res.cloudinary.com/dyor179ps/image/upload/v1620593121/APPAne/blog/blog_co1ujt.jpg";

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
        <h1>Blog</h1>
        <hr />
        <h6>* Aquí puede publicar sus opiniones</h6>
        <h6>* Encontrará publicaciones de importancia del servicio</h6>
        <hr />

        <ImgBlog image={imgPortada} alt={"portadablog"} styles={"imagenBlog"} />
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
              <Link style={{ cursor: "pointer" }}>
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
