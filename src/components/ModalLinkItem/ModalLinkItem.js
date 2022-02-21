import React from 'react';
import { FiX, FiClipboard } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import './style.css';

export default function ModalLinkItem({ setActiveModal, data }) {
  function closeModal() {
    setActiveModal(false);
  }

  async function copyLink() {
    await navigator.clipboard.writeText(data.link);
    toast.success('Url copiada com sucesso');
  }

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2 className="title-modal">Link encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <ToastContainer />

      <span className="span-modal">{data.long_url}</span>
      <button className="modal-link" onClick={copyLink}>
        {data.link}
        <FiClipboard size={20} color="#fff" />
      </button>
    </div>
  );
}
