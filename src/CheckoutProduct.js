import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating}) {
    const [, dispatch] = useStateValue();

    const RemoveFromCart = () => {
        // remove item from cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        });
    }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image}  alt=''/>
        <div className='checkoutProduct__info'>
            <p checkoutProduct__title>{title}</p>
            <p checkoutProduct__price>
                <small>R</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>

            <button onClick={RemoveFromCart}>Remove Item</button>
        </div>
    </div>
  )
}

export default CheckoutProduct;