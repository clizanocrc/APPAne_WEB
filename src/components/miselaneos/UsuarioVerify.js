import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LogoEmm } from "../ui/atom/FormControls";

export const UsuarioVerify = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div
      style={{
        position: "absolute",
        height: "200px",
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
        <h4>Alta de su Usuario Pendiente</h4>
        <hr />

        <span>Espere a un Administrador...!</span>
        <hr />
        <button onClick={logout} className="btn btn-outline-danger mb-4">
          Cerrar Sesión...!
        </button>
      </div>
    </div>
  );
};
