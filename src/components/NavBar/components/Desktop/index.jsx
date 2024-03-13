// Imports Libs
import React from 'react';
import { FaSignInAlt, FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// Imports Modules
import * as authActions from '../../../../store/modules/auth/actions';
import { DesktopContainer, LogoContainer } from './styled';

export default function Desktop() {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const dispatch = useDispatch();

  function loggout() {
    dispatch(authActions.loginFailure());
    toast.success('Loggout efetuado com sucesso');
  }

  return (
    <DesktopContainer>
      <LogoContainer>
        <h2 className="logo-title">ELITE MOTORS</h2>
      </LogoContainer>
      <div className="options">
        <ul>
          <Link to="/">
            <li className="option">Home</li>
          </Link>
          <Link to="/vehicles/all">
            <li className="option">Veiculos</li>
          </Link>
          {isLoggedIn && (
            <Link to="/reservations">
              <li className="option">Minhas Reservas</li>
            </Link>
          )}
        </ul>
      </div>
      {isLoggedIn ? (
        <div className="login-container" onClick={loggout}>
          <p>Sair</p>
          <FaSignInAlt size={30} />
        </div>
      ) : (
        <Link to="/login" className="login-container">
          <p>Entrar</p>
          <FaUserCircle size={40} />
        </Link>
      )}
    </DesktopContainer>
  );
}
