// Imports Libs
import React from 'react';
import { Link } from 'react-router-dom';

// Imports Modules
import NavBar from '../../components/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <div>
        <Link to="/">Home</Link>
        <Link to="/example">Example</Link>
      </div>
    </>

  );
}
