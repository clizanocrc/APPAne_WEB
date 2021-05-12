import { Divider } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { MatrimoniosContext } from "../../context/MatrimoniosContext";

import { useForm } from "../../hooks/useForm";
import { ItemSearch } from "./atom/ItemSearch";

export const SearchSacerdoteForm = () => {
  const { matrimonios } = useContext(MatrimoniosContext);
  const [formValues, onChange, reset] = useForm({ search: "" });
  const [resultados, setResultados] = useState(matrimonios.sacerdotes);

  const handleChange = (e) => {
    onChange(e);
    const sacerd = matrimonios.sacerdotes.filter((sacerdote) =>
      sacerdote.nombrematrimonio
        .toUpperCase()
        .includes(formValues.search.toUpperCase())
    );
    setResultados(sacerd);
  };

  const handleKeyDown = (e) => {
    var codigo = e.which || e.keyCode;
    if (codigo === 27) {
      setResultados(matrimonios.sacerdotes);
      reset();
    }
  };
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50px",
          backgroundColor: "white",
          width: "98%",
          height: "485px",
          borderColor: "lightslategray",
          borderRadius: 10,
          overflowX: "hidden",
          overflowY: "scroll",
        }}
      >
        <div className="mt-1 ml-4 mr-4 mb-2">
          <div className="input-group" style={{ flexDirection: "row" }}>
            <div className="col-md-3 mt-3">
              <label>Sacerdote</label>
            </div>
            <div className="col-md-2 mt-3">
              <label>Diócesis</label>
            </div>
            <div className="col-md-2 mt-3">
              <label>Bloque</label>
            </div>
          </div>
        </div>
        <Divider />
        <div className="ml-4 mb-2">
          {resultados.map((item) => (
            <ItemSearch key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="input-group ml-5" style={{ alignItems: "center" }}>
        <input
          type="text"
          className="form-control mr-2 col-md-10"
          placeholder="Buscar"
          name="search"
          value={formValues.search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          style={{ backgroundColor: "lightgray" }}
        />
      </div>
    </>
  );
};
