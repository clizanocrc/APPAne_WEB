import React, { useContext, useEffect } from "react";
import { IncomingMsg } from "./IncomingMsg";
import { OutgoingMsg } from "./OutgoingMsg";
import { SendMessage } from "./SendMessage";
import { SocketContext } from "../../../context/SocketContext";
import { AuthContext } from "../../../context//AuthContext";
import { scrollToBottonAnimated } from "../../../helpers/scrollToBotton";
import { UsuariosContext } from "../../../context/UsuariosContext";
import { Divider } from "@material-ui/core";

export const Messages = () => {
  const { socketState } = useContext(SocketContext);
  const { avatarUsuario, nombreUsuario } = useContext(UsuariosContext);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    scrollToBottonAnimated("messagesAll");
  }, [socketState]);

  const mensajes = socketState.chat.filter(
    (msg) =>
      (msg.para === auth.uid && msg.de === socketState.chatActivo) ||
      (msg.para === socketState.chatActivo && msg.de === auth.uid)
  );

  // console.log(mensajes);

  return (
    <div className="mesgs">
      <div className="divjustificadoizq mt-1 mb-1">
        <img
          src={avatarUsuario(socketState.chatActivo)}
          alt="sunil"
          style={{
            width: "40px",
            height: "40px",
            objectFit: "fill",
            borderRadius: 50,
          }}
        />
        <h6 className="ml-2">
          Ahora está conectado con {nombreUsuario(socketState.chatActivo)}
        </h6>
      </div>
      <div id="messagesAll" className="msg_history">
        <Divider />

        {mensajes.map((msg) =>
          msg.para === auth.uid ? (
            <IncomingMsg key={msg._id} msg={msg} />
          ) : (
            <OutgoingMsg key={msg._id} msg={msg} />
          )
        )}
      </div>
      <SendMessage />
    </div>
  );
};
