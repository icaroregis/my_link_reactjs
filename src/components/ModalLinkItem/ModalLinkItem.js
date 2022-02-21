import React from 'react';
import { FiX, FiClipboard } from 'react-icons/fi';
import './style.css';

export default function ModalLinkItem({ setActiveModal }) {
  function closeModal(e) {
    setActiveModal(false);
  }

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2 className="title-modal">Link encurtado</h2>
        <button onClick={(e) => closeModal(e)}>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <span className="span-modal">https://www.google.com.br</span>
      <button className="modal-link">
        https://bit.ly/12900
        <FiClipboard size={20} color="#fff" />
      </button>
    </div>
  );
}
