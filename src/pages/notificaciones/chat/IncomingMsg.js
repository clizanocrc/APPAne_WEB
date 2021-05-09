import React, { useContext } from "react";
import { SocketContext } from "../../../context/SocketContext";
import { UsuariosContext } from "../../../context/UsuariosContext";
import { horaMes } from "../../../helpers/formatdate";

export const IncomingMsg = ({ msg }) => {
  const { avatarUsuario } = useContext(UsuariosContext);
  const { chatLeido } = useContext(SocketContext);
  const image = avatarUsuario(msg.de);

  if (!msg.leido) {
    chatLeido(msg);
  }

  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img
          src={image}
          alt="sunil"
          style={{
            width: "40px",
            height: "40px",
            objectFit: "fill",
            borderRadius: 50,
          }}
        />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{msg.mensaje}</p>
          <div className="divjustificadoizq">
            <span className="time_date mr-2"> {horaMes(msg.createdAt)}</span>
            {msg.leido ? (
              <i className="fa fa-check-double"></i>
            ) : (
              <i className="fa fa-check"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// style={{ backgroundColor: "lightgreen" }}
