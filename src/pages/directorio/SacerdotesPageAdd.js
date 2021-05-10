import React, { useContext } from "react";

import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { DiocesisContext } from "../../context/DiocesisContext";
import FileUpload from "../../helpers/fileUpload";
import { useForm } from "../../hooks/useForm";
import {
  SelectDateddMM,
  SelectItems,
  SiNoControl,
  TextArea,
  TextControl,
  BloqueControl,
} from "../../components/ui/atom/FormControls";
import { SacerdoteAdd } from "../../controlers/matrimonios";
import { initialFormSacerdotes } from "../../context/initialState/formInitial";
import { exitoFire } from "../../helpers/messagesUI";
import { AppContext } from "../../context/AppContext";
import { Divider } from "@material-ui/core";
import { MatrimoniosContext } from "../../context/MatrimoniosContext";
import { useHistory } from "react-router";

export const SacerdotesPageAdd = () => {
  const history = useHistory();
  const { diocesis } = useContext(DiocesisContext);
  const { agregaSacerdote } = useContext(MatrimoniosContext);
  const { showModalLoading, hideModalLoading } = useContext(AppContext);
  const diocesisDB = diocesis.diocesis;

  const [formValues, onChange, reset, setFormValues] = useForm(
    initialFormSacerdotes
  );

  const onSubmit = async (ev) => {
    ev.preventDefault();
    showModalLoading();
    const resp = await SacerdoteAdd(formValues);
    if (resp.ok) {
      agregaSacerdote(resp.data);
      reset();
      history.push("/home/sacerdotes");

      exitoFire("Registro creado...!");
    }
    hideModalLoading();
  };

  const handleDateChange = (e) => {
    setFormValues({
      ...formValues,
      fechaMatrimonio: e,
    });
  };

  const updateFilesCb = (e) => {
    setFormValues({
      ...formValues,
      images: e,
    });
  };

  const todoOk = () => {
    return formValues.nombrematrimonio.length > 0 &&
      formValues.diocesis.length > 0
      ? true
      : false;
  };

  return (
    <div>
      {/* Div principal */}
      <div className="flexbox-container">
        {/* Div Izquierda */}
        <div className="col-md-2">
          <NavbarLeft />
        </div>
        <div
          // classname="col-md-10"
          style={{ height: "87vh", overflowY: "scroll" }}
        >
          <div>
            <span>
              <i
                className="fa fa-ring bigicon mr-3"
                style={{ color: "green" }}
              ></i>
              Datos del Sacerdote
            </span>
          </div>
          <div>
            <span>* Datos Requeridos</span>
          </div>
          <Divider className="mt-3" />

          <FileUpload
            updateFilesCb={updateFilesCb}
            accept=".jpg,.png,.jpeg,.bmp"
            label="Imagenes"
            // multiple
          />
          <Divider className="mb-3" />

          <TextControl
            label={"Nombre*"}
            name={"nombrematrimonio"}
            value={formValues.nombrematrimonio}
            callBack={onChange}
          />
          <TextControl
            label={"Teléfono"}
            name={"telefono"}
            value={formValues.telefono}
            callBack={onChange}
          />
          <TextControl
            label={"Email"}
            name={"email"}
            value={formValues.email}
            callBack={onChange}
          />
          <SelectDateddMM
            label={"F Ordenación"}
            name={"fechaOrdenacion"}
            value={formValues.fechaOrdenacion}
            callBack={handleDateChange}
          />
          <SelectDateddMM
            label={"F Cumpleaños"}
            name={"fechaMatrimonio"}
            value={formValues.fechaMatrimonio}
            callBack={handleDateChange}
          />
          <SiNoControl
            label={"Activo"}
            name={"activo"}
            value={formValues.activo}
            callBack={onChange}
          />

          <SelectItems
            label={"Diocesis*"}
            name={"diocesis"}
            value={formValues.diocesis}
            callBack={onChange}
            data={diocesisDB}
          />

          <BloqueControl
            label={"Bloque"}
            name={"bloque"}
            value={formValues.bloque}
            callBack={onChange}
          />
          <TextArea
            label={"Dirección"}
            name={"direccion"}
            value={formValues.direccion}
            callBack={onChange}
          />
          <TextArea
            label={"Generalidades"}
            name={"generalidades"}
            value={formValues.generalidades}
            callBack={onChange}
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
      </div>
    </div>
  );
};
