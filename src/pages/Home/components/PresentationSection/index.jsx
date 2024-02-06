// Imports Libs
import { gsap } from 'gsap';
import React, { useLayoutEffect } from 'react';

// Imports Modules
import PresentationSlider from './PresentationSlider';
import { PresentationContainer, SectionPresentation } from './styled';

export default function PresentationSection() {
  // Animations
  useLayoutEffect(() => {
    gsap.to('.text-container', {
      opacity: 1,
      y: 0,
    });
    gsap.to('.image-container', {
      opacity: 1,
      x: 0,
      ease: 'back.inOut',
    });

    return () => {
      gsap.killTweensOf('.text-container');
      gsap.killTweensOf('.image-container');
    };
  }, []);

  return (
    <SectionPresentation>
      <PresentationContainer>
        <div className="text-container">
          <h1>Obtenha Já</h1>
          <p>
            Surpreenda-se com a potência dos motores de última geração,
            aprimorados para proporcionar um desempenho superior e uma
            eficiência incrível. A tecnologia de ponta integrada em cada
            veículo oferece conectividade intuitiva, sistemas avançados de
            assistência ao condutor e entretenimento de alta qualidade.
          </p>
        </div>
        {/* <div className="image-container">
          <img src="https://img.freepik.com/fotos-premium/foto-de-um-audi-sline-preto-dirigindo-jogue-a-chuva-a-noite_935552-1601.jpg" alt="Imagem de um carro" />
        </div> */}
        <PresentationSlider />
      </PresentationContainer>
    </SectionPresentation>
  );
}
