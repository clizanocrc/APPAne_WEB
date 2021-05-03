import React from "react";
import { Divider } from "@material-ui/core";

import FileUpload from "../helpers/fileUpload";
import { SelectDateddMM, TextControl } from "./ui/atom/FormControls";

export const ConyugeFormAdd = ({
  genero,
  formValues,
  onChange,
  labelForm,
  handleDateChange,
  updateFilesCb,
}) => {
  return (
    <div>
      <Divider className="mt-3" />
      <label className="control-label mt-2">{labelForm}</label>
      <div>
        {genero === "M"
          ? formValues.imagesEsposo && (
              <img
                src={formValues.imagesEsposo}
                className="card-img"
                // alt={formValues.nombrematrimonio}
                alt={"No hay Imagen"}
                width="200"
                height="250"
                style={{
                  objectFit: "contain",
                }}
              />
            )
          : formValues.imagesEsposa && (
              <img
                src={formValues.imagesEsposa}
                className="card-img"
                // alt={formValues.nombrematrimonio}
                alt={"No hay Imagen"}
                width="200"
                height="250"
                style={{
                  objectFit: "contain",
                }}
              />
            )}
        <FileUpload
          updateFilesCb={updateFilesCb}
          accept=".jpg,.png,.jpeg"
          label={genero === "M" ? "Imagen del Esposo" : "Imagen de la Esposa"}
          // multiple
        />
        <Divider className="mb-3" />

        <form>
          <div>
            <TextControl
              label={"Nombre*"}
              name={genero === "M" ? "nombreEsposo" : "nombreEsposa"}
              value={
                genero === "M"
                  ? formValues.nombreEsposo
                  : formValues.nombreEsposa
              }
              callBack={onChange}
            />
            <TextControl
              label={"Apellidos"}
              name={genero === "M" ? "apellidosEsposo" : "apellidosEsposa"}
              value={
                genero === "M"
                  ? formValues.apellidosEsposo
                  : formValues.apellidosEsposa
              }
              callBack={onChange}
            />
            <TextControl
              label={"Telefono"}
              name={genero === "M" ? "telefonoEsposo" : "telefonoEsposa"}
              value={
                genero === "M"
                  ? formValues.telefonoEsposo
                  : formValues.telefonoEsposa
              }
              callBack={onChange}
            />
            <TextControl
              label={"Email"}
              name={genero === "M" ? "emailEsposo" : "emailEsposa"}
              value={
                genero === "M" ? formValues.emailEsposo : formValues.emailEsposa
              }
              callBack={onChange}
            />
            <SelectDateddMM
              label={"F Nacimiento"}
              name={
                genero === "M"
                  ? "fechaNacimientoEsposo"
                  : "fechaNacimientoEsposa"
              }
              value={
                genero === "M"
                  ? formValues.fechaNacimientoEsposo
                  : formValues.fechaNacimientoEsposa
              }
              callBack={handleDateChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
