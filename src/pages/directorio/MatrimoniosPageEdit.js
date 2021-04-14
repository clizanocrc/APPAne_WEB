import React, { useContext } from "react";
import { ConyugeFormAdd } from "../../components/ConyugeFormAdd";

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
import { matrimonioEdit } from "../../controlers/matrimonios";
// import { initialFormMatrimonio } from "../../context/initialState/formInitial";
import { exitoFire } from "../../helpers/messagesUI";
import { AppContext } from "../../context/AppContext";
import { Divider } from "@material-ui/core";
import { MatrimoniosContext } from "../../context/MatrimoniosContext";
import moment from "moment";

export const MatrimoniosPageEdit = () => {
  const { diocesis } = useContext(DiocesisContext);
  const { matrimonios, editarMatrimonio } = useContext(MatrimoniosContext);
  const { showModalLoading, hideModalLoading } = useContext(AppContext);
  const diocesisDB = diocesis.diocesis;
  const { matrimonioSeleccionado: matrimonio } = matrimonios;
  const { esposa, esposo } = matrimonio;

  const initialFormMatrimonio = {
    nombrematrimonio: matrimonio.nombrematrimonio,
    telefono: matrimonio.telefono,
    email: matrimonio.email,
    images: matrimonio.images,
    diocesis: matrimonio.diocesisid,
    bloque: matrimonio.bloque,
    activo: matrimonio.activo,
    fechaMatrimonio: moment(matrimonio.fechaMatrimonio).toDate(),
    direccion: matrimonio.direccion,
    generalidades: matrimonio.generalidades,

    nombreEsposo: esposo.nombre,
    apellidosEsposo: esposo.apellido,
    telefonoEsposo: esposo.telefono,
    emailEsposo: esposo.email,
    fechaNacimientoEsposo: moment(esposo.fechaNacimiento).toDate(),
    imagesEsposo: esposo.images,

    nombreEsposa: esposa.nombre,
    telefonoEsposa: esposa.apellido,
    apellidosEsposa: esposa.telefono,
    emailEsposa: esposa.email,
    fechaNacimientoEsposa: moment(esposa.fechaNacimiento).toDate(),
    imagesEsposa: esposa.images,
  };

  const [formValues, handleInputChange, reset, setFormValues] = useForm(
    initialFormMatrimonio
  );

  const imgDefecto =
    "https://res.cloudinary.com/dyor179ps/image/upload/v1617833009/APPAne/matrimonios/directorio-0403dc9b-3312-46ca-926d-c70f6874eded_zyj9bq.jpg";

  const onSubmit = async (ev) => {
    ev.preventDefault();
    showModalLoading();
    const resp = await matrimonioEdit(formValues);
    if (resp.ok) {
      editarMatrimonio(resp.data);
      reset();
      exitoFire("Registro actualizado...!");
    }
    hideModalLoading();
  };

  const handleDateChange = (e) => {
    setFormValues({
      ...formValues,
      fechaMatrimonio: e,
    });
  };

  const handleDateChangeEsposo = (e) => {
    setFormValues({
      ...formValues,
      fechaNacimientoEsposo: e,
    });
  };

  const handleDateChangeEsposa = (e) => {
    setFormValues({
      ...formValues,
      fechaNacimientoEsposa: e,
    });
  };

  const updateFilesCb = (e) => {
    setFormValues({
      ...formValues,
      images: e,
    });
  };

  const updateFilesCbEsposo = (e) => {
    setFormValues({
      ...formValues,
      imagesEsposo: e,
    });
  };

  const updateFilesCbEsposa = (e) => {
    setFormValues({
      ...formValues,
      imagesEsposa: e,
    });
  };

  const todoOk = () => {
    return formValues.nombrematrimonio.length > 0 &&
      formValues.nombreEsposo.length > 0 &&
      formValues.diocesis.length > 0 &&
      formValues.nombreEsposa.length > 0
      ? true
      : false;
  };

  // const todoOk = () => {
  //   return true;
  // };

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
              Datos del Matrimonio
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
            callBack={handleInputChange}
          />
          <TextControl
            label={"Teléfono"}
            name={"telefono"}
            value={formValues.telefono}
            callBack={handleInputChange}
          />
          <TextControl
            label={"Email"}
            name={"email"}
            value={formValues.email}
            callBack={handleInputChange}
          />
          <SelectDateddMM
            label={"F Matrimonio"}
            name={"fechaMatrimonio"}
            value={formValues.fechaMatrimonio}
            callBack={handleDateChange}
          />
          <SiNoControl
            label={"Activo"}
            name={"activo"}
            value={formValues.activo}
            callBack={handleInputChange}
          />

          <SelectItems
            label={"Diocesis*"}
            name={"diocesis"}
            value={formValues.diocesis}
            callBack={handleInputChange}
            data={diocesisDB}
          />

          <BloqueControl
            label={"Bloque"}
            name={"bloque"}
            value={formValues.bloque}
            callBack={handleInputChange}
          />
          <TextArea
            label={"Dirección"}
            name={"direccion"}
            value={formValues.direccion}
            callBack={handleInputChange}
          />
          <TextArea
            label={"Generalidades"}
            name={"generalidades"}
            value={formValues.generalidades}
            callBack={handleInputChange}
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
        {/* Div Central */}
        <div>
          <div>
            <i className="fa fa-female mr-3" style={{ color: "green" }}></i>

            <span>Datos de la Esposa</span>
          </div>
          <div>
            <span>* Datos Requeridos</span>
          </div>
          <ConyugeFormAdd
            genero="F"
            formValues={formValues}
            handleInputChange={handleInputChange}
            reset={reset}
            // labelForm="Datos de la Esposa"
            handleDateChange={handleDateChangeEsposa}
            updateFilesCb={updateFilesCbEsposa}
          />
        </div>
        {/* Div Derecha */}
        <div className="mr-2">
          <div>
            <i
              className="fa fa-male bigicon mr-3"
              style={{ color: "green" }}
            ></i>

            <span>Datos del Esposo</span>
          </div>
          <div>
            <span>* Datos Requeridos</span>
          </div>
          <ConyugeFormAdd
            genero="M"
            formValues={formValues}
            handleInputChange={handleInputChange}
            reset={reset}
            // labelForm="Datos del Esposo"
            handleDateChange={handleDateChangeEsposo}
            updateFilesCb={updateFilesCbEsposo}
          />
        </div>
      </div>
    </div>
  );
};
