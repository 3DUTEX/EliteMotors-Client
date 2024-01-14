import styled from 'styled-components';

import { FONT_DEFAULT } from '../../../../styles/default';

export const DesktopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${FONT_DEFAULT};
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
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 100px;
  }
`;
