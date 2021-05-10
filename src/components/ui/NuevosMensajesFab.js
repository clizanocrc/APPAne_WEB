import React, { useContext } from "react";
import { SocketContext } from "../../context/SocketContext";

export const NuevosMensajesFab = () => {
  const { socketState } = useContext(SocketContext);
  const handleClickNew = () => {
    console.log(socketState);
  };

  if (socketState.chatNoLeido.length === 0) {
    return null;
  }

  return (
    <div
      onClick={handleClickNew}
      className="fab-div ml-2 animate__animated animate__lightSpeedInRight"
      style={{
        backgroundColor: "grey",
        borderRadius: 10,
        opacity: 0.4,
        width: 200,
        // alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h6>Chat sin leer: {socketState.chatNoLeido.length}</h6>
    </div>
  );
};
