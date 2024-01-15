// Imports Libs
import React from 'react';

// Imports Modules
import NavBar from '../../components/NavBar';
import CarsSection from './components/CarsSection';
import PresentationSection from './components/PresentationSection';
import StepsSection from './components/StepsSection';
import { HomePage } from './styled';

export default function Home() {
  return (
    <HomePage>
      <NavBar />
      <div className="presentation-section">
        <PresentationSection />
      </div>
      <StepsSection />
      <CarsSection />
    </HomePage>
  );
}
