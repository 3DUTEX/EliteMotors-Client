// Imports Libs
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Imports Modules
import AllVehicles from '../pages/AllVehicles';
import Home from '../pages/Home';
import Login from '../pages/Login';

export default function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vehicles/all" element={<AllVehicles />} />
      </Routes>
    </BrowserRouter>
  );
}
