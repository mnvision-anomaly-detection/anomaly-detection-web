import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Result from './pages/Result/Result.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/result' element={<Result />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default App;
