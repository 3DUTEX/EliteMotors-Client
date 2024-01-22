// Imports Libs
import React from 'react';

// Imports Modules
import NavBar from '../../components/NavBar';
import VehiclesContainer from './components/VehiclesContainer/index.jsx';
import { AllVehiclesSection } from './styled.jsx';

export default function AllVehicles() {
  return (
    <>
      <NavBar />
      <AllVehiclesSection>
        <VehiclesContainer />
      </AllVehiclesSection>
    </>
  );
}
