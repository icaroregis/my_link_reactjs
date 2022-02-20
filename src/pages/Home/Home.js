import React, { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import Logo from '../../assets/Logo.png';
import Menu from '../../components/Menu/Menu';
import './style.css';

export default function Home() {
  const [link, setLink] = useState('');

  function handleShortLink(e) {
    e.preventDefault();
    alert(link);
  }

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
              value={link}
              onChange={({ target }) => setLink(target.value)}
              className="input-this"
              type="text"
              placeholder="Cole seu link aqui"
            />
          </div>

          <button onClick={(e) => handleShortLink(e)} className="button-home">
            Gerar link
          </button>
        </div>

        <Menu />
      </div>
    </div>
  );
}
