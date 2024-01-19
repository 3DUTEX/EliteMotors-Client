import styled from 'styled-components';

import { mixinFlex } from '../../styles/mixins';

function isBlocked() {
  return `
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100vh;

    background: rgba(0,0,0,0.3);
  `;
}

export const LoadingDiv = styled.div`
  ${mixinFlex('row', 'center', 'center')}
  ${({ isBlock }) => (isBlock && isBlocked)}

  .loading{
    width: 45px;
    height: 45px;
    border: 10px solid #000;
    border-top-color: transparent;
    border-radius: 50%;
    animation: loading 650ms linear infinite ;
  }

  @keyframes loading{
    to{
      transform: rotate(360deg);
    }
  }
`;
