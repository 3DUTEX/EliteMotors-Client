// Imports Libs
import React from 'react';

// Imports Modules
import NavBar from '../../components/NavBar';
import PresentationSection from './components/PresentationSection';
import StepsSection from './components/StepsSection';

export default function Home() {
  return (
    <>
      <NavBar />
      <PresentationSection />
      <StepsSection />
    </>
  );
}
