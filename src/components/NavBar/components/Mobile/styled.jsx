import styled from 'styled-components';

import { FONT_DEFAULT, SECUNDARY_COLOR } from '../../../../styles/default';

export const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 3;
  position: fixed;
  width: 100%;
  padding: 30px;
  height: 75px;

  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background: #fff;
  font-family: ${FONT_DEFAULT};

  .option:hover{
    transition: 150ms ease-in-out;
    color: ${SECUNDARY_COLOR};
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 2;
  top: 75px;
  left: ${({ show }) => (show ? '0%' : '-100%')};
  bottom: 0;
  width:80%;
  position: fixed;
  height: calc(100vh - 75px);

  font-family: ${FONT_DEFAULT};
  background: rgba(255,255,255,1);
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  transition: 200ms ease;

  ul{
    text-align: center;
    width: 100%;
    overflow-y: auto;
  }

  li{
    font-size: 20px;
    padding: 25px 0;
  }

  .option{
    text-transform: uppercase;
  }

  .option:hover{
    transition: 200ms ease;
    background: ${SECUNDARY_COLOR};
    color: #fff;
    cursor: pointer;
  }
`;
