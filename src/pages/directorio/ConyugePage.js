import { Divider } from "@material-ui/core";
import moment from "moment";
import React, { useContext } from "react";
import {
  SelectDateddMMView,
  TextControlView,
} from "../../components/ui/atom/FormControls";
import { ConyuguesContext } from "../../context/ConyuguesContext";
import { fechaDifCumple } from "../../helpers/fechaDef";

export const ConyugePage = ({ genero }) => {
  const { conyuges } = useContext(ConyuguesContext);
  const conyuge = conyuges.conyugueSeleccionado;
  const diffDate = fechaDifCumple(conyuge.fechaNacimiento);

  return (
    <div className="row">
      <div className="col-md-4 mt-5">
        {/* <div className="mt-5"> */}
        {conyuge.images && (
          <img
            src={conyuge.images}
            className="img-thumbnail animate__animated animate__fadeInDown"
            alt={conyuge.nombre}
          />
        )}
      </div>
      <div className="col-md-8 mt-5">
        {/* <div className="mt-5"> */}
        <h3>
          {conyuge.genero === "M" ? "Esposo: " : "Esposa: "} {conyuge.nombre}{" "}
          {conyuge.apellido}
        </h3>
        <Divider className="mt-3 mb-3" />

        <h6 className="card-text mt-2">{diffDate.msg}</h6>

        <Divider className="mt-3 mb-3" />
        <TextControlView label={"Apellido"} value={conyuge.apellido} />
        <TextControlView label={"Teléfono"} value={conyuge.telefono} />
        <TextControlView label={"Email"} value={conyuge.email} />
        <SelectDateddMMView
          label={"Nacimiento:"}
          value={moment(conyuge.fechaNacimiento).toDate()}
        />
      </div>
    </div>
  );
};
