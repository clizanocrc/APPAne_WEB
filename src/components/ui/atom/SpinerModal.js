import React, { useContext } from "react";
import Modal from "react-modal";
import { AppContext } from "../../../context/AppContext";
import "../../../css/modal.css";

import { Spiner } from "./Spiner";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const SpinerModal = () => {
  const { state } = useContext(AppContext);

  return (
    <Modal
      isOpen={state.isLoading}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal-spiner"
      overlayClassName="modal-fondo"
    >
      <div
        style={{
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <label style={{ color: "#FFAD33" }}>Procesando</label>
        <Spiner />
      </div>
    </Modal>
  );
};
