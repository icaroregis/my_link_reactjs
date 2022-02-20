import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './style.css';

export default function Menu() {
  return (
    <div className="menu">
      <a
        className="social"
        href="https://www.linkedin.com/in/icaroregisalmeida/"
      >
        <AiFillLinkedin size={24} color="#fff" />
      </a>

      <a className="social" href="https://github.com/icaroregis">
        <GoMarkGithub size={24} color="#fff" />
      </a>

      <Link className="menu-item" to="/links">
        Meus Links
      </Link>
    </div>
  );
}
