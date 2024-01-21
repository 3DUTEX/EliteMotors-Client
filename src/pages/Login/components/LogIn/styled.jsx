import styled from 'styled-components';

import { mixinFlex } from '../../../../styles/mixins';

export const LogInContainer = styled.div`
  ${mixinFlex('column', 'center', 'center')}

  width: 100%;
  height: calc(70vh - 75px);

  form {
    ${mixinFlex('column', 'inital', 'center', '15px 0')}
    padding: 10px;
    width: 50%;
    overflow-y: auto;
  }

  @media (max-width: 720px) {
    form {
      width: 80%;
    }
  }
`;
