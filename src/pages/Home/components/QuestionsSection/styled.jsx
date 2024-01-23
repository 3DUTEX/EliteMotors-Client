import styled from 'styled-components';
import { FONT_DEFAULT } from '../../../../styles/default';

export const SectionQuestions = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px 0;

  width: 100%;
  min-height: 100vh;
  padding: 100px 0;

  font-family: ${FONT_DEFAULT};
  background: #000;

  .title {
    width: 80%;
    margin: 0 auto;

    color: #fff;
    font-size: 50px;
  }
`;

export const QuestionsContainer = styled.div`
  width: 80%;
  max-height: 500px;
  margin: 0 auto;
  padding: 10px;

  background: #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;
