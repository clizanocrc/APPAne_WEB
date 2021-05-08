import React, { useContext } from "react";
import { IncomingMsg } from "./IncomingMsg";
import { OutgoingMsg } from "./OutgoingMsg";
import { SendMessage } from "./SendMessage";
import { SocketContext } from "../../../context/SocketContext";
import { AuthContext } from "../../../context//AuthContext";

export const Messages = () => {
  const { socketState } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);

  return (
    <div className="mesgs">
      <div id="messagesAll" className="msg_history">
        {socketState.chat.map((msg) =>
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
