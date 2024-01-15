import React from 'react';
import {
  FaCheck, FaEye, FaFlag, FaMoneyCheckAlt,
} from 'react-icons/fa';
import StepItem from './components/StepItem';
import { StepsContainer } from './styled';

export default function StepsSection() {
  return (
    <StepsContainer>
      <div className="main-container">
        <h2 className="steps-title">Passos para adquirir seu veículo</h2>
        <div className="itens">
          <StepItem
            Icon={FaEye}
            title="Escolha"
            desc="Temos vários automóveis para você escolher"
          />
          <StepItem
            Icon={FaCheck}
            title="Reserve"
            desc="Faça uma reserva e visite a loja"
          />
          <StepItem
            Icon={FaFlag}
            title="Teste"
            desc="Faça um teste-drive e sinta o conforto antes de comprar"
          />
          <StepItem
            Icon={FaMoneyCheckAlt}
            title="Compre"
            desc="Saia com o automóvel e aproveite o dia"
          />
        </div>
      </div>
    </StepsContainer>
  );
}
