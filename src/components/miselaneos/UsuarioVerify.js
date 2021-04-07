import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const UsuarioVerify = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="full-screen">
      <div className="alert-info">
        <hr />

        <h3>Su Usuario aún no ha sido verificado</h3>
        <span>Espere por favor...!</span>
        <hr />
        <button onClick={logout} className="btn btn-outline-danger">
          Cerrar Sesión...!
        </button>
      </div>
    </div>
  );
};
