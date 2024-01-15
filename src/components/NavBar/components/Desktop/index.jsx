// Imports Libs
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

// Imports Modules
import { DesktopContainer, LogoContainer } from './styled';

export default function Desktop() {
  return (
    <DesktopContainer>
      <LogoContainer>
        <h2 className="logo-title">ELITE MOTORS</h2>
      </LogoContainer>
      <div className="options">
        <ul>
          <li className="option">Home</li>
          <li className="option">Contato</li>
          <li className="option">Locais</li>
          <li className="option">option4</li>
        </ul>
      </div>
      <div className="login-container">
        <p>Entrar</p>
        <FaUserCircle size={40} />
      </div>
    </DesktopContainer>
  );
}
