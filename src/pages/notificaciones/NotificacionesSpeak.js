import { Divider } from "@material-ui/core";
import React, { useContext } from "react";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { SocketContext } from "../../context/SocketContext";
import { UsuariosOnlineChat } from "../admin/UsuariosOnlineChat";
import { ChatSelect } from "./chat/ChatSelect";
import { Messages } from "./chat/Messages";

export const NotificacionesSpeak = () => {
  const { socketState } = useContext(SocketContext);
  return (
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>
      <Divider orientation="vertical" flexItem />
      <div className="col-md-2" style={{ height: "85vh", overflowY: "scroll" }}>
        <UsuariosOnlineChat />
      </div>
      <div
        className="col-md-6 m-2"
        style={{
          height: "85vh",
          overflowY: "none",
          borderColor: "Highlight",
          borderStyle: "solid",
          borderRadius: 15,
        }}
      >
        {socketState.chatActivo ? <Messages /> : <ChatSelect />}
      </div>
    </div>
  );
};
