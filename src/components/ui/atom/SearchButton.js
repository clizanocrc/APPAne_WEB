import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AppContext } from "../../../context/AppContext";
import { pantallasBusqueda } from "../../../context/initialState/pantallasBusqueda";

export const SearchButton = () => {
  const { showModalSearch } = useContext(AppContext);
  const history = useHistory();

  const ruta = history.location.pathname.split("/");
  const option = ruta[ruta.length - 1];

  if (!pantallasBusqueda.includes(option)) {
    return null;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    showModalSearch();
  };

  return (
    <div
      className="divjustificadoizq"
      style={{ color: "steelblue", cursor: "pointer" }}
      onClick={handleSearch}
    >
      <i className="fa fa-search bigicon ml-3"></i>
      <label className="ml-2">Buscar</label>
    </div>
  );
};
