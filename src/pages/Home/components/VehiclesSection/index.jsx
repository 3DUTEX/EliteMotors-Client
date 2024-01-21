// Imports Libs
import React, { useEffect, useState } from 'react';

// Imports Modules
import Loading from '../../../../components/Loading';
import axios from '../../../../services/axios';
import { CustomButton } from '../../../../styles';
import Vehicle from './components/Vehicle';
import { SectionVehicle, VehiclesContainer } from './styled';

export default function VehicleSection() {
  const [reqLoading, setReqLoading] = useState(false);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function getVehicles() {
      setReqLoading(true);
      const { data } = await axios.get('/vehicles');

      setVehicles(data);
      setReqLoading(false);
    }

    getVehicles();
  }, []);

  return (
    <SectionVehicle>
      <h2>Novidades na loja</h2>
      {reqLoading && <Loading />}
      <VehiclesContainer>
        {vehicles.map(
          (vehicle, index) => index <= 5 && <Vehicle vehicle={vehicle} key={vehicle.id} />
        )}
      </VehiclesContainer>
      <CustomButton className="btn-see-all">Ver Todos</CustomButton>
    </SectionVehicle>
  );
}
