import React from 'react';
import Product from './Product';
import './MenWomen.css';

export default function WomenProducts() {
  return (
    <div className='product__home'>
        <h1>Women Products</h1>

        {/* Product with title, price, rating, image */}
        <div className='home__row'>
            <Product id='shots' title='The best selling summer shots, get yours today.' price={299.99} rating={4} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3390708/original.jpg' />

            <Product id='shoes' title='Steve Madden The best selling sneakers' price={1200.95} rating={3} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3395224/original.jpg' />

            <Product id='shoes' title='Steve Madden The best selling sneakers' price={1200.95} rating={3} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3398293/original.jpg' />

            <Product id='shoes' title='Steve Madden The best selling sneakers' price={1200.95} rating={3} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3398281/original.jpg' />
        </div>

        <div className='home__row'>
         <Product id='nude' title='The best selling sneakers' price={149.95} rating={3} image='https://stevemadden.co.za/cdn/shop/files/STEVEMADDEN-INTL_LIGHT-UP_NUDE_b090b967-3b63-4f75-b6c7-eb3bb984184e_grande.jpg?v=1690449466' />

          <Product id='grande' title='The best selling sneakers' price={129.59} rating={4} image='https://stevemadden.co.za/cdn/shop/products/STEVEMADDEN-SHOES_CLASH_BLACK_grande.jpg?v=1686245476' />

          <Product id='rhinestone' title='The best selling sneakers' price={864.97} rating={3} image='https://stevemadden.co.za/cdn/shop/products/STEVEMADDEN-SHOES_SAPPHIRE_RHINESTONES_grande_db315855-1576-4b62-a2f8-e6cf50454cb8_grande.webp?v=1695709487' />

          <Product id='rhinestone' title='The best selling sneakers' price={864.97} rating={3} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3391420/original.jpg' />
        </div>

        <div className='home__row'>
          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3387376/original.jpg' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3383464/original.jpg' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3392243/original.jpg' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://zz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/9653/1.jpg?8714' />
        </div>

        <div className='home__row'>
          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://zz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/4723/1.jpg?3286' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://zz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/9653/1.jpg?2086' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://zz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/2643/1.jpg?0487' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://stevemadden.co.za/cdn/shop/files/SMD189_DARK_RIPPED_grande.jpg?v=1689533906' />
        </div>

        <div className='home__row'>
          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://cdn.media.amplience.net/i/mrpricegroup/01_102204842_SI_11?$preset$&w=320' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://cdn.media.amplience.net/i/mrpricegroup/01_102217959_SI_11?$preset$&w=320' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://cdn.media.amplience.net/i/mrpricegroup/01_102004262_SI_11?$preset$&w=320' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://cdn.media.amplience.net/i/mrpricegroup/01_101837835_SI_11?$preset$&w=320' />
        </div>
    </div>
  )
}
