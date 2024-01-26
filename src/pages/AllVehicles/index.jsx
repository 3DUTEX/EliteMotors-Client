// Imports Libs
import React, { useEffect } from 'react';

// Imports Modules
import FooterBar from '../../components/FooterBar';
import NavBar from '../../components/NavBar';
import VehiclesContainer from './components/VehiclesContainer/index.jsx';
import { AllVehiclesSection } from './styled.jsx';

export default function AllVehicles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <AllVehiclesSection>
        <VehiclesContainer />
        <FooterBar />
      </AllVehiclesSection>
    </>
  );
}
