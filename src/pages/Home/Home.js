import React from 'react';
import { FiLink } from 'react-icons/fi';
import Logo from '../../assets/Logo.png';
import './style.css';

export default function Home() {
  return (
    <div className="container-home">
      <div className="logo-home">
        <img className="image-home" src={Logo} alt="Logo Link" />
        <h1 className="title-home">EncurtaLinks</h1>
        <span className="span-home">Cole seu link para encurtar 👇</span>

        <div className="area-input">
          <div className="input-home">
            <FiLink className="icon-home" size={24} color="#fff" />
            <input
              className="input-this"
              type="text"
              placeholder="Cole seu link aqui"
            />
          </div>

          <button>Gerar link</button>
        </div>
      </div>
    </div>
  );
}
