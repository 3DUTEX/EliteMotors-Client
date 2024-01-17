// Imports Libs
import React from 'react';

// Imports Modules
import FooterBar from '../../components/FooterBar';
import NavBar from '../../components/NavBar';
import PresentationSection from './components/PresentationSection';
import QuestionsSection from './components/QuestionsSection';
import StepsSection from './components/StepsSection';
import VehiclesSection from './components/VehiclesSection';

export default function Home() {
  return (
    <>
      <NavBar />
      <PresentationSection />
      <StepsSection />
      <VehiclesSection />
      <QuestionsSection />
      <FooterBar />
    </>
  );
}
