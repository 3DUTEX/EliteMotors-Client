import styled from 'styled-components';

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px 0;
  padding: 20px;

  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  overflow: hidden;

  .question-title{
    display: flex;
    justify-content: space-between;
  }

  .question-desc{
    height: 0;
    opacity: 0;
    overflow-y: auto;
  }
`;