import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { BlogsContext } from "../../context/BlogsContext";
import { comentariosAvg } from "../../helpers/db/dbHelpers";
import { exitoFire, viewErrors } from "../../helpers/messagesUI";

export const BlogButtons = ({ blog, comentarios }) => {
  const history = useHistory();
  const ruta = history.location.pathname.split("/");
  const option = ruta[ruta.length - 1];

  const { selecBlog, registraLike, editarBlog, registraLiks } = useContext(
    BlogsContext
  );
  const { showModalComentarios } = useContext(AppContext);

  const handleClick = (e) => {
    e.preventDefault();
    selecBlog(blog);
    history.push("/home/blogview");
  };
  const handleComentariosClick = (e) => {
    e.preventDefault();
    selecBlog(blog);
    showModalComentarios();
  };

  const handleLike = async (e) => {
    e.preventDefault();
    const resp = await registraLike(blog.id);
    if (resp.ok) {
      editarBlog(resp.data);
      selecBlog(resp.data);
      registraLiks(resp.likes);
      exitoFire(resp.msg);
    } else {
      viewErrors(resp);
    }
  };
  return (
    <div>
      {option !== "blogview" && (
        <button
          className="btn btn-outline-primary mt-2 mb-2"
          onClick={handleClick}
        >
          <i className="fa fa-eye bigicon"></i> Ver
        </button>
      )}
      <button
        className="btn btn-outline-primary ml-2 mt-2 mb-2"
        onClick={handleLike}
      >
        <i className="fa fa-thumbs-up bigicon"></i> {blog.votos}
      </button>
      <button
        className="btn btn-outline-primary ml-2 mt-2 mb-2"
        onClick={handleComentariosClick}
      >
        <i className="fa fa-comments bigicon"></i>{" "}
        {comentariosAvg(blog.id, comentarios)}
      </button>
    </div>
  );
};
