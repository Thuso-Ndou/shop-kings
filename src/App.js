import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import Header from './Header';
import './App.css';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

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