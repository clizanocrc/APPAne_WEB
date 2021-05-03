import React, { useContext, useState } from "react";
// import moment from "moment";
import Modal from "react-modal";
import { BlogComentarios } from "../../components/blog/BlogComentarios";
import { TextAreaNoIcon } from "../../components/ui/atom/FormControls";
import { AppContext } from "../../context/AppContext";
import { BlogsContext } from "../../context/BlogsContext";
import { blogComentarioAdd } from "../../controlers/blogs";
import { exitoFire, viewErrors } from "../../helpers/messagesUI";
import { useForm } from "../../hooks/useForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const BlogComentariosModal = () => {
  const [add, setAdd] = useState(false);
  const { state, hideModalComentarios } = useContext(AppContext);
  const { blogs, registraComentarios } = useContext(BlogsContext);
  const { isLoadingComentarios } = state;
  const [formValues, onChange, reset] = useForm({
    comentario: "",
  });

  const handleSave = async (e) => {
    e.preventDefault();
    const resp = await blogComentarioAdd({
      id: blogs.blogSeleccionado.id,
      comentario: formValues.comentario,
    });
    if (resp.ok) {
      registraComentarios(resp.comentarios);
      setAdd(!add);
      reset();
      // hideModalComentarios();
      exitoFire(resp.msg);
    } else {
      viewErrors(resp);
    }
  };

  return (
    <Modal
      isOpen={isLoadingComentarios}
      onRequestClose={hideModalComentarios}
      style={customStyles}
      closeTimeoutMS={200}
      // className="modal animate__animated animate__zoomIn"
      className="modal"
      overlayClassName="modal-fondo"
    >
      <div
        className="input-group"
        style={{
          flexDirection: "row",
          alignContent: "flex-start",
          alignItems: "center",
        }}
      >
        <div>
          <h5 className="ml-2 mr-2">Comentarios</h5>
        </div>
      </div>
      <div
        className="container"
        style={{ height: "70vh", overflowY: "scroll", alignItems: "center" }}
      >
        <hr />
        <div className="container">
          <BlogComentarios id={blogs.blogSeleccionado.id} />
        </div>
      </div>
      <div className="col-md-12">
        <TextAreaNoIcon
          label={"Comentar"}
          name={"comentario"}
          value={formValues.comentario}
          callBack={onChange}
        />
      </div>
      <button className="btn btn-outline" onClick={handleSave}>
        <i className="fa fa-save" /> Guardar Comentario
      </button>
    </Modal>
  );
};
