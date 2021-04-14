import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MatrimoniosContext } from "../context/MatrimoniosContext";
import { AuthContext } from "../context/AuthContext";

export const MatrimonioCard = (matrimonio) => {
  const { selecMatrimonio } = useContext(MatrimoniosContext);
  const { auth } = useContext(AuthContext);
  const {
    images,
    nombrematrimonio,
    diocesis,
    bloque,
    esposo,
    esposa,
  } = matrimonio;
  const imgDefecto =
    "https://res.cloudinary.com/dyor179ps/image/upload/v1617833009/APPAne/matrimonios/directorio-0403dc9b-3312-46ca-926d-c70f6874eded_zyj9bq.jpg";

  const handleClick = () => {
    selecMatrimonio(matrimonio);
  };
  //animate__animated animate__backInUp
  return (
    <div className="card ms-4 animate__animated animate__fadeInLeft">
      <div className="row no-gutters">
        <div>
          <img
            src={!images ? imgDefecto : images}
            className="card-img"
            alt={nombrematrimonio}
            width="200"
            height="250"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div>
          <div className="card-body">
            <h4 className="card-title"> {nombrematrimonio} </h4>
            <h5 className="card-text">
              {esposo.nombre} Y {esposa.nombre}{" "}
            </h5>
            <div className="flexbox-container">
              <div></div>
              <div className="col-md-10">
                {/* <h6 className="card-text">{esposo.nombre} </h6>
                <h6 className="card-text">{esposa.nombre} </h6> */}
                <h6 className="card-text">{diocesis} </h6>
                <p className="card-text">Bloque: {bloque} </p>
              </div>
            </div>
            <p className="card-text mb-2"></p>
            <Link
              className="btn btn-secondary"
              to="/home/matrimonio"
              onClick={handleClick}
            >
              Ver más...
            </Link>

            {(auth.rol === "SUPER_ADMIN_ROLE" || auth.rol === "ADMIN_ROLE") && (
              <Link
                className="btn btn-warning ml-2"
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
