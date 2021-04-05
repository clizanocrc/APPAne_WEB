import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { MatrimoniosContext } from "../context/MatrimoniosContext";

export const PrincipalPage = () => {
  const { auth, logout } = useContext(AuthContext);
  const { state } = useContext(MatrimoniosContext);
  const { name } = auth;
  console.log(state.total);

  return (
    <div>
      <h1>Hola {name}</h1>
      <button onClick={logout} className="btn btn-danger">
        Salir
      </button>
    </div>
  );
};
