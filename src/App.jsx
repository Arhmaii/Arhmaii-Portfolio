import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import CaseStudy from './CaseStudy';
import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Portfolio />} />
        <Route path="/cases" element={<CaseStudy />} />
      </Route>
    </Routes>
  );
}

export default App;
