import styled from 'styled-components';

import { FONT_DEFAULT } from '../../styles/default';

export const PresentationContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 30px;

  max-width: 80%;
  margin: 0 auto 0 auto;
  padding: 30px;

  /* box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 8px; */

  font-family: ${FONT_DEFAULT};

  .text-container{
    margin-top: 75px;
  }

  .text-container h1{
    font-size: 40px;
  }

  .image-container img{
    width: 500px;
    border-radius: 8px;
  }

  @media (max-width: 720px){
    flex-direction: column;
    gap: 30px 0;

    .image-container img{
      width: 350px;
      margin: 30px;
    }
  }
`;
