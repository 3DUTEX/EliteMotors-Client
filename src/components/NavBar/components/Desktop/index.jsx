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
          <li className="text">Home</li>
          <li className="text">Contato</li>
          <li className="text">Locais</li>
          <li className="text">option4</li>
        </ul>
      </div>
      <FaUserCircle size={40} className="text" />
    </DesktopContainer>
  );
}
