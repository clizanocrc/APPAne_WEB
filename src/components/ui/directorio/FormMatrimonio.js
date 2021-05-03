import { Divider, Link } from "@material-ui/core";
import moment from "moment";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../../context/AuthContext";
import { MatrimoniosContext } from "../../../context/MatrimoniosContext";
import { fechaDiffAniversario } from "../../../helpers/fechaDef";
import {
  BloqueControlView,
  SelectDateddMMView,
  SiNoControlView,
  TextAreaView,
  TextControlView,
} from "../atom/FormControls";

export const FormMatrimonio = () => {
  const { matrimonios } = useContext(MatrimoniosContext);
  const { auth } = useContext(AuthContext);
  const history = useHistory();
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

  const diffDate = fechaDiffAniversario(fechaMatrimonio);

  const handleClick = () => {
    history.push("/home/matrimonioedit");
  };

  return (
    <div className="row">
      <div className="flexbox-container-col col-4 mt-5">
        <img
          src={images}
          className="img-thumbnail mb-4 animate__animated animate__fadeInLeft"
          alt={nombrematrimonio}
        />
        {(auth.rol === "SUPER_ADMIN_ROLE" || auth.rol === "ADMIN_ROLE") && (
          <Link className="btn btn-warning ml-2" onClick={handleClick}>
            Editar...
          </Link>
        )}
      </div>
      <div className="col-8 mt-5">
        <h3>Matrimonio: {nombrematrimonio}</h3>
        <Divider className="mt-3 mb-3" />

        <h6 className="card-text mt-2">{diffDate.msg}</h6>

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
