import { useCallback, useEffect, useState } from "react";
import io from "socket.io-client";

//process.env.REACT_APP_URL

export const useSocket = (serverPath) => {
  const [socket, setSocket] = useState(null);
  const [onLine, setOnLine] = useState(false);

  const conectarSocket = useCallback(() => {
    const token = localStorage.getItem("token");
    const socketTemp = io.connect(serverPath, {
      transports: ["websocket"],
      autoConnect: true,
      forceNew: true,
      query: {
        "x-token": token,
      },
    });
    setSocket(socketTemp);
  }, [serverPath]);

  const desconectarSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  useEffect(() => {
    setOnLine(socket?.connected);
  }, [socket]);

  useEffect(() => {
    socket?.on("connect", () => {
      setOnLine(true);
    });
  }, [socket]);

  useEffect(() => {
    socket?.on("disconnect", () => {
      setOnLine(false);
    });
  }, [socket]);

  return {
    socket,
    onLine,
    conectarSocket,
    desconectarSocket,
  };
};
