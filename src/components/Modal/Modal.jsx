import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";
import MStyle from "./Modal.module.css";
import { CloseIcon } from "../../ui/icon/CloseIcon";
const modalsContainer = document.querySelector("#modals");

function Modal({ onClose, children }) {
  React.useEffect(() => {
    const handleEscKeydown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKeydown);

    return () => {
      document.removeEventListener("keydown", handleEscKeydown);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <div className={MStyle.modal}>
      
        {children}
        <button className={MStyle.close} onClick={onClose}>
          <CloseIcon  />
        </button>
      </div>
      <ModalOverlay onClick={onClose} />
    </>,
    modalsContainer
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
