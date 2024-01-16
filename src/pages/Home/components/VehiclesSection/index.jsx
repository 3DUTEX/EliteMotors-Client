// Imports Libs
import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';

// Imports Modules
import axios from '../../../../services/axios';
import Vehicle from './components/Vehicle';
import { SectionVehicle, VehiclesContainer } from './styled';

// Imports Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CustomButton } from '../../../../styles';

export default function VehicleSection() {
  const [vehicles, setVehicles] = useState([]);
  const swiper = useSwiper();

  useEffect(() => {
    async function getVehicles() {
      const { data } = await axios.get('/vehicles');

      setVehicles(data);
    }

    getVehicles();
  }, []);

  return (
    <SectionVehicle>
      <h2>Novidades na loja</h2>
      <VehiclesContainer>
        {vehicles.map((vehicle, index) => (
          index <= 3 && <Vehicle vehicle={vehicle} key={vehicle.id} />
        ))}
      </VehiclesContainer>
      <CustomButton className='btn-see-all'>Ver Todos</CustomButton>
    </SectionVehicle>
  );
}
