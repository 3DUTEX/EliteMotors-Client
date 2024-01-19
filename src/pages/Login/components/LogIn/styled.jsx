import styled from 'styled-components';

import { mixinFlex } from '../../../../styles/mixins';

export const LogInContainer = styled.div`
  ${mixinFlex('column', 'center', 'center')}

  width: 100%;
  height: calc(70vh - 75px);
  overflow-y: auto;

  form {
    ${mixinFlex('column', 'center', 'center', '15px 0')}
    width: 50%;
  }

  @media (max-width: 720px) {
    form {
      width: 80%;
    }
  }
`;
