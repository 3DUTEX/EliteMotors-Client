import styled from 'styled-components';

import { FONT_DEFAULT, PRIMARY_COLOR } from '../../../../styles/default';

export const DesktopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 2;
  position: fixed;
  font-family: ${FONT_DEFAULT};
  font-size: 18px;
  width: 100%;
  max-height: 75px;
  padding: 20px 40px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

  background: #fff;

  .options {
    // options config
  }

  .options ul{
    display: flex;
    gap: 0 30px;
    overflow-x: auto;
  }

  .logo-title{
    color: ${PRIMARY_COLOR};
  }

  .option{
    text-transform: uppercase;
  }

  .option:hover{
    transition: color 150ms ease-in-out;
    color: ${PRIMARY_COLOR};
    cursor: pointer;
  }

  .login-container {
    display: flex;
    align-items: center;
    gap: 0 10px;
  }

  .login-container:hover{
    transition: 250ms ease;
    color: ${PRIMARY_COLOR};
    cursor: pointer;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s ease;
`;
