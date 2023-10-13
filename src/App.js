import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import Header from './Header';
import './App.css';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route
        path='/checkout'
        element={
          <>
            <Header />
            <Checkout />
          </>
        }
      />
    </Routes>
  );
}

export default App;

