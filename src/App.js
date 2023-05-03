import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Profile from './pages/Profile';
import VSIR from './pages/VSIR';
import Chatbot from './pages/Chatbot';
import Login from "./Login";
import Register from './Register';
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
            <Route
              path='/VSIR'
              element={<VSIR />}
            />
            <Route
              path='/Login'
              element={<Login />}
            />
            <Route
              path='/Register'
              element={<Register />}
            />
            <Route
              path='/Profile'
              element={<Profile />}
            />
            <Route
              path='/Chatbot'
              element={<Chatbot />}
            />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
