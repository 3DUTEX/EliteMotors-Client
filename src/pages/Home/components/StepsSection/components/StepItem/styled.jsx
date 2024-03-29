import styled from 'styled-components';

import { FONT_DEFAULT } from '../../../../../../styles/default';

export const StepItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px 0;

  width: 350px;
  height: 300px;

  padding: 30px;

  color: #000;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  font-family: ${FONT_DEFAULT};
  transition: 250ms ease;
  cursor: default;

  .icon{
    font-size: 75px;
  }

  h2{
    height: 50px;
  }

  p{
    padding: 10px;
    font-size: 20px;
    height: 100px;
    overflow-y: auto;
  }

  &:hover{
    transform: translateY(-30px);
  }

  ::-webkit-scrollbar-track{
    background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
  }

  // Tablet
  @media (max-width: 920px){
    .itens{
      gap: 30px;
      flex-wrap: wrap;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  // Mobile
  @media (max-width: 720px){
    width: 100%;
    height: 400px;

  }
`;
