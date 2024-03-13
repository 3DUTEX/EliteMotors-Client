import styled from 'styled-components';
import { FONT_DEFAULT } from '../../styles/default';

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  font-family: ${FONT_DEFAULT};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;

  width: 90%;
  margin: 0 auto;
  padding: 90px 0 0 0;

  .sub-title {
    font-size: 30px;
  }

  .list-reservations {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    overflow-y: auto;
    max-height: 70vh;
  }
`;
