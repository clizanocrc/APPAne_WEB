import React, { useContext } from "react";
import { useHistory } from "react-router";

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
import { sacerdoteUpdate } from "../../controlers/matrimonios";
import { exitoFire } from "../../helpers/messagesUI";
import { AppContext } from "../../context/AppContext";
import { Divider } from "@material-ui/core";
import { MatrimoniosContext } from "../../context/MatrimoniosContext";
import moment from "moment";

export const SacerdotePageEdit = () => {
  const { diocesis } = useContext(DiocesisContext);
  const history = useHistory();

  const {
    matrimonios,
    editarSacerdote,
    eliminarSacerdote,
    selecSacerdote,
  } = useContext(MatrimoniosContext);

  const { showModalLoading, hideModalLoading } = useContext(AppContext);
  const diocesisDB = diocesis.diocesis;
  const { sacerdoteSeleccionado: sacerdote } = matrimonios;

  const initialFormSacerdote = {
    nombrematrimonio: sacerdote.nombrematrimonio,
    telefono: sacerdote.telefono,
    email: sacerdote.email,
    images: sacerdote.images,
    diocesis: sacerdote.diocesisid,
    bloque: sacerdote.bloque,
    activo: sacerdote.activo,
    fechaMatrimonio: moment(sacerdote.fechaMatrimonio).toDate(),
    fechaOrdenacion: moment(sacerdote.fechaOrdenacion).toDate(),
    direccion: sacerdote.direccion,
    generalidades: sacerdote.generalidades,
  };
  const [formValues, onChange, reset, setFormValues] = useForm(
    initialFormSacerdote
  );

  const imgDefecto =
    "https://res.cloudinary.com/dyor179ps/image/upload/v1617833009/APPAne/matrimonios/directorio-0403dc9b-3312-46ca-926d-c70f6874eded_zyj9bq.jpg";

  const onSubmit = async (ev) => {
    ev.preventDefault();
    showModalLoading();
    const resp = await sacerdoteUpdate(formValues, sacerdote);
    if (resp.ok) {
      editarSacerdote(resp.data);
      selecSacerdote(resp.data);
      history.push("/home/sacerdote");
      hideModalLoading();
      exitoFire(resp.msg);
    } else {
      eliminarSacerdote(resp.data);
      history.push("/home/sacerdotes");
      hideModalLoading();
      exitoFire(resp.msg);
    }
    reset();
  };

  const handleDateChange = (e) => {
    setFormValues({
      ...formValues,
      fechaMatrimonio: e,
    });
  };
  const handleOrdenDateChange = (e) => {
    setFormValues({
      ...formValues,
      fechaOrtdenacion: e,
    });
  };

  const updateFilesCb = (e) => {
    console.log("File");
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
        <div>
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
          <img
            src={!formValues.images ? imgDefecto : formValues.images}
            className="card-img"
            alt={formValues.nombrematrimonio}
            width="200"
            height="250"
            style={{
              objectFit: "contain",
            }}
          />
          <FileUpload
            updateFilesCb={updateFilesCb}
            accept=".jpg,.png,.jpeg,.bmp"
            label="Imagenes"
            // multiple
          />
          <Divider className="mb-3" />
          <TextControl
            label={"Matrimonio*"}
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
            callBack={handleOrdenDateChange}
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
              {todoOk() ? "Actualizar...!" : "Datos Incompletos"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
