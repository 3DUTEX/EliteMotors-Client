import styled from 'styled-components';

import { FONT_DEFAULT } from '../../../../styles/default';

const DesktopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${FONT_DEFAULT};
  width: 100%;
  padding: 20px 40px;

  .options {
    // options config
  }

  .options ul{
    display: flex;
    gap: 0 15px;
  }
`;

export default DesktopContainer;
