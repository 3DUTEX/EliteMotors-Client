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
    display: flex;
    justify-content: center;
    gap: 0 30px;
  }

  @media (max-width: 720px){
    .itens{
      flex-direction: column;
      gap: 50px 0;
    }
  }
`;
