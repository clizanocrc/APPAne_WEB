import React, { useContext } from "react";
import {
  TextArea,
  TextControlCol,
} from "../../components/ui/atom/FormControls";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { initialFormBlog } from "../../context/initialState/formInitial";
import FileUpload from "../../helpers/fileUpload";
import { useForm } from "../../hooks/useForm";
import { TextEditor } from "../../components/texteditor/TextEditor";
import { useHistory } from "react-router";
import { BlogsContext } from "../../context/BlogsContext";
import { exitoFire } from "../../helpers/messagesUI";
import { AppContext } from "../../context/AppContext";
import { blogCrea } from "../../controlers/blogs";

export const BlogPageAdd = () => {
  const history = useHistory();
  const { cargaBlogs } = useContext(BlogsContext);
  const { showModalLoading, hideModalLoading } = useContext(AppContext);

  const [formValues, onChange, reset, setFormValues] = useForm(initialFormBlog);

  // console.log(formValues.images);

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
    // console.log(formValues.contenido);
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    showModalLoading();
    const resp = await blogCrea(formValues);
    if (resp.ok) {
      cargaBlogs(resp.data);
      reset();
      history.push("/home/blog");
      exitoFire("Registro creado...!");
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
            {todoOk() ? "Crear...!" : "Datos Incompletos"}
          </button>
          <button onClick={reset} className="btn btn-danger ml-2">
            Limpiar
          </button>
        </div>
      </div>
      <div
        className="col-md-9 mt-4"
        style={{ height: "83vh", overflowY: "scroll", alignItems: "center" }}
      >
        <TextControlCol
          label={"Titulo*"}
          name={"titulo"}
          value={formValues.titulo}
          callBack={onChange}
        />
        <TextArea
          label={"Descripción Corta*"}
          name={"contenidocorto"}
          value={formValues.contenidocorto}
          callBack={onChange}
        />
        <TextEditor updateContenido={updateContenido} label={"Contenido"} />
      </div>
    </div>
  );
};
