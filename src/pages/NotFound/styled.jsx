import styled from 'styled-components';

import { FONT_DEFAULT, PRIMARY_COLOR } from '../../styles/default';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 100vh;
  padding: 10px;
  margin: 0 auto;

  border-radius: 8px;
  font-family: ${FONT_DEFAULT};

  .not-found {
    font-size: 80px;
    display: flex;
    align-items: center;

    .exclamation {
      font-size: 150px;
      color: ${PRIMARY_COLOR};
    }
  }

  .desc {
    font-size: 30px;
    padding-bottom: 40px;
  }
`;
