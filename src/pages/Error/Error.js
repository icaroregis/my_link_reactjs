import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../../assets/notfound.png';
import './style.css';

export default function Error() {
  return (
    <div className="container-error">
      <img src={NotFound} alt="" />
      <h1>Página não encontrada</h1>

      <Link to="/">Voltar para home</Link>
    </div>
  );
}
