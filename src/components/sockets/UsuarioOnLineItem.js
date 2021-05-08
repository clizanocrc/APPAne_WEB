import React, { useContext } from "react";
import defaultUser from "../../assets/defaultUser.png";
import { AppContext } from "../../context/AppContext";
import { SocketContext } from "../../context/SocketContext";

export const UsuarioOnLineItem = ({ usuario }) => {
  const { showModalMensajes } = useContext(AppContext);

  const { seleccionaUsuario, eliminaUsuario, socketState } = useContext(
    SocketContext
  );
  const { usuariosSeleccionados } = socketState;
  const seleccionado = usuariosSeleccionados.filter(
    (e) => e.uid === usuario.uid
  );

  const color = usuario.conectado ? "lightgreen" : "lightgrey";

  const handleClick = () => {
    if (seleccionado.length > 0) {
      eliminaUsuario(usuario);
    } else {
      seleccionaUsuario(usuario);
    }

    showModalMensajes();
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
      }}
    >
      <div
        style={{ cursor: "pointer", color: "blue" }}
        className="mr-1"
        onClick={handleClick}
      >
        <i className="fas fa-send"></i>
      </div>
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
      <small className="ml-2">{usuario.nombre.substring(0, 19)}..</small>
    </div>
  );
};
