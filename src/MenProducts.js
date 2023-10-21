import React from 'react';
import Product from './Product';
import './MenWomen.css';

export default function ManProducts() {
  return (
    <div className='product__home'>
        <h1 className='page__header'>Men Products</h1>

        {/* Product with title, price, rating, image */}
        <div className='home__row'>
            <Product id='ARQUIVOS SLIDE' title='ARQUIVOS SLIDE MEN BLACK EMBOSSED SANDALS.' price={169.95} rating={4} image='https://thefoschini.vtexassets.com/arquivos/ids/89401698-800-800?v=638326375821970000&width=800&height=800&aspect=true' />

            <Product id='STEVE MADDEN BLACK SNEAKERS' title='STEVE MADDEN BLACK STYLED SNEAKERS' price={1200.95} rating={5} image='https://stevemadden.co.za/cdn/shop/products/STEVEMADDEN-SHOES_POSSESSION_BLACK-1_grande.jpg?v=1683808967' />

            <Product id='MCENROE' title='MCENROE MINIMALIST LOW TOP SNEAKERS.' price={129.59} rating={3} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensOCT-74_360x.jpg?v=1697453012' />

            <Product id='MANCINI' title='MANCINI MEN HARRACHI LOAFER' price={599.95} rating={3} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/CopyofShoeCityMensAugust_Sep-170_6290976a-978d-406b-a9ec-306d1235ea57_360x.jpg?v=1697112977' />
        </div>

        <div className='home__row'>
        <Product id='NUDE SNEAKERS' title='NUDE MEN KNITTED PU SNEAKER' price={399.99} rating={3} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensOCT-58_360x.jpg?v=1696862648' />

        <Product id='GRANDE SANDALS' title='GRANDE MEN TOEPOST PU WEDGE SOLE SANDALS' price={239.95} rating={2} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensOCT-14_360x.jpg?v=1696411375' />

        <Product id='STONE SANDALS' title='STONE MEN SANDALS EVA NEW BEACH THONG' price={164.95} rating={4} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensSep-2_360x.jpg?v=1692867041' />

        <Product id='HINE FORMAL' title='HINE MEN LACE UP DERBY FORMAL SHOES' price={599.99} rating={3} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensOCT-110_360x.jpg?v=1696497709' />
        </div>

        <div className='home__row'>
          <Product id='RIP SNEAKER' title='RIPP MEN GREY NEOPRENE/ PU COURT SNEAKER' price={379.95} rating={5} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensSep-30_360x.jpg?v=1693481467' />

          <Product id='AVENTER SANDALS' title='AVENTER MEN CUT OUT SLIDE' price={175.99} rating={3} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensAUG-78_360x.jpg?v=1692862096' />

          <Product id='KOA FORMAL' title='KAO FORMAL MEN HIGH SHINE LOAFER' price={879.99} rating={4} image='https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensSep-58_360x.jpg?v=1692179365' />

          <Product id='LENDE FORMAL' title='LENDE MENS FORMAL LACE UP SHOE' price={679.97} rating={5} image='https://cdn.shopify.com/s/files/1/0035/9405/9887/products/STEVEMADDEN_SHOES_ZATE_BLACK-LEATHER_SIDE_510x.jpg?v=1684937695' />
        </div>

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
