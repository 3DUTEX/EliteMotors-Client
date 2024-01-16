// Imports Libs
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Imports Modules
import { SliderPresentation } from './styled';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function PresentationSlider() {
  return (
    <SliderPresentation>
      <Swiper
        slidesPerView={1}
        spaceBetween={300}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
        }}
        className="swiper-container"
      >
        <SwiperSlide className="swiper-item">
          <img src="https://img.freepik.com/fotos-premium/foto-de-um-audi-sline-preto-dirigindo-jogue-a-chuva-a-noite_935552-1601.jpg" alt="imagem de um carro" />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <img src="https://img.freepik.com/fotos-premium/2021-a-blue-audi-rs3-sedan-guarnicao-preta-turbos-duplos-saindo-do-capo-do-carro-vista-frontal_935552-1491.jpg" alt="imagem de um carro" />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <img src="https://img.freepik.com/fotos-premium/foto-de-um-audi-sline-preto-dirigindo-jogue-a-chuva-a-noite_935552-1607.jpg" alt="imagem de um carro" />
        </SwiperSlide>
      </Swiper>
    </SliderPresentation>
  );
}
