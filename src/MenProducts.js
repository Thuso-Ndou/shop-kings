import React from 'react';
import Product from './Product';
import './MenWomen.css';

export default function ManProducts() {
  return (
    <div className='product__home'>
        <h1>Men Products</h1>

        {/* Product with title, price, rating, image */}
        <div className='home__row'>
            <Product id='shots' title='The best selling summer shots, get yours today.' price={299.99} rating={4} image='https://thefoschini.vtexassets.com/arquivos/ids/89401698-800-800?v=638326375821970000&width=800&height=800&aspect=true' />

            <Product id='shoes' title='Steve Madden The best selling sneakers' price={1200.95} rating={3} image='https://stevemadden.co.za/cdn/shop/products/STEVEMADDEN-SHOES_POSSESSION_BLACK-1_grande.jpg?v=1683808967' />

            <Product id='grand' title='The best selling sneakers' price={129.59} rating={4} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensOCT-74_360x.jpg?v=1697453012' />

            <Product id='grandes' title='The best selling sneakers' price={129.59} rating={4} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/CopyofShoeCityMensAugust_Sep-170_6290976a-978d-406b-a9ec-306d1235ea57_360x.jpg?v=1697112977' />
        </div>

        <div className='home__row'>
        <Product id='nude' title='The best selling sneakers' price={149.95} rating={3} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensOCT-58_360x.jpg?v=1696862648' />

        <Product id='grande' title='The best selling sneakers' price={129.59} rating={4} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensOCT-14_360x.jpg?v=1696411375' />

        <Product id='rhinestone' title='The best selling sneakers' price={864.97} rating={3} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensSep-2_360x.jpg?v=1692867041' />

        <Product id='rhinestone' title='The best selling sneakers' price={864.97} rating={3} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensOCT-110_360x.jpg?v=1696497709' />
        </div>

        <div className='home__row'>
          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensSep-30_360x.jpg?v=1693481467' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensAUG-78_360x.jpg?v=1692862096' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensSep-58_360x.jpg?v=1692179365' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://cdn.shopify.com/s/files/1/0035/9405/9887/products/STEVEMADDEN_SHOES_ZATE_BLACK-LEATHER_SIDE_510x.jpg?v=1684937695' />
        </div>

        <div className='home__row'>
          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://cdn.shopify.com/s/files/1/0035/9405/9887/files/STEVEMADDEN-SHOES_PRIZE_GREY_SIDE_510x.jpg?v=1686832392' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3387709/original.jpg' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3388239/original.jpg' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3394814/original.jpg' />
        </div>

        <div className='home__row'>
          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3394434/original.jpg' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3395249/original.jpg' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3398914/original.jpg' />

          <Product id='rippedGrande' title='The best selling sneakers' price={699.99} rating={5} image='https://stevemadden.co.za/cdn/shop/files/STEVEMADDEN-MENS_SLATER_BLACK-MULTI_grande.jpg?v=1685364088' />
        </div>
    </div>
  )
}
