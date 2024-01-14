// Imports Libs
import React from 'react';

// Imports Modules
import NavBar from '../../components/NavBar';
import { PresentationContainer } from './styled';

export default function Home() {
  return (
    <>
      <NavBar />
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
    </>

  );
}
