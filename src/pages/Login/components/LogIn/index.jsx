/* eslint-disable consistent-return */
// Imports Libs
import { GoogleLogin } from '@react-oauth/google';
import gsap from 'gsap';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';

// Imports Modules
import CustomInput from '../../../../components/CustomInput';
import * as authActions from '../../../../store/modules/auth/actions';
import { CustomButton } from '../../../../styles';
import { LogInContainer } from './styled';

export default function LogIn() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    if (isLoggedIn) {
      if (!location.state) return navigate('/', { replace: true }); // se não tiver caminho anterior
      if (location.state.prevPath) return navigate(location.state.prevPath, { replace: true });
    }
  }, [isLoggedIn]);

  // Animação ao carregar componente
  useLayoutEffect(() => {
    gsap.fromTo(
      '.login-container',
      {
        y: '50px',
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        // eslint-disable-next-line comma-dangle
      }
    );
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!isEmail(email)) return toast.error('Email inválido');
    if (password.length === 0 || password.length > 60) return toast.error('Senha inválida');

    return dispatch(authActions.loginRequest({ email, password }));
  }

  function handleSuccessGoogle(credentialResponse) {
    dispatch(authActions.loginRequest({ credential: credentialResponse.credential }));
  }

  return (
    <LogInContainer className="login-container">
      <h2>Logar</h2>
      <form className="form-logIn" onSubmit={handleSubmit} noValidate>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            handleSuccessGoogle(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        <CustomInput reference={emailRef} label="Email" />
        <CustomInput reference={passwordRef} label="Senha" type="password" />
        <CustomButton>Logar</CustomButton>
      </form>
    </LogInContainer>
  );
}
