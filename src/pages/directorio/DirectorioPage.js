import React, { useContext } from "react";
import { ChartDiocesis } from "../../components/ChartDiocesis";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { DiocesisContext } from "../../context/DiocesisContext";
import { MatrimoniosContext } from "../../context/MatrimoniosContext";
import { matrimoniosXDiocesis } from "../../helpers/db/dbHelpers";

export const DirectorioPage = () => {
  const { matrimonios } = useContext(MatrimoniosContext);
  const { diocesis } = useContext(DiocesisContext);

  const diocesisContador = matrimoniosXDiocesis(diocesis, matrimonios);

  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>
      <div className="col-md-7 animate__animated animate__bounceInUp">
        <ChartDiocesis
          datos={diocesisContador}
          diocesis={diocesis.diocesis}
          etiqueta="Matrimonios por Diócesis"
        />
      </div>

      <div
        className="m-4  animate__animated animate__bounceInLeft"
        style={{
          borderColor: "Highlight",
          borderStyle: "solid",
          borderRadius: 30,
          backgroundColor: "lightsteelblue",
        }}
      >
        <div className="m-4">
          <div
            style={{
              backgroundColor: "aqua",
              textAlign: "center",
            }}
            className="form-control"
          >
            Matrimonios por Diócesis
          </div>
          {diocesis.diocesis.map((dioce) => (
            <li className="form-control" key={dioce.id}>
              {dioce.nombre}
              {" :   "}
              {diocesisContador[dioce.nombre]
                ? diocesisContador[dioce.nombre]
                : 0}
            </li>
          ))}
          <div
            style={{
              backgroundColor: "aqua",
            }}
            className="form-control"
          >
            Total de Matrimonios {matrimonios.total}
          </div>
        </div>
      </div>
    </div>
  );
};
