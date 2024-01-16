import styled from 'styled-components';
import { FONT_DEFAULT } from '../../../../styles/default';

export const SectionVehicle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px 0;

  width: 100%;
  min-height: 90vh;
  padding: 30px;

  font-family: ${FONT_DEFAULT};
  background: #f1f1f1;

  h2{
    width: 80%;
    margin: 0 auto;
    font-size: 40px;
  }

  .btn-see-all{
    margin: 0 auto;
    width: 80%;
  }

  @media (max-width: 720px){
    padding: 20px;

    h2{
      width: 95%;
    }

    .btn-see-all{
      width: 95%;
    }
  }
`;

export const VehiclesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 10px;

  width: 80%;
  margin: 0 auto;

  @media (max-width: 1280px){
    flex-wrap: wrap;
    gap: 30px 0;
  }

  @media (max-width: 720px){
    width: 95%;
  }
`;
