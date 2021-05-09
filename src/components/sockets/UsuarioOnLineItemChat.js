import React, { useContext, useEffect, useState } from "react";
import defaultUser from "../../assets/defaultUser.png";
import { AuthContext } from "../../context/AuthContext";
import { SocketContext } from "../../context/SocketContext";

export const UsuarioOnLineItemChat = ({ usuario }) => {
  const { activarChat } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);
  const [msgSinLeer, setMsgSinLeer] = useState(0);
  const { socketState } = useContext(SocketContext);

  const color = usuario.conectado ? "lightgreen" : "lightgrey";
  const colorMsgSinLeer = msgSinLeer > 0 ? "green" : "blue";

  useEffect(() => {
    const noLeidos = socketState.chatNoLeido.filter(
      (msg) => msg.de === usuario.uid
    );
    setMsgSinLeer(noLeidos.length);
  }, [socketState, usuario.uid]);

  const handleClick = async () => {
    await activarChat({
      miId: auth.uid,
      mensajesDe: usuario.uid,
    });
  };

  return (
    <div
      className="input-group col-md-12 "
      style={{
        backgroundColor: color,
        borderRadius: 5,
        marginBottom: 5,
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
      onClick={handleClick}
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
        }}
      />
      <small className="ml-2">{usuario.nombre.substring(0, 20)}..</small>
      <div style={{ color: colorMsgSinLeer }} onClick={handleClick}>
        <i className="fas fa-comments mr-1" />
        {msgSinLeer}
      </div>
    </div>
  );
};
