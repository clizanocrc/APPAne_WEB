import { Link } from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { fechaDifCumple } from "../../../helpers/fechaDef";
import defaultUser from "../../../assets/defaultUser.png";
import { ConyuguesContext } from "../../../context/ConyuguesContext";
import { DateColor } from "../../../helpers/conyugesFilter";
import { MatrimoniosContext } from "../../../context/MatrimoniosContext";

export const ItemCumpleanos = ({ item }) => {
  const { selecConyuge } = useContext(ConyuguesContext);
  const { selecSacerdote } = useContext(MatrimoniosContext);
  const history = useHistory();
  if (!item) {
    return null;
  }
  const {
    nombre,
    apellido,
    fechaNacimiento,
    images,
    esMatrimonio = true,
  } = item;
  const diffDate = fechaDifCumple(fechaNacimiento);

  const handleClick = (e) => {
    e.preventDefault();
    switch (esMatrimonio) {
      case true:
        selecConyuge(item);
        history.push("/home/conyugenav");
        break;
      case false:
        selecSacerdote(item);
        history.push("/home/sacerdote");
        break;
      default:
        break;
    }
  };

  return (
    <div className="mr-2">
      <Link onClick={handleClick}>
        <div
          className="input-group"
          style={{
            flexDirection: "row",
            backgroundColor: DateColor(fechaNacimiento),
            borderRadius: 20,
            marginBottom: 5,
          }}
        >
          <img
            alt={nombre}
            src={images ? images : defaultUser}
            style={{
              width: "60px",
              height: "60px",
              objectFit: "contain",
              borderRadius: 50,
              marginTop: 5,
              marginBottom: 5,
              marginLeft: 5,
            }}
          />
          <div className="col-md-9 mt-3" style={{ flexDirection: "row" }}>
            <label>
              {nombre} {apellido}
            </label>
            <label className="card-text">{diffDate.msg}</label>
          </div>
        </div>
      </Link>
    </div>
  );
};
