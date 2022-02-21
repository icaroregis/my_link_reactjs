import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getLinkSalve } from '../../services/storyLinks';
import ModalLinkItem from '../../components/ModalLinkItem/ModalLinkItem';
import './style.css';

export default function Links() {
  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  function handdleOpen(link) {
    setData(link);
    setShowModal(true);
  }

  function handleDelete(id) {
    console.log(id);
  }

  useEffect(() => {
    async function getLinks() {
      const result = await getLinkSalve('@encurtaLink');
      if (result.length === 0) {
        console.log('lista vazia');
      }
      setLinks(result);
    }

    getLinks();
  }, []);

  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={48} color="#fff" />
        </Link>

        <h1 className="title-links">Meus Links</h1>
      </div>

      {links.map((link) => {
        return (
          <div key={link.id} className="links-items">
            <button className="link" onClick={() => handdleOpen(link)}>
              <FiLink className="icon-items" size={18} color="#fff" />
              {link.long_url}
            </button>
            <button
              className="link-delete"
              onClick={() => handleDelete(link.id)}
            >
              <FiTrash size={24} color="#ff5454" />
            </button>
          </div>
        );
      })}

      {showModal && <ModalLinkItem setShowModal={setShowModal} data={data} />}
      <div className="Spacing" />
    </div>
  );
}
