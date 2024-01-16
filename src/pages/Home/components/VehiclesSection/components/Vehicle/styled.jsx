import styled from 'styled-components';

import { FONT_DEFAULT } from '../../../../../../styles/default';

export const VehicleContainer = styled.div`
  width: 250px;
  height: 400px;

  background: #fff;
  font-family: ${FONT_DEFAULT};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

  img{
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .info-container{
    display: flex;
    flex-direction: column;
    gap: 10px 0;

    width: 100%;
    padding: 10px;
  }

  .exclamation {
    width: 100%;
    height: 250px;
    text-align: center;
    padding: 30px;
  }


  @media (max-width: 720px){
    width: 100%;
  }
`;
