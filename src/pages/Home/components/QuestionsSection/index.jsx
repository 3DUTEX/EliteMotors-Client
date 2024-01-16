// Imports Libs
import React from 'react';

// Imports Modules
import Question from './components/Question';
import { QuestionsContainer, SectionQuestions } from './styled';

export default function QuestionsSection() {
  return (
    <SectionQuestions>
      <h2 className="title">Dúvidas</h2>
      <QuestionsContainer>
        <Question id="1" />
        <Question id="2" />
        <Question id="3" />
        <Question id="4" />
      </QuestionsContainer>
    </SectionQuestions>
  );
}
