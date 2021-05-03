// import moment from "moment";
import React, { useContext } from "react";
import { Divider } from "@material-ui/core";
import { AutorPubli, ImgBlogAjus } from "./blog/AutorPubli";
import { BlogButtons } from "./blog/BlogButtons";
import { BlogsContext } from "../context/BlogsContext";

export const BlogCard = ({ blog }) => {
  const { blogs } = useContext(BlogsContext);
  const comentarios = blogs.comentarios;
  return (
    <div
      className="flexbox-container col-md-12"
      style={{
        backgroundColor: "#EFECE8",
        borderRadius: 25,
        borderWidth: "2px",
        margin: 5,
      }}
    >
      <div
        className="col-md-4"
        style={{
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ImgBlogAjus image={blog.images} alt={blog.titulo} />
      </div>
      <Divider orientation="vertical" flexItem className=" mt-2 mb-2" />
      <div
        className="col-md-8 mt-2"
        style={{
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <b>{blog.titulo}</b>
          <hr />
          <p>{blog.contenidocorto}...</p>
        </div>
        <div>
          <Divider />
          <BlogButtons blog={blog} comentarios={comentarios} />
          <Divider />
          <AutorPubli
            fechaPubli={blog.fechaPubli}
            autor={blog.usuario.nombre}
            aling={"row"}
          />
        </div>
      </div>
    </div>
  );
};
