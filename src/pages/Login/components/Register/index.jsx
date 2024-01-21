// Imports Libs
import gsap from 'gsap';
import PropTypes from 'prop-types';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

// Imports Modules;
import CustomInput from '../../../../components/CustomInput';
import Loading from '../../../../components/Loading';
import axios from '../../../../services/axios';
import { CustomButton } from '../../../../styles';
import { RegisterContainer } from './styled';

export default function Register({ changeOption }) {
  const [isLoading, setIsLoading] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      '.form-register',
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
    setIsLoading(true);
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (name.length < 3 || name.length > 30) {
      return toast.error('O nome deve conter entre 3 a 30 caracteres');
    }

    if (!isEmail(email)) return toast.error('Email inválido');

    if (password.length === 0 || password.length > 60) {
      return toast.error('A senha não pode estar vazia e deve conter no máximo 60 caracteres');
    }

    const { data, status } = await axios.post('/users', { name, email, password });

    setIsLoading(false);
    if (status === 201) {
      toast.success('Conta criada com sucesso');
      changeOption();
    }

    return null;
  }

  return (
    <RegisterContainer>
      {isLoading && <Loading blocked />}
      <form className="form-register" onSubmit={handleSubmit} noValidate>
        <h2>Registrar</h2>
        <CustomInput reference={nameRef} label="Nome" type="text" />
        <CustomInput reference={emailRef} label="Email" type="text" />
        <CustomInput reference={passwordRef} label="Senha" type="text" />
        <CustomButton>Registrar</CustomButton>
      </form>
    </RegisterContainer>
  );
}

Register.propTypes = {
  changeOption: PropTypes.func.isRequired,
};
