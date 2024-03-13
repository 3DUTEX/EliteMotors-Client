// Imports Libs
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Imports Modules
import AllVehicles from '../pages/AllVehicles';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import OneVehicle from '../pages/OneVehicle';

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
