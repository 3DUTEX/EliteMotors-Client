import styled from 'styled-components';
import { mixinFlex } from '../../styles/mixins';

import { PRIMARY_COLOR } from '../../styles/default';

function isActive() {
  return `
  color: ${PRIMARY_COLOR};
  transform: translateY(-25px);
  `;
}

export const InputContainer = styled.div`
  ${mixinFlex('column-reverse', 'center', 'initial')}
  width: 100%;
  position: relative;

  input {
    width: 100%;
    padding: 10px;

    font-size: 25px;
    border-radius: 4px;
    border: none;
    outline: 1px solid #ccc;
    transition: 250ms ease;

    &:focus {
      outline: 1px solid ${PRIMARY_COLOR};

      & + label {
        font-size: 18px;
        ${isActive}
      }
    }

    &:valid {
      color: ${PRIMARY_COLOR};
      & + label {
        font-size: 18px;
        ${isActive}
      }
    }
  }

  label {
    position: absolute;
    left: 5%;

    font-size: 22px;
    background: #fff;
    transition: 250ms ease;
    pointer-events: none;
  }
`;
