import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct'; 
import Subtotal from './Subtotal';

function Checkout() {
    const [{ cart, user }] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
        <img className='checkout__ad'  src='https://raw.githubusercontent.com/Thuso-Ndou/Shop-Kings-Images/main/checkoutBanner.png' alt=''/>
        {cart?.length === 0 ? (
            <div>
                <h3>{user?.email}</h3>
                <h2>Your Cart Is Empty</h2>
                <p>
                    You have no items in your basket
                </p>
            </div>
        ) : (
            <div>
                <h3>{user?.email}</h3>
                <h2 className='checkout__title'>Your Shopping Basket</h2>

                {/* List out all of the checkout products */}
                {cart.map(item => (
                    <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
                ))}
            </div>
        )}
        </div>
        {cart.length > 0 && (
            <div className='checkout__right'>
                <Subtotal/>
            </div>
        )}
    </div>
  )
}

export default Checkout;