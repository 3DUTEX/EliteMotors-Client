import styled from 'styled-components';

import { FONT_DEFAULT } from '../../../../styles/default';

export const StepsContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 30px;
  margin-top: 100px;

  font-family: ${FONT_DEFAULT};
  background: #000;

  .main-container{
    max-width: 90%;
    margin: 0 auto;
  }

  .steps-title{
    font-size: 40px;
    padding: 50px 0;
    color: #fff;
    text-transform: uppercase;
  }

  .itens{
    opacity: 0;
    transform: translateY(200px);
    display: flex;
    justify-content: center;
    gap: 0 30px;
  }

  // Tablet
  @media (max-width: 920px){
    .itens{
      gap: 30px;
      flex-wrap: wrap;
    }
  }

    // Mobile
    @media (max-width: 720px){
    .itens{
      flex-direction: column;
      gap: 50px 0;
    }
  }
`;
