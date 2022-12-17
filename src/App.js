import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Autorization from './pages/Authorization';
import MainLayout from './pages/MainLayout'

function App() {


  return (
    <Routes>

      <Route index
        element={<Autorization />}
      />

      <Route path='/mainLayout'
        element={<MainLayout />}
      />

    </Routes>

  );
}

export default App;
