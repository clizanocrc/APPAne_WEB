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
      <p
        className="ml-2"
        style={{
          color: "blue",
        }}
      >
        {usuario.nombre}
      </p>
    </div>
  );
};
