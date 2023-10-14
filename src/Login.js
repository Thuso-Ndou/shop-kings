import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className='login'>
        <Link to='/'>
          <img className='login__logo' src = 'https://raw.githubusercontent.com/Thuso-Ndou/Shop-Kings-Images/main/logo.svg' alt=''/>
        </Link>

        <div className='login__container'>
          <h1>Sign In</h1>

          <form>
            <h5>E-mail</h5>
            <input type='text'/>

            <h5>Password</h5>
            <input type='password'/>

            <button className='btn__signin'>Sign In</button>
          </form>

          <p>
            By signing-in you agree to Shop King's 
            Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Noticeand our interest based Ads Notice.
          </p>

          <button className='btn__signup'>Create Account</button>
        </div>
    </div>
  )
}

export default Login