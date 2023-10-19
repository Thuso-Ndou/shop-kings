import React from 'react';
import Product from './Product';
import './MenWomen.css';

export default function ManProducts() {
  return (
    <div className='product__home'>
        <h1>Men Products</h1>

        {/* Product with title, price, rating, image */}
        <div className='home__row'>
            <Product id='shots' title='The best selling summer shots, get yours today.' price={299.99} rating={4} image='https://stevemadden.co.za/cdn/shop/files/SMS199_Pink_Front_grande.jpg?v=1691390086' />

            <Product id='shoes' title='Steve Madden The best selling sneakers' price={1200.95} rating={3} image='https://stevemadden.co.za/cdn/shop/products/STEVEMADDEN-SHOES_POSSESSION_BLACK-1_grande.jpg?v=1683808967' />

            <Product id='grand' title='The best selling sneakers' price={129.59} rating={4} image='https://stevemadden.co.za/cdn/shop/products/STEVEMADDEN-SHOES_CLASH_BLACK_grande.jpg?v=1686245476' />

            <Product id='grandes' title='The best selling sneakers' price={129.59} rating={4} image='https://stevemadden.co.za/cdn/shop/products/STEVEMADDEN-SHOES_CLASH_BLACK_grande.jpg?v=1686245476' />
        </div>

        <div className='home__row'>
        <Product id='nude' title='The best selling sneakers' price={149.95} rating={3} image='https://stevemadden.co.za/cdn/shop/files/STEVEMADDEN-INTL_LIGHT-UP_NUDE_b090b967-3b63-4f75-b6c7-eb3bb984184e_grande.jpg?v=1690449466' />

        <Product id='grande' title='The best selling sneakers' price={129.59} rating={4} image='https://stevemadden.co.za/cdn/shop/products/STEVEMADDEN-SHOES_CLASH_BLACK_grande.jpg?v=1686245476' />

        <Product id='rhinestone' title='The best selling sneakers' price={864.97} rating={3} image='https://stevemadden.co.za/cdn/shop/products/STEVEMADDEN-SHOES_SAPPHIRE_RHINESTONES_grande_db315855-1576-4b62-a2f8-e6cf50454cb8_grande.webp?v=1695709487' />
        </div>

        <div className='home__row'>
        <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://stevemadden.co.za/cdn/shop/files/SMD189_DARK_RIPPED_grande.jpg?v=1689533906' />
        </div>
    </div>
  )
}