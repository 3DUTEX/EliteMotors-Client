// Imports Libs
import gsap from 'gsap';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Imports Modules
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import CustomInput from '../../../../components/CustomInput';
import * as authActions from '../../../../store/modules/auth/actions';
import { CustomButton } from '../../../../styles';
import { LogInContainer } from './styled';

export default function LogIn() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    if (isLoggedIn) navigate('/', { replace: true });
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

  return (
    <LogInContainer className="login-container">
      <h2>Logar</h2>
      <form className="form-logIn" onSubmit={handleSubmit} noValidate>
        <CustomInput reference={emailRef} label="Email" />
        <CustomInput reference={passwordRef} label="Senha" />
        <CustomButton>Logar</CustomButton>
      </form>
    </LogInContainer>
  );
}
