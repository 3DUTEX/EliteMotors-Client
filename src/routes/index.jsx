import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Example from '../components/Example';
import Home from '../pages/Home';

export default function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </BrowserRouter>
  );
}
