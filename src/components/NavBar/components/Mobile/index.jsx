// Imports Libs
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// Imports Modules
import * as authActions from '../../../../store/modules/auth/actions';
import { Menu, MobileContainer } from './styled';

export default function Mobile() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  function loggout() {
    dispatch(authActions.loginFailure());
    toast.success('Loggout efetuado com sucesso');
  }

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
        <h2 className="logo-title">ELITE MOTORS</h2>
        <FaBars size={30} onClick={showMenu} className="option" />
      </MobileContainer>
      {menu && (
        <Menu show={show}>
          <ul>
            {isLoggedIn ? (
              <li className="option" onClick={loggout}>
                Sair
              </li>
            ) : (
              <Link to="/login">
                <li className="option">Entrar</li>
              </Link>
            )}
            <Link to="/vehicles/all">
              <li className="option">Veiculos</li>
            </Link>
            <li className="option">Contato</li>
            <li className="option">Locais</li>
          </ul>
        </Menu>
      )}
    </>
  );
}
