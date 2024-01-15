// Imports Libs
import React, { useEffect } from 'react';

// imports Modules
import axios from '../../../../services/axios';
import { SectionCars } from './styled';

export default function CarsSection() {
  useEffect(() => {
    async function getVehicles() {
      const { data } = await axios.get('/vehicles');

      console.log(data);
    }

    getVehicles();
  }, []);

  return (
    <SectionCars>Fazendo</SectionCars>
  );
}
