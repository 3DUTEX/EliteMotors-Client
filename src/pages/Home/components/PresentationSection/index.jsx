// Imports Libs
import { gsap } from 'gsap';
import React, { useLayoutEffect } from 'react';

// Imports Modules
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur atque nemo dignissimos rem necessitatibus,
            minus aspernatur molestiae, numquam provident dolores debitis deserunt veniam?
            Aperiam, perferendis? Modi omnis natus facere soluta?
          </p>
        </div>
        <div className="image-container">
          <img src="https://img.freepik.com/fotos-premium/foto-de-um-audi-sline-preto-dirigindo-jogue-a-chuva-a-noite_935552-1601.jpg" alt="Imagem de um carro" />
        </div>
      </PresentationContainer>
    </SectionPresentation>
  );
}
