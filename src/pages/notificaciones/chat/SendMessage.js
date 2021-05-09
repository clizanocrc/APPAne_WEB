import { Divider } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { SocketContext } from "../../../context/SocketContext";

export const SendMessage = () => {
  const [message, setMessage] = useState("");
  const { socket, socketState } = useContext(SocketContext);
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
    const msg = {
      de: auth.uid,
      para: socketState.chatActivo,
      mensaje: message,
    };
    socket.emit("mensaje-personal", msg);
  };

  return (
    <form onSubmit={OnSubmit}>
      <Divider />
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
            <i className="fas fa-send" />
          </button>
        </div>
      </div>
    </form>
  );
};
