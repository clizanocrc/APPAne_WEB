import React from "react";
import { LogoEmm } from "./FormControls";

export const AppInfo = () => {
  return (
    <div
      style={{
        position: "absolute",
        height: "200px",
        width: "600px",
        left: "50%",
        top: "40%",
        marginTop: "-200px",
        marginLeft: "-300px",
      }}
      className="col-md-7"
    >
      {/* <div className="img-thumbnail animate__animated animate__fadeInLeft"> */}
      {/* <div className="img-thumbnail"> */}
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
        <h4>APP Ane</h4>
        <hr />
        <span>Costa Rica</span>
        <span>Todos los derechos reservados</span>
        <hr />
      </div>
      {/* <div className="col-md-7">test</div> */}
    </div>
  );
};
