// Imports Libs
import React, { useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';

// Imports Modules
import { Menu, MobileContainer } from './styled';

export default function Mobile() {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  function showMenu() {
    if (menu) {
      setShow(false);
      return setTimeout(() => {
        setMenu(false);
      }, 50);
    }
    if (!menu) {
      setMenu(true);
      return setTimeout(() => {
        setShow(true);
      }, 50);
    }
  }

  return (
    <>
      <MobileContainer>
        <h2>ELITE MOTORS</h2>
        <FaBars size={30} onClick={showMenu} cursor="pointer" />
      </MobileContainer>
      {menu && (
      <Menu show={show}>
        <ul>
          <li>
            <FaUserCircle size={100} />
          </li>
          <li>option1</li>
          <li>option2</li>
          <li>option3</li>
        </ul>
      </Menu>
      )}
    </>

  );
}
