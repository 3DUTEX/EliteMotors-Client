import styled from 'styled-components';

export const SliderPresentation = styled.div`
  width: 50%;


  .swiper-container{
    padding: 30px;
    width: 100%;
    height:40vw;
  }

  .swiper-item img{
    width: 100%;
    border-radius: 8px;
  }

  @media(max-width: 720px){
    width: 100%;

    .swiper-container{
    height:85vw;
  }
  }
`;
