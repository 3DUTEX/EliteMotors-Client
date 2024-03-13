import React from 'react';

import { FaExclamation } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../styles';
import { Container } from './styled';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="not-found">
        <h1>404</h1>
        <FaExclamation className="exclamation" />
      </div>
      <h3 className="desc">Página não encontrada!</h3>
      <CustomButton onClick={() => navigate('/')}>Voltar para home</CustomButton>
    </Container>
  );
}
