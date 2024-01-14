// Imports Libs
import React, { useEffect, useState } from 'react';

// Imports Modules
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';

// Change navbar for mobile
function changeMobile(setIsMobile) {
  const windowSize = window.innerWidth;

  if (windowSize <= 720) return setIsMobile(true);

  return setIsMobile((current) => setIsMobile(current));
}

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    changeMobile(setIsMobile);
  }, []);

  window.addEventListener('resize', (e) => {
    changeMobile(setIsMobile);
  });

  if (isMobile) {
    return (
      <Mobile />
    );
  }

  return (
    <Desktop />
  );
}
