import React, { useContext, useState } from "react";
import { SocketContext } from "../../context/SocketContext";
import defaultUser from "../../assets/defaultUser.png";
import { Divider } from "@material-ui/core";
import moment from "moment";
import { IconRed } from "../../components/ui/atom/IconRed";
import { TextAreaNoIcon } from "../../components/ui/atom/FormControls";
import { useForm } from "../../hooks/useForm";
import { errorSimpleFire } from "../../helpers/messagesUI";

export const NotificacionPage = () => {
  const [respuesta, setRespuesta] = useState(false);
  const {
    socketState,
    socket,
    seleccionaUsuario,
    desSeleccionaUsuarios,
  } = useContext(SocketContext);
  const { notificacionActiva } = socketState;

  const [formValues, onChange, reset] = useForm({ notes: "" });

  if (notificacionActiva.length === 0) {
    return false;
  }

  const { de } = notificacionActiva;
  let fotoDe = defaultUser;
  if (de.images) {
    fotoDe = de.images;
  }
  const fecha = moment(notificacionActiva.fechaenviado).format(
    "DD-MMMM-yyyy HH:MM"
  );
  const textoLectura = !notificacionActiva.fechaleido
    ? "Aún sin leer"
    : "Leído el " +
      moment(notificacionActiva.fechaleido).format("DD-MMMM-yyyy HH:MM");

  const handleResponse = (e) => {
    e.preventDefault();
    const para = socketState.usuariosOnLine.filter(
      (usuario) => usuario.uid === notificacionActiva.de._id
    );
    const usuario = {
      conectado: para[0].conectado,
      correo: para[0].correo,
      estado: para[0].estado,
      images: para[0].images,
      nombre: para[0].nombre,
      rol: para[0].rol,
      uid: para[0].uid,
    };

    desSeleccionaUsuarios();
    seleccionaUsuario(usuario);
    setRespuesta(!respuesta);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValues.notes) {
      return errorSimpleFire("Debe escribir un comentario");
    }
    const formData = {
      title: notificacionActiva.title,
      notes: formValues.notes,
      para: socketState.usuariosSeleccionados,
      de: notificacionActiva.para._id,
      fechaenviado: moment(),
      leido: false,
      fechaleido: null,
    };
    console.log(formData);
    socket.emit("enviar-notificacion", formData);
    setRespuesta(!respuesta);
    reset();
  };

  return (
    <div>
      <div
        style={{
          borderColor: "Highlight",
          borderStyle: "solid",
          borderRadius: 15,
        }}
        className="mb-4"
      >
        <div className="divjustificadoizq ml-2">
          <img
            alt={de.nombre}
            src={fotoDe}
            style={{
              width: "40px",
              height: "40px",
              objectFit: "fill",
              borderRadius: 50,
              marginTop: 5,
              marginBottom: 5,
              marginRight: 10,
            }}
          />
          <h6>De: {de.nombre}</h6>
        </div>

        <div className={"ml-2 mr-2 mb-2"}>
          <p className="mr-4">{notificacionActiva.title}</p>
          <Divider />
          <p>{notificacionActiva.notes}</p>
          <hr />
          <div style={{ cursor: "pointer" }}>
            <small className={"ml-2"}>Enviada el {fecha}</small>

            <IconRed status={notificacionActiva.leido} />
            <small className={"ml-2"}>{textoLectura}</small>
            <button
              className="btn btn-outline-primary ml-4"
              onClick={handleResponse}
            >
              <i className="fa fa-reply-all bigicon"></i>
            </button>
          </div>
        </div>
      </div>
      {respuesta && (
        <div
          style={{
            borderColor: "lightgreen",
            borderStyle: "solid",
            borderRadius: 15,
          }}
        >
          <div className="divjustificadoizq ml-2">
            <img
              alt={de.nombre}
              src={fotoDe}
              style={{
                width: "40px",
                height: "40px",
                objectFit: "fill",
                borderRadius: 50,
                marginTop: 5,
                marginBottom: 5,
                marginRight: 10,
              }}
            />
            <h6>Para: {de.nombre}</h6>
          </div>
          <div className={"ml-2 mr-2 mb-2"}>
            <Divider />
            <TextAreaNoIcon
              label={"Respuesta"}
              name={"notes"}
              value={formValues.notes}
              callBack={onChange}
            />
            <Divider />
            <div className="mt-2">
              <button
                className="btn btn-outline-primary ml-4"
                onClick={handleSubmit}
              >
                <i className="fa fa-send bigicon"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
