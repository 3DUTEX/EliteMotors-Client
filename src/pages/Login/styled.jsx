import styled from 'styled-components';

import { FONT_DEFAULT, PRIMARY_COLOR } from '../../styles/default';
import { mixinFlex } from '../../styles/mixins';

export const LoginSection = styled.section`
  ${mixinFlex('row', 'center', 'center')}
  width: 100%;
  height: 100vh;

  font-family: ${FONT_DEFAULT};

  background: #f1f1f1;

  .main-container {
    ${mixinFlex('column', 'inital', 'inital')}
    width: 50%;
    height: 70vh;

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
      border: 1px solid rgba(0, 0, 0, 0.1);
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
      pointer-events: none;
    }

    .radius-left {
      border-radius: 8px 0 0 0;
    }

    .radius-right {
      border-radius: 0 8px 0 0;
    }
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #fff;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${PRIMARY_COLOR};
    border-radius: 8px;
  }

  @media (max-width: 1220px) {
    .main-container {
      width: 70%;
    }
  }

  @media (max-width: 720px) {
    .main-container {
      width: 90%;
    }
  }
`;
