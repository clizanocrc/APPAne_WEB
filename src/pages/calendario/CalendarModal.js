import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";

import { useForm } from "../../hooks/useForm";
import { initEvent } from "../../context/initialState/formInitial";
import { AppContext } from "../../context/AppContext";
import { AuthContext } from "../../context/AuthContext";
import {
  eventoCrea,
  eventoDelete,
  eventoUpdate,
} from "../../controlers/events";
import {
  errorSimpleFire,
  exitoFire,
  viewErrors,
} from "../../helpers/messagesUI";

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

export const CalendarModal = () => {
  const {
    state,
    hideModalLoadingCalendar,
    agregaEvento,
    editarEvento,
    eliminarEvento,
    purgaEventoSelecciondo,
  } = useContext(AppContext);
  const { auth } = useContext(AuthContext);

  const { eventoSeleccionado, isLoadingCalendar } = state;
  const [titleValid, setTitleValid] = useState(true);
  const [eventos, onChange, , setFormValues] = useForm([]);
  const { title, notes, start, end, user } = eventos;

  useEffect(() => {
    if (eventoSeleccionado.length !== 0) {
      setFormValues(eventoSeleccionado);
    } else {
      // setFormValues(initEvent);
      setFormValues({
        ...initEvent,
        user: { _id: auth.uid },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventoSeleccionado]);

  const enabledButtons = () => {
    if (user) {
      if (auth.rol === "ADMIN_ROLE" || auth.rol === "SUPER_ADMIN_ROLE") {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  const EtiquetaTitulo = () => {
    if (auth.rol !== "ADMIN_ROLE" && auth.rol !== "SUPER_ADMIN_ROLE") {
      return "Evento";
    } else if (eventoSeleccionado.length !== 0) {
      return "  Editar evento";
    } else {
      return "  Nuevo evento";
    }
  };

  const closeModal = () => {
    hideModalLoadingCalendar();
    purgaEventoSelecciondo();
  };
  const handleStartDateChange = (e) => {
    setFormValues({
      ...eventos,
      start: e,
    });
  };
  const handleEndDateChange = (e) => {
    setFormValues({
      ...eventos,
      end: e,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const momentStart = moment(start);
    const momentEnd = moment(end);
    if (momentStart.isSameOrAfter(momentEnd)) {
      return errorSimpleFire("Fecha fin debe ser mayor a la fecha de inicio");
    }
    if (title.trim().length < 2) {
      return setTitleValid(false);
    }
    if (eventoSeleccionado.length === 0) {
      const resp = await eventoCrea(eventos);
      if (!resp.ok) {
        return viewErrors(resp);
      }
      exitoFire("Evento Creado");
      agregaEvento(resp.evento);
    } else {
      const resp = await eventoUpdate(eventos);
      if (!resp.ok) {
        return viewErrors(resp);
      }
      exitoFire("Evento Actializado");
      editarEvento(resp.evento);
    }
    setTitleValid(true);
    closeModal();
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const resp = await eventoDelete(eventos);
    if (!resp.ok) {
      return viewErrors(resp);
    }
    eliminarEvento(eventos);
    exitoFire("Evento Eliminado");

    hideModalLoadingCalendar();
    purgaEventoSelecciondo();
  };

  return (
    <Modal
      isOpen={isLoadingCalendar}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <div style={{ backgroundColor: "#EEEEEE", borderRadius: 5 }}>
        <h1 className="ml-2">{EtiquetaTitulo()}</h1>
      </div>
      <hr />
      <form className="container" onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label>Fecha y hora inicio</label>
          <DateTimePicker
            onChange={handleStartDateChange}
            value={start}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>
          <DateTimePicker
            onChange={handleEndDateChange}
            value={end}
            minDate={start}
            className="form-control"
          />
        </div>

        <hr />
        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${!titleValid && "is-invalid"}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={onChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={notes}
            onChange={onChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>
        {!enabledButtons() && (
          <>
            <button
              disabled={enabledButtons()}
              type="submit"
              className="btn btn-outline-primary btn-block"
            >
              <i className="far fa-save"></i>
              <span> Guardar</span>
            </button>
            <button
              onClick={handleDelete}
              disabled={enabledButtons()}
              className="btn btn-outline-danger btn-block"
            >
              <i className="far fa-trash-alt"></i>
              <span> Eliminar</span>
            </button>
          </>
        )}
      </form>
    </Modal>
  );
};
