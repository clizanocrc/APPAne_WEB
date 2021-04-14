import React from "react";
import { Divider } from "@material-ui/core";

import FileUpload from "../helpers/fileUpload";
import { SelectDateddMM, TextControl } from "./ui/atom/FormControls";

const imgDefecto =
  "https://res.cloudinary.com/dyor179ps/image/upload/v1617833009/APPAne/matrimonios/directorio-0403dc9b-3312-46ca-926d-c70f6874eded_zyj9bq.jpg";

export const ConyugeFormAdd = ({
  genero,
  formValues,
  handleInputChange,
  labelForm,
  handleDateChange,
  updateFilesCb,
}) => {
  return (
    <div>
      <Divider className="mt-3" />
      <label className="control-label mt-2">{labelForm}</label>
      <div>
        {genero === "M" ? (
          <img
            src={!formValues.images ? imgDefecto : formValues.imagesEsposo}
            className="card-img"
            alt={formValues.nombrematrimonio}
            width="200"
            height="250"
            style={{
              objectFit: "contain",
            }}
          />
        ) : (
          <img
            src={!formValues.images ? imgDefecto : formValues.imagesEsposa}
            className="card-img"
            alt={formValues.nombrematrimonio}
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
              callBack={handleInputChange}
            />
            <TextControl
              label={"Apellidos"}
              name={genero === "M" ? "apellidosEsposo" : "apellidosEsposa"}
              value={
                genero === "M"
                  ? formValues.apellidosEsposo
                  : formValues.apellidosEsposa
              }
              callBack={handleInputChange}
            />
            <TextControl
              label={"Telefono"}
              name={genero === "M" ? "telefonoEsposo" : "telefonoEsposa"}
              value={
                genero === "M"
                  ? formValues.telefonoEsposo
                  : formValues.telefonoEsposa
              }
              callBack={handleInputChange}
            />
            <TextControl
              label={"Email"}
              name={genero === "M" ? "emailEsposo" : "emailEsposa"}
              value={
                genero === "M" ? formValues.emailEsposo : formValues.emailEsposa
              }
              callBack={handleInputChange}
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
