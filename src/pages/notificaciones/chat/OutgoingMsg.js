import React from "react";
import { horaMes } from "../../../helpers/formatdate";

export const OutgoingMsg = ({ msg }) => {
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
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
