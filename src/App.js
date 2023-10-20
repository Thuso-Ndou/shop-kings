import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import Header from './Header';
import MenProduct from './MenProducts';
import Orders from './Orders';
import WomenProduct from './WomenProducts';
import About from './About';
import Payment from './Payment';
import './App.css';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51O2imWKagkfSGuynOKrVFkx3HxTBAQOYnhII39cFwgjcPsp2ItEHaZ1msSlQp6bNOxrTu1FegFkoDghIJ4QFeOXE00peoZI2AI');

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const listen  = onAuthStateChanged(auth, (authUser) => {
      console.log("The user is->",authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else{
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    })
    return () => {
      listen();
    } 
  }, [dispatch]); // <-- Add dispatch to the dependency array

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
      <Route
        path='/orders'
        element={
          <>
            <Header />
            <Orders />
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
      <Route
        path='/men'
        element={
          <>
            <Header />
            <MenProduct />
          </>
        }
      />
      <Route
        path='/women'
        element={
          <>
            <Header />
            <WomenProduct />
          </>
        }
      />
      <Route
        path='/about'
        element={
          <>
            <Header />
            <About />
          </>
        }
      />
      <Route
        path='/payment'
        element={
          <>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </>
        }
      />
    </Routes>
  );
}

export default App;