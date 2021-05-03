import React, { useContext } from "react";
import { BlogsContext } from "../../context/BlogsContext";
import { BlogComentarioItem } from "./BlogComentarioItem";

export const BlogComentarios = ({ id }) => {
  const { blogs } = useContext(BlogsContext);
  const comentarios = blogs.comentarios.filter(
    (comentario) => comentario.blogentrada === id
  );
  return (
    <div>
      {comentarios.map((comentario) => (
        <BlogComentarioItem key={comentario.id} comentario={comentario} />
      ))}
    </div>
  );
};
