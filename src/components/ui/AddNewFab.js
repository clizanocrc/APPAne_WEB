import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const AddNewFab = () => {
  const { showModalLoadingCalendar } = useContext(AppContext);
  const handleClickNew = () => {
    showModalLoadingCalendar();
  };

  return (
    <button className="btn btn-primary fab" onClick={handleClickNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
