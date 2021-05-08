import Modal from "react-modal";
import moment from "moment";
import React, { useContext } from "react";
import { UsuariosOnlineNotificaciones } from "./UsuariosOnlineNotificaciones";
import { AuthContext } from "../../context/AuthContext";
import { SocketContext } from "../../context/SocketContext";
import { UsuariosSelectedNoti } from "./UsuariosSelectedNoti";
import { useForm } from "../../hooks/useForm";
import { initialFormNotificaciones } from "../../context/initialState/formInitial";
import {
  TextAreaNoIcon,
  TextControlCol,
} from "../../components/ui/atom/FormControls";
import { AppContext } from "../../context/AppContext";

// const isLoadingMensaje = true;

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

// isLoadingMensaje

Modal.setAppElement("#root");
export const NotificacionCreaModal = () => {
  const { socket, socketState, desSeleccionaUsuarios } = useContext(
    SocketContext
  );
  const { state, hideModalMensajes } = useContext(AppContext);
  const { auth } = useContext(AuthContext);
  const [formValues, onChange] = useForm(initialFormNotificaciones);
  const { usuariosSeleccionados } = socketState;

  const closeModal = () => {
    hideModalMensajes();
    desSeleccionaUsuarios();
  };

  const handleCrear = (e) => {
    e.preventDefault();
    const seleccionados = [];
    usuariosSeleccionados.map((usuario) =>
      seleccionados.push({ uid: usuario.uid, correo: usuario.correo })
    );
    const data = {
      title: formValues.title,
      notes: formValues.notes,
      para: seleccionados,
      de: auth.uid,
      fechaenviado: moment(),
    };
    socket.emit("enviar-notificacion", data);
    closeModal();
  };

  return (
    <Modal
      isOpen={state.isLoadingMensaje}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <div
        className="flexbox-container"
        style={{ height: "70vh", overflowY: "scroll", alignItems: "center" }}
      >
        <div
          className="col-md-4"
          style={{ height: "70vh", overflowY: "scroll" }}
        >
          <UsuariosOnlineNotificaciones />
        </div>

        <div className="col-md-7">
          <TextControlCol
            label={"Título"}
            name={"title"}
            value={formValues.title}
            callBack={onChange}
          />
          <TextAreaNoIcon
            label={"Mensaje"}
            name={"notes"}
            value={formValues.notes}
            callBack={onChange}
            rows={"5"}
          />
          <button
            className="btn btn-outline-primary mt-2"
            onClick={handleCrear}
          >
            <i className="fa fa-send"></i>
          </button>
          <div
            style={{ height: "38vh", overflowY: "scroll" }}
            className="col-md-12"
          >
            <UsuariosSelectedNoti />
          </div>
        </div>
      </div>
    </Modal>
  );
};
