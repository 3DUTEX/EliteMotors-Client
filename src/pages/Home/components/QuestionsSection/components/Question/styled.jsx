import styled from 'styled-components';

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px 0;
  padding: 20px;

  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .question-title {
    display: flex;
    justify-content: space-between;

    h2 {
      width: 70%;
    }
  }

  .question-desc {
    height: 0;
    opacity: 0;
    overflow-y: auto;
  }

  .arrow {
    transform: rotate(180deg);
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #fff;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #000;
  }

  @media (max-width: 720px) {
    .question-title {
      h2 {
        font-size: 20px;
      }
    }

    .question-desc {
      p {
        font-size: 20px;
      }
    }
  }
`;
