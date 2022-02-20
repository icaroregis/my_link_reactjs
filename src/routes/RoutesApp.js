import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Links from '../pages/Links/Links';
import Error from '../pages/Error/Error';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/links" element={<Links />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
