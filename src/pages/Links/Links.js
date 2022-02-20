import React from 'react';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './style.css';

export default function Links() {
  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={48} color="#fff" />
        </Link>

        <h1 className="title-links">Meus Links</h1>
      </div>

      <div className="links-items">
        <button className="link">
          <FiLink className="icon-items" size={18} color="#fff" />
          https://sujeitoprogramador.com
        </button>
        <button className="link-delete">
          <FiTrash size={24} color="#ff5454" />
        </button>
      </div>

      <div className="links-items">
        <button className="link">
          <FiLink className="icon-items" size={18} color="#fff" />
          https://sujeitoprogramador.com
        </button>
        <button className="link-delete">
          <FiTrash size={24} color="#ff5454" />
        </button>
      </div>
    </div>
  );
}
