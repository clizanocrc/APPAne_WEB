import React, { useContext } from "react";
import { useHistory } from "react-router";
import { SocketContext } from "../../context/SocketContext";

export const NuevosMensajesFab = () => {
  const { socketState } = useContext(SocketContext);
  const history = useHistory();
  const handleClickNew = () => {
    history.push("home/notispeak");
  };

  if (socketState.chatNoLeido.length === 0) {
    return null;
  }

  const textoTool =
    socketState.chatNoLeido.length === 1
      ? `${socketState.chatNoLeido.length} mensaje nuevo`
      : `${socketState.chatNoLeido.length} mensajes nuevos`;

  return (
    <div
      onClick={handleClickNew}
      className="tooltip fab-div ml-2 animate__animated animate__lightSpeedInRight"
      style={{
        backgroundColor: "grey",
        borderRadius: 10,
        opacity: 0.4,
        width: 200,
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      <div>
        <h6>Mensajes en el chat!!!</h6>
        <span class="tooltiptext">{textoTool}</span>
      </div>
    </div>
  );
};
