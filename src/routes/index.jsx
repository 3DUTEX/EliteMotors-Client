// Imports Libs
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Imports Modules
import AllVehicles from '../pages/AllVehicles';
import Home from '../pages/Home';
import Login from '../pages/Login';
import OneVehicle from '../pages/OneVehicle';
import Reservations from '../pages/Reservations';

export default function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vehicles">
          <Route path="all" element={<AllVehicles />} />
          <Route path=":id" element={<OneVehicle />} />
        </Route>
        <Route path="/reservations">
          <Route path="create" element={<Reservations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
