import React from "react";

export const UsuarioSelectNoti = ({ usuario }) => {
  return (
    <div
      className="input-group col-md-12 "
      style={{
        flexDirection: "row",
        borderRadius: 5,
        marginBottom: 5,
        alignContent: "flex-start",
      }}
    >
      <small className="ml-2">{usuario.nombre}</small>
    </div>
  );
};
