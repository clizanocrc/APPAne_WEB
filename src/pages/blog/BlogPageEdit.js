import React, { useContext } from "react";
import {
  SelectItemsCatBlog,
  TextArea,
  TextControlCol,
} from "../../components/ui/atom/FormControls";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import FileUpload from "../../helpers/fileUpload";
import { useForm } from "../../hooks/useForm";
import { TextEditor } from "../../components/texteditor/TextEditor";
import { useHistory } from "react-router";
import { BlogsContext } from "../../context/BlogsContext";
import { exitoFire } from "../../helpers/messagesUI";
import { AppContext } from "../../context/AppContext";
import { blogUpdate } from "../../controlers/blogs";
import { ImgBlog } from "../../components/blog/AutorPubli";
import { AuthContext } from "../../context/AuthContext";

export const BlogPageEdit = () => {
  const history = useHistory();
  const { auth } = useContext(AuthContext);

  const { cargaBlogs, blogs } = useContext(BlogsContext);
  const { categorias } = blogs;
  const { showModalLoading, hideModalLoading } = useContext(AppContext);
  const blog = blogs.blogSeleccionado;

  const initialFormBlog = {
    titulo: blog.titulo,
    contenidocorto: blog.contenidocorto,
    contenido: blog.contenido,
    images: blog.images,
    categoria: blog.categoria._id,
  };

  const [formValues, onChange, reset, setFormValues] = useForm(initialFormBlog);

  const updateFilesCb = (e) => {
    setFormValues({
      ...formValues,
      images: e,
    });
  };

  const updateContenido = (e) => {
    setFormValues({
      ...formValues,
      contenido: JSON.stringify(e),
    });
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    showModalLoading();
    const resp = await blogUpdate(formValues, blog);
    if (resp.ok) {
      cargaBlogs(resp.data);
      reset();
      history.push("/home/blogs");
      exitoFire("Blog actualizado...!");
    }
    hideModalLoading();
  };

  const todoOk = () => {
    return formValues.titulo.length > 0 &&
      formValues.contenidocorto.length > 0 &&
      formValues.contenido.length > 0
      ? true
      : false;
  };

  return (
    <div className="flexbox-container">
      <div className="col-md-3">
        <NavbarLeft />
        <FileUpload
          updateFilesCb={updateFilesCb}
          accept=".jpg,.png,.jpeg,.bmp"
          label="Imagen de Portada"
        />
        <div className="form-group mt-3">
          <button
            onClick={onSubmit}
            className="btn btn-primary ml-2"
            disabled={!todoOk()}
          >
            {todoOk() ? "Actualizar...!" : "Datos Incompletos"}
          </button>
          <button onClick={reset} className="btn btn-danger ml-2">
            Limpiar
          </button>
        </div>
      </div>
      <div
        className="col-md-9 mt-4"
        style={{ height: "88vh", overflowY: "scroll", alignItems: "center" }}
      >
        <TextControlCol
          label={"Titulo*"}
          name={"titulo"}
          value={formValues.titulo}
          callBack={onChange}
        />
        {auth.rol !== "USER_ROLE" && (
          <SelectItemsCatBlog
            label={"Categoría"}
            name={"categoria"}
            value={formValues.categoria}
            callBack={onChange}
            data={categorias}
          />
        )}
        <ImgBlog
          image={formValues.images}
          alt={formValues.titulo}
          styles={"imagenBlog"}
        />

        <TextArea
          label={"Descripción Corta*"}
          name={"contenidocorto"}
          value={formValues.contenidocorto}
          callBack={onChange}
        />
        <TextEditor
          updateContenido={updateContenido}
          label={"Contenido"}
          contenido={formValues.contenido}
        />
      </div>
    </div>
  );
};
