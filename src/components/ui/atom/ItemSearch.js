import { Divider, Link } from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { MatrimoniosContext } from "../../../context/MatrimoniosContext";

export const ItemSearch = ({ item }) => {
  const { selecMatrimonio, selecSacerdote } = useContext(MatrimoniosContext);
  const history = useHistory();
  const ruta = history.location.pathname.split("/");
  const option = ruta[ruta.length - 1];
  if (!item) {
    return null;
  }

  const { nombrematrimonio, diocesis, esposa, esposo, bloque, images } = item;

  const handleClick = (e) => {
    e.preventDefault();
    switch (option) {
      case "matrimonios":
      case "matrimonio":
      case "celebraciones":
        selecMatrimonio(item);
        history.push("/home/matrimonio");
        break;
      case "sacerdotes":
      case "sacerdote":
        selecSacerdote(item);
        history.push("/home/sacerdote");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Link style={{ backgroundColor: "lightslategray" }} onClick={handleClick}>
        {/* <Link style={{ backgroundColor: "lightslategray" }}> */}
        <div className="input-group" style={{ flexDirection: "row" }}>
          <img
            alt={nombrematrimonio}
            src={images}
            style={{
              width: "50px",
              height: "50px",
              objectFit: "contain",
              borderRadius: 50,
              backgroundColor: "lightslategray",
              marginTop: 5,
              marginBottom: 5,
            }}
          />
          <div className="col-md-2 mt-3">
            <label>{nombrematrimonio}</label>
          </div>
          {esposo && (
            <>
              <div className="col-md-2 mt-3">
                <label>{esposo.nombre}</label>
              </div>
              <div className="col-md-2 mt-3">
                <label>{esposa.nombre}</label>
              </div>
            </>
          )}
          <div className="col-md-2 mt-3">
            <label>{diocesis}</label>
          </div>
          <div className="col-md-2 mt-3">
            <label>{bloque}</label>
          </div>
        </div>
        <Divider />
      </Link>
    </div>
  );
};
