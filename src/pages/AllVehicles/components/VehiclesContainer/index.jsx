// Imports Libs
import React, { useEffect, useState } from 'react';

// Imports Modules
import Loading from '../../../../components/Loading';
import axios from '../../../../services/axios.js';
import Vehicle from './components/Vehicle';
import { ContainerVehicles } from './styled.jsx';

export default function VehiclesContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function getVehicles() {
      try {
        setIsLoading(true);
        const { data } = await axios.get('/vehicles');
        setVehicles(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    getVehicles();
  }, []);

  return (
    <ContainerVehicles>
      {isLoading && <Loading />}
      {vehicles.map((vehicle) => (
        <Vehicle
          key={vehicle.id}
          name={vehicle.name}
          brand={vehicle.brand}
          price={vehicle.price}
          images={vehicle.images}
        />
      ))}
    </ContainerVehicles>
  );
}
