import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import VSIR from './pages/VSIR';
import Login from "./Login";
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Login />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/Marketplace'
              element={<Marketplace />}
            />
            <Route
              path='/VSIR'
              element={<VSIR />}
            />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
