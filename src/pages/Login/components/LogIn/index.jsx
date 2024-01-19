// Imports Libs
import gsap from 'gsap';
import React, { useLayoutEffect } from 'react';

// Imports Modules
import CustomInput from '../../../../components/CustomInput';
import { CustomButton } from '../../../../styles';
import { LogInContainer } from './styled';

export default function LogIn() {
  useLayoutEffect(() => {
    gsap.fromTo(
      '.form-logIn',
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
    <LogInContainer>
      <form className="form-logIn">
        <h2>Logar</h2>
        <CustomInput label="Email" type="text" />
        <CustomInput label="Senha" type="text" />
        <CustomButton>Logar</CustomButton>
      </form>
    </LogInContainer>
  );
}
