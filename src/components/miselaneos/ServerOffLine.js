import React from "react";
import { LogoEmm } from "../ui/atom/FormControls";

export const ServerOffLine = () => {
  return (
    <div
      style={{
        position: "absolute",
        height: "250px",
        width: "600px",
        left: "50%",
        top: "50%",
        marginTop: "-200px",
        marginLeft: "-300px",
      }}
      className="img-thumbnail animate__animated animate__fadeInLeft"
    >
      <div
        className="alert-info"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <hr />
        <LogoEmm />
        <h4>Servidor fuera de Línea</h4>
        <hr />

        <h4>Intente mas Tarde...!</h4>
      </div>
    </div>
  );
};
