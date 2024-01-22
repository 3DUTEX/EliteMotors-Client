// Imports Libs
import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

// Imports Modules
import { CustomButton } from '../../../../../../styles';
import { VehicleContainer } from './styled';

export default function Vehicle({ name, brand, price, images }) {
  const USDollar = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <VehicleContainer>
      {images[0] ? (
        <img src={images[0].url} alt="imagem de um veículo" className="image-vehicle" />
      ) : (
        <FaExclamationCircle className="image-vehicle" />
      )}
      <ul>
        <li>{name}</li>
        <li>{brand}</li>
        <li>
          <span className="price-vehicle">{USDollar.format(price)}</span>
        </li>
      </ul>
      <div className="see-more-btn">
        <CustomButton>Ver Mais</CustomButton>
      </div>
    </VehicleContainer>
  );
}
