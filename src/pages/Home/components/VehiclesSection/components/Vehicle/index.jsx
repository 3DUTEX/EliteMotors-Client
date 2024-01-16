/* eslint-disable react/jsx-no-bind */
import PropTypes from 'prop-types';
import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { CustomButton } from '../../../../../../styles';
import { VehicleContainer } from './styled';

export default function Vehicle({ vehicle }) {
  const navigate = useNavigate();

  function handleClickButton() {
    navigate(`/vehicles/${vehicle.id}`);
  }

  return (
    <VehicleContainer>
      {vehicle.images[0] ? (
        <img src={vehicle.images[0].url} alt="imagem de um carro" />
      ) : (
        <FaExclamationCircle className="exclamation" />
      )}
      <div className="info-container">
        <h3>{vehicle.name}</h3>
        <p>{vehicle.model}</p>
        <CustomButton padding="5px" onClick={handleClickButton}>Ver mais</CustomButton>
      </div>
    </VehicleContainer>
  );
}

Vehicle.propTypes = {
  vehicle: PropTypes.shape({
    id: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.shape),
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
  }).isRequired,
};
