import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import defaultUser from "../../assets/defaultUser.png";
import { AppContext } from "../../context/AppContext";
import { AuthContext } from "../../context/AuthContext";
import { SocketContext } from "../../context/SocketContext";

export const UsuarioOnLineItem = ({ usuario }) => {
  const history = useHistory();
  const { showModalMensajes } = useContext(AppContext);
  const {
    seleccionaUsuario,
    eliminaUsuario,
    socketState,
    activarChat,
  } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);
  const { usuariosSeleccionados } = socketState;
  const [msgSinLeer, setMsgSinLeer] = useState(0);

  const seleccionado = usuariosSeleccionados.filter(
    (e) => e.uid === usuario.uid
  );

  useEffect(() => {
    const noLeidos = socketState.chatNoLeido.filter(
      (msg) => msg.de === usuario.uid
    );
    setMsgSinLeer(noLeidos.length);
  }, [socketState, usuario.uid]);

  const color = usuario.conectado ? "lightgreen" : "lightgrey";
  const colorMsgSinLeer = msgSinLeer > 0 ? "green" : "blue";

  const handleClick = () => {
    if (seleccionado.length > 0) {
      eliminaUsuario(usuario);
    } else {
      seleccionaUsuario(usuario);
    }
    showModalMensajes();
  };

  const handleChat = async () => {
    await activarChat({
      miId: auth.uid,
      mensajesDe: usuario.uid,
    });
    history.push("home/notispeak");
  };

  return (
    <div>
      <div
        className="input-group col-md-12 "
        style={{
          backgroundColor: color,
          borderRadius: 5,
          marginBottom: 5,
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="divjustificadoizq">
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
          <small className="ml-2">{usuario.nombre.substring(0, 15)}..</small>
        </div>
        <div className="divjustificadoizq">
          <div
            style={{ cursor: "pointer", color: "blue" }}
            onClick={handleClick}
          >
            <i className="fas fa-send mr-2 ml-2" />
          </div>
          <div
            style={{ cursor: "pointer", color: colorMsgSinLeer }}
            onClick={handleChat}
          >
            <i className="fas fa-comments mr-1" />
            {msgSinLeer}
          </div>
        </div>
      </div>
    </div>
  );
};
