// Imports Libs
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

// Imports Modules
import { DesktopContainer, LogoContainer } from './styled';

export default function Desktop() {
  return (
    <DesktopContainer>
      <LogoContainer>
        <h2>ELITE MOTORS</h2>
      </LogoContainer>
      <div className="options">
        <ul>
          <li>option1</li>
          <li>option2</li>
          <li>option3</li>
          <li>option4</li>
        </ul>
      </div>
      <FaUserCircle size={40} />
    </DesktopContainer>
  );
}
