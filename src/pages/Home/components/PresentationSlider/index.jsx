/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  Autoplay,
  EffectCreative,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Imports Swiper
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';

import './style.css';

export default function PresentationSlider() {
  return (
    <Swiper
      grabCursor
      autoplay={{
        delay: 2000,
      }}
      effect="creative"
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      modules={[EffectCreative, Autoplay]}
      className="swiper-container"
    >
      <SwiperSlide>
        <img src="https://img.freepik.com/fotos-premium/2021-a-blue-audi-rs3-sedan-guarnicao-preta-turbos-duplos-saindo-do-capo-do-carro-vista-frontal_935552-1487.jpg" className="presentation-slide-item" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://img.freepik.com/fotos-premium/clean-slick-realista-audi-rs3-da-configuracao-noturna-frontal_935552-1591.jpg" className="presentation-slide-item" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://img.freepik.com/fotos-premium/2021-blue-audi-rs3-sedan-turbos-gemelos-detalles-negros-que-sobresalen-capo-vista-lateral-frontal-automovil_935552-1493.jpg" className="presentation-slide-item" />
      </SwiperSlide>
    </Swiper>
  );
}
