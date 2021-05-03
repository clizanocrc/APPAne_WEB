import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { exitoFire, viewErrors } from "../../helpers/messagesUI";
import { useForm } from "../../hooks/useForm";
import { TextAreaNoIcon } from "../ui/atom/FormControls";
import {
  blogComentarioDelete,
  blogComentarioEdit,
} from "../../controlers/blogs";
import { BlogsContext } from "../../context/BlogsContext";
import { AppContext } from "../../context/AppContext";

export const BlogComentarioItem = ({ comentario }) => {
  const { usuario, comentario: coment } = comentario;
  const { auth } = useContext(AuthContext);
  const { showModalLoading, hideModalLoading } = useContext(AppContext);
  const { registraComentarios } = useContext(BlogsContext);

  const [edit, setEdit] = useState(false);
  const [eliminar, setEliminar] = useState(false);

  const [formValues, onChange] = useForm(comentario);

  const handleEdit = (e) => {
    e.preventDefault();
    setEliminar(false);
    setEdit(!edit);
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    setEliminar(!eliminar);
    setEdit(false);
  };

  const handleConfirmDelete = async (e) => {
    e.preventDefault();
    showModalLoading();
    const resp = await blogComentarioDelete(formValues);
    if (resp.ok) {
      registraComentarios(resp.comentarios);
      exitoFire(resp.msg);
    } else {
      viewErrors(resp);
    }
    setEliminar(!eliminar);
    hideModalLoading();
  };

  const handleConfirmEdit = async (e) => {
    e.preventDefault();
    showModalLoading();
    const resp = await blogComentarioEdit(formValues);
    if (resp.ok) {
      registraComentarios(resp.comentarios);
      exitoFire(resp.msg);
    } else {
      viewErrors(resp);
    }
    setEdit(false);
    hideModalLoading();
  };

  return (
    <div
      className="input-group col-md-12 "
      style={{
        flexDirection: "column",
        backgroundColor: auth.uid === usuario._id ? "ActiveCaption" : "with",
        borderRadius: 5,
        marginBottom: 5,
        alignContent: "flex-start",
        borderBlockColor: "lightsalmon",
        border: "1px solid",
      }}
    >
      <small className="ml-2 mb-2 mb-4">{coment}</small>
      {/* <Divider /> */}
      <div className="m-2">
        <small className="ml-2 mb-2">Por: {usuario.nombre}</small>
        {auth.uid === usuario._id && (
          <>
            <button className="ml-2 mt-2 mb-2" onClick={handleEdit}>
              <i className=" ml-3 fa fa-pencil-alt" />
            </button>

            <button className="ml-2 mt-2 mb-2" onClick={handleDelete}>
              <i className=" ml-4 fa fa-trash-alt" />
            </button>
            {edit && (
              <button className="ml-2 mt-2 mb-2" onClick={handleConfirmEdit}>
                <i className="ml-4 fa fa-save" /> Guardar
              </button>
            )}
            {eliminar && (
              <button className="ml-2 mt-2 mb-2" onClick={handleConfirmDelete}>
                <i className="ml-4 fa fa-window-close" /> Eliminar
              </button>
            )}
          </>
        )}
      </div>
      {edit && (
        <div className="col-md-12">
          <TextAreaNoIcon
            label={"Comentar"}
            name={"comentario"}
            value={formValues.comentario}
            callBack={onChange}
          />
        </div>
      )}
    </div>
  );
};
