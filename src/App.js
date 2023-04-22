import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/Marketplace'
              element={<Marketplace />}
            />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
