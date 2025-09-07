import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div>
      {isOpen && (
        <div className="modal__bg">
          <div className="modal__container">
            <h4>Modal window</h4>
            <button onClick={onClose}>Close window</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
