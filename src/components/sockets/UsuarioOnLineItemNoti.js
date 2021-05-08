import React, { useContext } from "react";
import defaultUser from "../../assets/defaultUser.png";
import { SocketContext } from "../../context/SocketContext";

export const UsuarioOnLineItemNoti = ({ usuario }) => {
  const { seleccionaUsuario, eliminaUsuario, socketState } = useContext(
    SocketContext
  );
  const { usuariosSeleccionados } = socketState;

  const seleccionado = usuariosSeleccionados.filter(
    (e) => e.uid === usuario.uid
  );

  const color = seleccionado.length > 0 ? "lightgreen" : "lightblue";

  // console.log(seleccionado);

  const handleSelecciona = () => {
    if (seleccionado.length > 0) {
      eliminaUsuario(usuario);
    } else {
      seleccionaUsuario(usuario);
    }
  };
  return (
    <div
      className="input-group col-md-12 "
      style={{
        flexDirection: "row",
        backgroundColor: color,
        borderRadius: 5,
        marginBottom: 5,
        alignContent: "flex-start",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={handleSelecciona}
    >
      <img
        alt={usuario.nombre}
        src={usuario.images ? usuario.images : defaultUser}
        style={{
          width: "30px",
          height: "30px",
          objectFit: "contain",
          borderRadius: 50,
          marginTop: 2,
          marginBottom: 2,
        }}
      />
      {seleccionado.length > 0 ? (
        <i className="fa fa-user-check bigicon ml-1"></i>
      ) : (
        <i className="fa fa-user bigicon ml-1"></i>
      )}
      <small className="ml-1">{usuario.nombre.substring(0, 20)}..</small>
    </div>
  );
};
