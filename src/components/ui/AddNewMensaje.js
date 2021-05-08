import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const AddNewMensaje = () => {
  const { showModalMensajes } = useContext(AppContext);
  const handleClickNew = () => {
    showModalMensajes();
  };

  return (
    <button className="btn btn-primary fab" onClick={handleClickNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
