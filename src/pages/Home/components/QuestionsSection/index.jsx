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
          title="questão1"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Sint vero excepturi ullam corporis accusamus ipsam corrupti repudiandae soluta
          cumque cupiditate minus laudantium pariatur ipsa ut saepe est, temporibus, repellendus eligendi!"
        />
        <Question
          id="2"
          title="questão2"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Sint vero excepturi ullam corporis accusamus ipsam corrupti repudiandae soluta
          cumque cupiditate minus laudantium pariatur ipsa ut saepe est, temporibus, repellendus eligendi!"
        />
        <Question
          id="3"
          title="questão3"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Sint vero excepturi ullam corporis accusamus ipsam corrupti repudiandae soluta
          cumque cupiditate minus laudantium pariatur ipsa ut saepe est, temporibus, repellendus eligendi!"
        />
      </QuestionsContainer>
    </SectionQuestions>
  );
}
