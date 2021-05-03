import React from "react";
import defaultUser from "../../assets/defaultUser.png";

export const BlogLikeItem = ({ like }) => {
  const { usuario } = like;
  return (
    <div
      className="input-group col-md-12 "
      style={{
        flexDirection: "row",
        backgroundColor: "lightblue",
        borderRadius: 5,
        marginBottom: 5,
        alignContent: "flex-start",
        alignItems: "center",
      }}
    >
      <img
        alt={usuario.nombre}
        src={usuario.images ? usuario.images : defaultUser}
        style={{
          width: "30px",
          height: "30px",
          objectFit: "contain",
          borderRadius: 50,
          marginTop: 5,
          marginBottom: 5,
          //   marginLeft: 1,
        }}
      />
      <small className="ml-2">{usuario.nombre.substring(0, 20)}</small>
    </div>
  );
};
