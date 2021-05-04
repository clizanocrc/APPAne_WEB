import React, { useContext } from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { AppContext } from "../../context/AppContext";

export const ParamPage = () => {
  const { state } = useContext(AppContext);
  const { params } = state;
  const { sinpemovil, sinpemovilFIKolbi } = params[0];
  // const { id, sinpemovil, sinpemovilFIKolbi, usuario } = params[0];
  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div>
        Pantalla de Parámetros
        <p>Sinpe Movil Kolbi {sinpemovilFIKolbi}</p>
        <p>Sinpe Movil {sinpemovil}</p>
      </div>
    </div>
  );
};
