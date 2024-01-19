// Imports Libs
import gsap from 'gsap';
import React, { useLayoutEffect } from 'react';

// Imports Modules
import CustomInput from '../../../../components/CustomInput';
import { CustomButton } from '../../../../styles';
import { RegisterContainer } from './styled';

export default function Register() {
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

  return (
    <RegisterContainer>
      <form className="form-register">
        <h2>Registrar</h2>
        <CustomInput label="Nome" type="text" />
        <CustomInput label="Email" type="text" />
        <CustomInput label="Senha" type="text" />
        <CustomButton>Registrar</CustomButton>
      </form>
    </RegisterContainer>
  );
}
