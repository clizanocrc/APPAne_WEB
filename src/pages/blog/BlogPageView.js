import React, { useContext } from "react";

import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { BlogsContext } from "../../context/BlogsContext";
import { TextEditorView } from "../../components/texteditor/TextEditorView";
import { AutorPubli, ImgBlog } from "../../components/blog/AutorPubli";
import { BlogButtons } from "../../components/blog/BlogButtons";
import { BlogLikes } from "../../components/blog/BlogLikes";
import { Divider } from "@material-ui/core";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";
import { AppContext } from "../../context/AppContext";
import { blogDelete } from "../../controlers/blogs";
import { confirmDeleteFire, exitoFire } from "../../helpers/messagesUI";
import { SelectItemsCatBlogView } from "../../components/ui/atom/FormControls";

export const BlogPageView = () => {
  const { blogs, cargaBlogs } = useContext(BlogsContext);
  const { categorias } = blogs;
  const { auth } = useContext(AuthContext);
  const history = useHistory();
  const { showModalLoading, hideModalLoading } = useContext(AppContext);

  const comentarios = blogs.comentarios;
  const blog = blogs.blogSeleccionado;
  const handleEditClick = (e) => {
    e.preventDefault();
    history.push("/home/blogedit");
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const confirm = await confirmDeleteFire("Desea eliminar el blog?");
    if (confirm) {
      showModalLoading();
      const resp = await blogDelete(blog);
      if (resp.ok) {
        cargaBlogs(resp.data);
        history.push("/home/blogs");
        exitoFire("Blog eliminado...!");
      }
      hideModalLoading();
    }
  };
  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
        <BlogButtons blog={blog} comentarios={comentarios} />
        {(auth.rol === "SUPER_ADMIN_ROLE" ||
          auth.rol === "ADMIN_ROLE" ||
          auth.uid === blog.usuario._id) && (
          <>
            <button className="btn btn-warning ml-2" onClick={handleEditClick}>
              Editar...
            </button>
            <button className="btn btn-danger ml-2" onClick={handleDelete}>
              Eliminar...
            </button>
          </>
        )}
      </div>
      <div
        className="col-md-8 mt-4"
        style={{
          height: "83vh",
          overflowY: "scroll",
          alignItems: "center",
          overflowX: "hidden",
        }}
      >
        <h1>{blog.titulo}</h1>
        <ImgBlog image={blog.images} alt={blog.titulo} styles={"imagenBlog"} />
        <hr />
        <p>{blog.contenidocorto}</p>
        <AutorPubli
          fechaPubli={blog.fechaPubli}
          autor={blog.usuario.nombre}
          aling={"column"}
        />
        <SelectItemsCatBlogView
          label={"Categoría"}
          name={"categoria"}
          value={blog.categoria._id}
          data={categorias}
        />
        <TextEditorView contenido={blog.contenido} />
      </div>
      <div
        className="col-md-2 mt-4"
        style={{
          height: "83vh",
          overflowY: "scroll",
          alignItems: "center",
        }}
      >
        <BlogLikes id={blog.id} />
        <Divider />
      </div>
    </div>
  );
};
