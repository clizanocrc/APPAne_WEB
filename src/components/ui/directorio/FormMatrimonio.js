import { Divider } from "@material-ui/core";
import moment from "moment";
import React, { useContext } from "react";
import { MatrimoniosContext } from "../../../context/MatrimoniosContext";
import {
  BloqueControlView,
  SelectDateddMMView,
  SiNoControlView,
  TextAreaView,
  TextControlView,
} from "../atom/FormControls";

export const FormMatrimonio = () => {
  const { matrimonios } = useContext(MatrimoniosContext);
  const {
    nombrematrimonio,
    telefono,
    email,
    images,
    diocesis: diocesisMT,
    bloque,
    activo,
    fechaMatrimonio,
    direccion,
    generalidades,
  } = matrimonios.matrimonioSeleccionado;

  return (
    <div className="row">
      <div className="col-4 mt-5">
        <img
          src={images}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={nombrematrimonio}
        />
      </div>
      <div className="col-8 mt-5">
        <h3>Matrimonio: {nombrematrimonio}</h3>
        <Divider className="mt-3 mb-3" />
        <TextControlView label={"Teléfono"} value={telefono} />
        <TextControlView label={"Email"} value={email} />
        <TextControlView label={"Diocesis"} value={diocesisMT} />
        <BloqueControlView label={"Bloque:"} value={bloque} />
        <SiNoControlView label={"Activo:"} value={activo} />
        <SelectDateddMMView
          label={"Matrimonio:"}
          value={moment(fechaMatrimonio).toDate()}
        />
        <TextAreaView label={"Dirección:"} value={direccion} />
        <TextAreaView label={"Generalidades:"} value={generalidades} />
      </div>
    </div>
  );
};
