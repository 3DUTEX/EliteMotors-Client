import styled from 'styled-components';

import { FONT_DEFAULT, SECUNDARY_COLOR } from '../../../../styles/default';

export const DesktopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${FONT_DEFAULT};
  font-size: 18px;
  width: 100%;
  max-height: 75px;
  padding: 20px 40px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

  .options {
    // options config
  }

  .options ul{
    display: flex;
    gap: 0 30px;
    overflow-x: auto;
  }

  .logo-title{
    color: ${SECUNDARY_COLOR};
  }

  .text{
    text-transform: uppercase;
  }

  .text:hover{
    transition: color 150ms ease-in-out;
    color: ${SECUNDARY_COLOR};
    cursor: pointer;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s ease;

`;
