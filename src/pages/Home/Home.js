import React, { useState } from 'react';
import ModalLinkItem from '../../components/ModalLinkItem/ModalLinkItem';
import { toast, ToastContainer } from 'react-toastify';
import { saveLink } from '../../services/storyLinks';
import Menu from '../../components/Menu/Menu';
import Logo from '../../assets/Logo.png';
import { FiLink } from 'react-icons/fi';
import api from '../../services/api';
import './style.css';

export default function Home() {
  const [link, setLink] = useState('');
  const [activeModal, setActiveModal] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink() {
    try {
      const response = await api.post('shorten', { long_url: link });
      setData(response.data);
      setActiveModal(true);
      saveLink('@encurtaLink', response.data);
      setLink('');
    } catch {
      toast.error(
        'Oops parece que algo deu errado!!! seu link está vazio ou é inválido',
      );
      setLink('');
    }
  }

  return (
    <div className="container-home">
      <ToastContainer />
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

          <button onClick={handleShortLink} className="button-home">
            Gerar link
          </button>
        </div>
        <Menu />
        {activeModal && (
          <ModalLinkItem setActiveModal={setActiveModal} data={data} />
        )}
      </div>
    </div>
  );
}
