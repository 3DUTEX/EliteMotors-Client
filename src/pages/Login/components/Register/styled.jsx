import styled from 'styled-components';

import { mixinFlex } from '../../../../styles/mixins';

export const RegisterContainer = styled.div`
  ${mixinFlex('column', 'center', 'center')}

  margin: auto 0;
  width: 100%;
  height: calc(70vh - 75px);

  form {
    ${mixinFlex('column', 'inital', 'center', '15px 0')}
    padding: 10px;
    overflow-y: auto;
    width: 50%;
  }

  @media (max-width: 720px) {
    form {
      width: 80%;
    }
  }
`;
