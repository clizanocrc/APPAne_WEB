import { Link } from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { MatrimoniosContext } from "../../../context/MatrimoniosContext";
import { DateColor } from "../../../helpers/conyugesFilter";
import { fechaDiffAniversario } from "../../../helpers/fechaDef";

export const ItemAniversario = ({ item }) => {
  const { selecMatrimonio, selecSacerdote } = useContext(MatrimoniosContext);
  const history = useHistory();
  if (!item) {
    return null;
  }
  const { nombrematrimonio, fechaMatrimonio, images } = item;
  const diffDate = fechaDiffAniversario(fechaMatrimonio);
  const handleClick = (e) => {
    e.preventDefault();
    switch (item.esMatrimonio) {
      case true:
        selecMatrimonio(item);
        history.push("/home/matrimonio");
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
          className="input-group col-md-12 "
          style={{
            flexDirection: "row",
            backgroundColor: DateColor(fechaMatrimonio),
            borderRadius: 20,
            marginBottom: 5,
          }}
        >
          <img
            alt={nombrematrimonio}
            src={images}
            style={{
              width: "60px",
              height: "60px",
              objectFit: "contain",
              borderRadius: 50,
              backgroundColor: "lightslategray",
              marginTop: 5,
              marginBottom: 5,
              marginLeft: 5,
            }}
          />
          <div className="col-md-9 mt-3" style={{ flexDirection: "row" }}>
            <label>{nombrematrimonio}</label>
            <label className="card-text">{diffDate.msg}</label>
          </div>
        </div>
      </Link>
    </div>
  );
};
