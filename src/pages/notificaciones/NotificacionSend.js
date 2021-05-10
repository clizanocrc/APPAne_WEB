import moment from "moment";
import React, { useContext } from "react";
import { UsuariosOnlineNotificaciones } from "./UsuariosOnlineNotificaciones";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { AuthContext } from "../../context/AuthContext";
import { SocketContext } from "../../context/SocketContext";
import { UsuariosSelectedNoti } from "./UsuariosSelectedNoti";
import { useForm } from "../../hooks/useForm";
import { initialFormNotificaciones } from "../../context/initialState/formInitial";
import {
  TextArea,
  TextControlCol,
} from "../../components/ui/atom/FormControls";

export const NotificacionSend = () => {
  const { socket, socketState } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);
  const [formValues, onChange] = useForm(initialFormNotificaciones);
  const { usuariosSeleccionados } = socketState;

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
  };

  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>
      <div className="col-md-3" style={{ height: "87vh", overflowY: "scroll" }}>
        <UsuariosOnlineNotificaciones />
      </div>

      <div className="col-md-7 mt-5">
        {/* <UsuariosSelectedListNoti /> */}
        <TextControlCol
          label={"Título"}
          name={"title"}
          value={formValues.title}
          callBack={onChange}
        />
        <TextArea
          label={"Mensaje"}
          name={"notes"}
          value={formValues.notes}
          callBack={onChange}
        />
        <button className="btn btn-outline-primary mt-2" onClick={handleCrear}>
          Enviar Mensaje
        </button>
        <div
          style={{ height: "40vh", overflowY: "scroll" }}
          className="col-md-4"
        >
          <UsuariosSelectedNoti />
        </div>
      </div>
    </div>
  );
};
