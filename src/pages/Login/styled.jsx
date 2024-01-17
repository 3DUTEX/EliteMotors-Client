import styled from 'styled-components';

import { FONT_DEFAULT, PRIMARY_COLOR } from '../../styles/default';

const mixinFlex = (flexD = 'row', justifyC = 'initial', alignI = 'initial', gap = '0') => `
    display: flex;
    flex-direction: ${flexD};
    justify-content: ${justifyC};
    align-items: ${alignI};
  `;

export const LoginSection = styled.section`
  ${mixinFlex('row', 'center', 'center')}
  width: 100%;
  height: 100vh;

  font-family: ${FONT_DEFAULT};

  background: #f1f1f1;

  .main-container {
    ${mixinFlex('column', 'inital', 'inital')}
    width: 50%;
    min-height: 70vh;

    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    .btn-option {
      width: 50%;
      height: 75px;
      margin: 0;
      padding: 0;

      font-family: ${FONT_DEFAULT};
      font-size: 20px;
      border: none;
      cursor: pointer;
      transition: 300ms ease;
    }

    .not-selected {
      background: #f4f4f4;
      color: #bebebe;

      &:hover {
        border: 1px solid ${PRIMARY_COLOR};
        color: ${PRIMARY_COLOR};
      }
    }

    .selected {
      color: ${PRIMARY_COLOR};
      background: #fff;
    }

    .radius-left {
      border-radius: 8px 0 0 0;
    }

    .radius-right {
      border-radius: 0 8px 0 0;
    }
  }
`;
