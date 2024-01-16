import styled from 'styled-components';

import { FONT_DEFAULT } from '../../../../styles/default';

export const SectionPresentation = styled.section`
    // body da seção de apresentação
    display: flex;
    align-items: center;
    flex-direction: center;
    min-height: 100vh;
    background-attachment: fixed;
    background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.7)),url('https://c.wallhere.com/photos/72/4f/city_classic_car_wheel_photography_coast_amazing_nice-886932.jpg!d');
`;

export const PresentationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 30px;

  max-width: 80%;
  margin: 100px auto 100px auto;
  padding: 30px;

  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 8px;

  font-family: ${FONT_DEFAULT};
  overflow-x: hidden;
  background: #fff;

  .text-container{
    transform: translateY(100px);
    opacity: 0;
    width: 50%;
    font-size: 20px;
  }

  .text-container h1{
    font-size: 40px;
  }

  /* .image-container{
    transform: translateX(500px);
    opacity: 0;
    width: 50%;
  }

  .image-container img{
    width:100%;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  } */

  @media (max-width: 720px){
    flex-direction: column;
    gap: 30px 0;

    margin: 100px auto;
    max-width: 95%;

    .text-container{
      width: 100%;
    }

    .image-container{
      width: 100%;
    }

    .image-container img{
      width: 100%;
      margin: 0;
    }
  }
`;
