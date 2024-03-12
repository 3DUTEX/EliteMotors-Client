// Imports Libs
import gsap from 'gsap';
import PropTypes from 'prop-types';
import React, { useLayoutEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

// Imports Modules;
import CustomInput from '../../../../components/CustomInput';
import axios from '../../../../services/axios';
import * as authActions from '../../../../store/modules/auth/actions';
import { CustomButton } from '../../../../styles';
import { RegisterContainer } from './styled';

export default function Register({ changeOption }) {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      '.register-container',
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

  async function handleSubmit(e) {
    dispatch(authActions.changeLoading({ isLoading: true }));
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (name.length < 3 || name.length > 30) {
      dispatch(authActions.changeLoading({ isLoading: false }));
      return toast.error('O nome deve conter entre 3 a 30 caracteres');
    }

    if (!isEmail(email)) {
      dispatch(authActions.changeLoading({ isLoading: false }));
      return toast.error('Email inválido');
    }

    if (password.length === 0 || password.length > 60) {
      dispatch(authActions.changeLoading({ isLoading: false }));
      return toast.error('A senha não pode estar vazia e deve conter no máximo 60 caracteres');
    }

    try {
      const { data, status } = await axios.post('/users', { name, email, password });

      if (status === 201) {
        toast.success('Conta criada com sucesso');
        changeOption();
      }
    } catch (err) {
      const { data } = err.response;
      if (data.error) {
        const { message } = data.error;
        toast.error(message);
      }
    } finally {
      dispatch(authActions.changeLoading({ isLoading: false }));
    }
    return null;
  }

  return (
    <RegisterContainer className="register-container">
      <h2>Registrar</h2>
      <form className="form-register" onSubmit={handleSubmit} noValidate>
        <CustomInput reference={nameRef} label="Nome" />
        <CustomInput reference={emailRef} label="Email" />
        <CustomInput reference={passwordRef} label="Senha" type="password" />
        <CustomButton>Registrar</CustomButton>
      </form>
    </RegisterContainer>
  );
}

Register.propTypes = {
  changeOption: PropTypes.func.isRequired,
};
