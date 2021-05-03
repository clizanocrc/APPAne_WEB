import { Divider, Link } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { MatrimoniosContext } from "../../context/MatrimoniosContext";

import { useForm } from "../../hooks/useForm";
import { ItemSearch } from "./atom/ItemSearch";

export const SearchSacerdoteForm = () => {
  const { matrimonios } = useContext(MatrimoniosContext);
  const [formValues, onChange, reset] = useForm({ search: "" });
  const [viewResults, setViewResults] = useState(false);
  const [resultados, setResultados] = useState(matrimonios.sacerdotes);

  useEffect(() => {
    if (formValues.search) {
      setViewResults(true);
    } else {
      setViewResults(false);
    }
  }, [formValues]);

  const handleSearch = () => {
    if (viewResults) {
      setResultados(matrimonios.sacerdotes);
    }
    setViewResults(!viewResults);
  };

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
      setViewResults(false);
      setResultados(matrimonios.sacerdotes);
      reset();
    }
  };

  return (
    <>
      {viewResults && (
        <div
          // className="row-cols-lg-6"
          style={{
            position: "absolute",
            top: "48px",
            backgroundColor: "white",
            width: "60%",
            height: "500px",
            left: "30%",
            zIndex: "1000",
            borderStyle: "solid",
            borderColor: "lightslategray",
            borderRadius: 10,
            overflowX: "scroll",
          }}
        >
          <div className="mt-1 ml-4 mr-4 mb-2">
            <h6 className="mb-2">Resultados</h6>
            <div className="input-group" style={{ flexDirection: "row" }}>
              <div className="col-md-3 mt-3">
                <label>Matrimonio</label>
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
      )}
      <div className="input-group ml-5" style={{ alignItems: "center" }}>
        <Link onClick={handleSearch} to={""}>
          <i
            className="fa fa-search bigicon mr-3"
            style={{ color: "gray" }}
          ></i>
        </Link>
        <input
          type="text"
          className="form-control mr-2 col-md-8"
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
