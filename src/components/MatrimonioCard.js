import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MatrimoniosContext } from "../context/MatrimoniosContext";
import { AuthContext } from "../context/AuthContext";
import { Divider } from "@material-ui/core";
import { fechaDiffAniversario } from "../helpers/fechaDef";
import { ImgBlogAjus } from "./blog/AutorPubli";

export const MatrimonioCard = (matrimonio) => {
  const { selecMatrimonio } = useContext(MatrimoniosContext);
  const { auth } = useContext(AuthContext);
  const {
    images,
    nombrematrimonio,
    fechaMatrimonio,
    diocesis,
    bloque,
    esposo,
    esposa,
  } = matrimonio;
  const diffDate = fechaDiffAniversario(fechaMatrimonio);

  const imgDefecto =
    "https://res.cloudinary.com/dyor179ps/image/upload/v1617833009/APPAne/matrimonios/directorio-0403dc9b-3312-46ca-926d-c70f6874eded_zyj9bq.jpg";

  const handleClick = () => {
    selecMatrimonio(matrimonio);
  };

  return (
    <div
      style={{
        borderColor: "Highlight",
        borderStyle: "solid",
        borderRadius: 30,
        // backgroundColor: "#F0EDDA",
        backgroundColor: "#eeeeee",
        alignItems: "flex-start",
      }}
      className="card ms-4 animate__animated animate__fadeInLeft"
    >
      <div>
        <div
          style={{
            borderRadius: 30,
          }}
          // className="mb-4"
        >
          <ImgBlogAjus
            image={!images ? imgDefecto : images}
            alt={nombrematrimonio}
          />
        </div>
        {/* <Divider /> */}

        <div>
          <div className="card-body">
            <h4 className="card-title"> {nombrematrimonio} </h4>
            <h5 className="card-text">
              {esposo.nombre} Y {esposa.nombre}{" "}
            </h5>
            <div className="flexbox-container  mb-2">
              <div
                className="col-md-12 mt-2"
                style={{ backgroundColor: "transparent" }}
              >
                {/* <h6 className="card-text">{esposo.nombre} </h6>
                <h6 className="card-text">{esposa.nombre} </h6> */}
                <h6 className="card-text">Diócesis {diocesis} </h6>
                <p className="card-text">Bloque: {bloque} </p>
                <p className="card-text">{diffDate.msg}</p>
              </div>
            </div>
            <Divider />

            <Link
              className="btn btn-secondary mt-2"
              to="/home/matrimonio"
              onClick={handleClick}
            >
              Ver más...
            </Link>

            {(auth.rol === "SUPER_ADMIN_ROLE" || auth.rol === "ADMIN_ROLE") && (
              <Link
                className="btn btn-warning ml-2 mt-2"
                to="/home/matrimonioedit"
                onClick={handleClick}
              >
                Editar...
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
