import React from 'react';
import Product from './Product';
import './MenWomen.css';

export default function ManProducts() {
  return (
    <div className='product__home'>
        <h1 className='page__head'>Men Products</h1>

        {/* Product with title, price, rating, image */}
        <h2 className='page__header'>Latest Products</h2>
        <div className='home__row'>
            <Product id='ARQUIVOS SLIDE' title='ARQUIVOS SLIDE MEN BLACK EMBOSSED SANDALS.' price={169.95} rating={4} image='https://www.shoecity.co.za/cdn/shop/products/MensFeb_23-29.jpg?v=1675764629' />

            <Product id='STEVE MADDEN BLACK SNEAKERS' title='STEVE MADDEN BLACK STYLED SNEAKERS' price={1200.95} rating={5} image='https://stevemadden.co.za/cdn/shop/products/STEVEMADDEN-SHOES_POSSESSION_BLACK-1_grande.jpg?v=1683808967' />

            <Product id='MCENROE' title='MCENROE MINIMALIST LOW TOP SNEAKERS.' price={129.59} rating={3} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensOCT-74_360x.jpg?v=1697453012' />

            <Product id='MANCINI' title='MANCINI MEN HARRACHI LOAFER' price={599.95} rating={3} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/CopyofShoeCityMensAugust_Sep-170_6290976a-978d-406b-a9ec-306d1235ea57_360x.jpg?v=1697112977' />
        </div>

        <h2 className='page__header'>Men's Tops</h2>
        <div className='home__row'>
        <Product id = 'T-just-g9 t-shirt regular' title = 'T-just-g9 t-shirt regular - black' price = {899.97} rating = {4} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3413240/original.jpg' />

        <Product id = 'Relaxed fit cotton T-shirt' title = 'Relaxed fit cotton T-shirt - light grey & orange striped' price = {279.34} rating = {3} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3408242/original.jpg' />

        <Product id = 'Stranded tee' title = 'Stranded tee - dark grey' price = {399.99} rating = {4} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3416181/original.jpg' />

        <Product id = 'Car icon print tee ' title = 'Car icon print tee - black' price = {349.76} rating = {4} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3418358/original.jpg' />
        </div>

        <div className='home__row'>
          <Product id =  'Mosaic tee ' title = 'Mosaic tee - white' price = {349.98} rating = {4} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3416120/original.jpg' />

          <Product id =  'Mens short sleeve eqestrian ' title = 'Mens short sleeve eqestrian tee - navy' price = {1099.98} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3418126/original.jpg' />

          <Product id =  'Mens heritage short sleeve' title = 'Mens heritage short sleeve tee - red' price = {599.65} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3418136/original.jpg' />

          <Product id = 'Mens short sleeve big pony tee ' title = 'Mens short sleeve big pony tee - white' price = {699.98} rating = {4} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3418007/original.jpg' />
        </div>

        <h2 className='page__header'>Men's Shoes</h2>
        <div className='home__row'>
          <Product id='ADIDAS SHOES' title='ADIDAS PERFORMANCE PARK ST MENS SHOES CARBON ALUMINIUM EARTH STRATA' price={1499.99} rating={4} image='https://cdn.shopify.com/s/files/1/0035/9405/9887/files/STEVEMADDEN-SHOES_PRIZE_GREY_SIDE_510x.jpg?v=1686832392' />

          <Product id='NIKE COURT' title='NIKE COURT VISION LO MENS SHOES SAIL/BROWN' price={1299.99} rating={5} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3387709/original.jpg' />

          <Product id='NIKE AIR SNEAKERS' title='NIKE AIR HUARACHE CRAFT MEN SHOES BLACK/NAVY' price={2239.99} rating={5} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3388239/original.jpg' />

          <Product id='PUMA REBOUND' title='PUMA REBOUND V6 HIGH MEN SHOES RED' price={849.99} rating={4} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3394814/original.jpg' />
        </div>

        <div className='home__row'>
          <Product id='PUMA' title='PUMA TRINITY OPEN ROAD MENS SHOES BLACK/HOT HEAT' price={1499.99} rating={5} image='https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3394434/original.jpg' />

          <Product id='CONVERSE ALL STAR' title='CONVERSE ALL STAR CHUCK TAYLOR LO MENS SNEAKER ' price={949.99} rating={5} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3395249/original.jpg' />

          <Product id='ADIDAS PERFORMANCE SNEAKER' title='ADIDAS PERFORMANCE MENS RUN50S MENS SHOES RED INK' price={999.99} rating={5} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3398914/original.jpg' />

          <Product id='STEVE MADDEN SLATER SNEAKER' title='STEVE MADDEN MEN SLATER BLACK MULTI-GRANDE' price={1199.99} rating={5} image='https://stevemadden.co.za/cdn/shop/files/STEVEMADDEN-MENS_SLATER_BLACK-MULTI_grande.jpg?v=1685364088' />
        </div>
    </div>
  )
}
