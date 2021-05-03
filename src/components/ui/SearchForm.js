import React from "react";
import { useHistory } from "react-router";
import { pantallasBusqueda } from "../../context/initialState/pantallasBusqueda";
import { SearchMatrimonioForm } from "./SearchMatrimonioForm";
import { SearchSacerdoteForm } from "./SearchSacerdoteForm";

export const SearchForm = () => {
  const history = useHistory();
  const ruta = history.location.pathname.split("/");
  const option = ruta[ruta.length - 1];

  if (!pantallasBusqueda.includes(option)) {
    return null;
  }
  switch (option) {
    case "matrimonios":
    case "matrimonio":
      return <SearchMatrimonioForm />;
    case "sacerdotes":
    case "sacerdote":
      return <SearchSacerdoteForm />;
    default:
      return null;
  }
};
