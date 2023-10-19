import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
    const navigate = useNavigate();

    const [{cart}, ] = useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat renderText={(value) => (
            <>
            <p>
                Subtotal ({cart.length} items): <strong>{` ${value} `}</strong>
            </p>
            <small className='subtotal__gift'>
                <input type='checkbox'/> This order containsa gift
            </small>
            </>
        )}  decimalScale={2} value={getCartTotal(cart)} displayType={'text'} thousandSeparator={true} prefix='R'/>

        <button onClick={e => navigate('/payment')} disabled={cart.length === 0}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal;