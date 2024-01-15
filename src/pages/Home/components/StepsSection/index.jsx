import React from 'react';
import {
  FaCheck, FaEye, FaFlag, FaMoneyCheckAlt,
} from 'react-icons/fa';
import StepItem from './components/StepItem';
import { StepsContainer } from './styled';

const stepsItens = [
  {
    id: 1,
    Icon: FaEye,
    title: 'Escolha',
    desc: 'Temos vários automóveis para você escolher',
  },
  {
    id: 2,
    Icon: FaCheck,
    title: 'Reserve',
    desc: 'Faça uma reserva e visite a loja',
  },
  {
    id: 3,
    Icon: FaFlag,
    title: 'Teste',
    desc: 'Faça um teste-drive e sinta o conforto antes de comprar',
  },
  {
    id: 4,
    Icon: FaMoneyCheckAlt,
    title: 'Compre',
    desc: 'Saia da loja com o automóvel e aproveite o dia',
  },
];

export default function StepsSection() {
  return (
    <StepsContainer>
      <div className="main-container">
        <h2 className="steps-title">Passos para adquirir seu veículo</h2>
        <div className="itens">
          {stepsItens.map((item) => (
            <StepItem
              key={item.id}
              Icon={item.Icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </StepsContainer>
  );
}
