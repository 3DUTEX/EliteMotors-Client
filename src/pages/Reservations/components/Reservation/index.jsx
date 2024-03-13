import React, { useEffect, useState } from 'react';

import { Container } from './styled';

export default function Reservation({ visitDate, name, price, dateNow }) {
  const formatNumber = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  });

  const [expired, setExpired] = useState(false);

  const visitDateDate = new Date(visitDate);

  useEffect(() => {
    const visitDateSeconds = Number(visitDateDate);
    if (visitDateSeconds <= dateNow) setExpired(true);
  }, []);

  return (
    <Container>
      <div className="informations">
        <p>{name}</p>
        <p>{formatNumber.format(price)}</p>
      </div>
      <div>
        <p>{visitDateDate.toLocaleDateString()}</p>
        {!expired ? <p className="valid">Válido</p> : <p className="expired">Expirado</p>}
      </div>
    </Container>
  );
}
