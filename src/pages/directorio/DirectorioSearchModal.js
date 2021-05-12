import Modal from "react-modal";
import React, { useContext } from "react";
import { SearchForm } from "../../components/ui/SearchForm";
import { AppContext } from "../../context/AppContext";

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
export const DirectorioSearchModal = () => {
  const { state, hideModalSearch } = useContext(AppContext);

  const closeModal = () => {
    hideModalSearch();
  };

  return (
    <Modal
      isOpen={state.isLoadingSearch}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <SearchForm />
    </Modal>
  );
};
