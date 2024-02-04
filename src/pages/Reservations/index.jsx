/* eslint-disable consistent-return */
import React, { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { ReservationsSection } from './styled';

export default function Reservations() {
  const location = useLocation();
  const navigate = useNavigate();

  // Verifica se tem o id do veículo
  useEffect(() => {
    if (!location.state) { // se não tiver estado
      return navigate('/');
    }
    if (!location.state.idVehicle) return navigate('/'); // se não tiver id do veículo
  }, [location]);

  return (
    <ReservationsSection>
      <h1>teste</h1>
    </ReservationsSection>
  );
}
