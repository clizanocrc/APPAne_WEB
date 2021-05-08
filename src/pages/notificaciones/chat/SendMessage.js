import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { SocketContext } from "../../../context/SocketContext";

export const SendMessage = () => {
  const [message, setMessage] = useState("");
  const { socket, chat } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);

  const onChange = ({ target }) => {
    setMessage(target.value);
  };

  const OnSubmit = (event) => {
    event.preventDefault();
    if (message.length === 0) {
      return;
    }
    setMessage("");

    //Emitir un evento de sockets para enviar el mensaje
    // {
    //   de: uid del usuario que envía l mensaje
    //   para: uid del usuario destino
    //   mensaje: texto del mensaje
    // }
    socket.emit("mensaje-personal", {
      de: auth.uid,
      para: chat.chatActivo,
      mensaje: message,
    });

    //TODO: dispatch al reducer del chat con el mensaje
  };

  return (
    <form onSubmit={OnSubmit}>
      <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
          <input
            type="text"
            className="write_msg"
            placeholder="Mensaje..."
            name="message"
            value={message}
            onChange={onChange}
          />
        </div>
        <div className="col-sm-3 text-center">
          <button className="msg_send_btn mt-3" type="submit">
            enviar
          </button>
        </div>
      </div>
    </form>
  );
};
