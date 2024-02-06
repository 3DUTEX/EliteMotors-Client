// Imports Libs
import React from 'react';

// Imports Modules
import Question from './components/Question';
import { QuestionsContainer, SectionQuestions } from './styled';

export default function QuestionsSection() {
  return (
    <SectionQuestions>
      <h2 className="title">Dúvidas Frequentes</h2>
      <QuestionsContainer>
        <Question
          id="1"
          title="Como funciona o processo de manutenção e serviço pós-venda na concessionária?"
          desc="Nossa concessionária preza pela excelência no atendimento pós-venda. Após a compra,
          oferecemos serviços de manutenção de alta qualidade, com técnicos especializados e peças genuínas.
          Além disso, disponibilizamos programas de manutenção preventiva para garantir a durabilidade
           e o desempenho ideal do seu veículo ao longo do tempo."
        />
        <Question
          id="2"
          title="Como funciona o processo de reserva de veículos na plataforma?"
          desc="Nosso sistema de reserva é simples e eficiente. Basta acessar a plataforma,
          selecionar as datas desejadas e escolher entre uma variedade de modelos disponíveis.
          A reserva é confirmada instantaneamente, proporcionando aos usuários uma experiência
          de reserva de carros rápida e sem complicações."
        />
        <Question
          id="3"
          title="A segurança é boa?"
          desc="A segurança dos nossos clientes é primordial.
          Realizamos manutenção preventiva regular em toda a nossa frota,
          seguindo rigorosos padrões de segurança.
          Isso garante que os veículos estejam sempre em ótimas condições,
          proporcionando tranquilidade aos usuários durante suas viagens."
        />
      </QuestionsContainer>
    </SectionQuestions>
  );
}
