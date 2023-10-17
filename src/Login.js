import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from './firebase';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const signIn = e => {
    e.preventDefault();

    // firebase signin code
    signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              navigate('/');
            })
            .catch(error => alert(error.message))
  };

  const signUp = e => {
    e.preventDefault();

    // firebase signup code
    createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    navigate('/');
                }
            })
            .catch(error => alert(error.message))
  };

  return (
    <div className='login'>
        <Link to='/'>
          <img className='login__logo' src = 'https://raw.githubusercontent.com/Thuso-Ndou/Shop-Kings-Images/main/logo.svg' alt=''/>
        </Link>

        <div className='login__container'>
          <h1>Sign In</h1>

          <form onSubmit={signIn}>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

            <button className='btn__signin' type='submit' onClick={signIn}>Sign In</button>
          </form>

          <p>
            By signing-in you agree to Shop King's 
            Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Noticeand our interest based Ads Notice.
          </p>

          <button className='btn__signup' onClick={signUp}>Create Account</button>
        </div>
    </div>
  )
}

export default Login