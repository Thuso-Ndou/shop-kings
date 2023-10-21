import React from 'react';
import Product from './Product';
import './MenWomen.css';

export default function WomenProducts() {
  return (
    <div className='product__home'>
        <h1 className='page__header'>Women Products</h1>

        {/* Product with title, price, rating, image */}
        <div className='home__row'>
            <Product id='DIAMANTE SANDAL' title='OLDER GIRLS DIAMANTE BLOCK HEEL SANDAL' price={299.99} rating={4} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3390708/original.jpg' />

            <Product id='CONVERSE ALL STAR' title='CONVERSE ALL STAR CHUCK TAYLOR HI WOMENS SNEAKER BLUE' price={849.95} rating={4} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3395224/original.jpg' />

            <Product id='ADIDAS ORIGINALS SHOES' title='ADIDAS ORIGINALS GAZELLE BOLD WOMENS SHOES BLUE/WHITE' price={1799.95} rating={3} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3398293/original.jpg' />

            <Product id='GRANDLY' title='OLDER GIRLS GLITTER PARTY HEEL' price={259.95} rating={4} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3398281/original.jpg' />
        </div>

        <div className='home__row'>
         <Product id='STEVE MADDEN' title='STEVE MADDEN INTL LIGHT-UP NUDE' price={149.95} rating={3} image='https://stevemadden.co.za/cdn/shop/files/STEVEMADDEN-INTL_LIGHT-UP_NUDE_b090b967-3b63-4f75-b6c7-eb3bb984184e_grande.jpg?v=1690449466' />

          <Product id='STEDEN SHOES' title='STEDEN SHOES CLASH BLACK GRANDE' price={499.95} rating={4} image='https://stevemadden.co.za/cdn/shop/products/STEVEMADDEN-SHOES_CLASH_BLACK_grande.jpg?v=1686245476' />

          <Product id='NEST LONG LEG HEEL' title='NEST LONG LEG HEEL SHOES SAPPHIRE RHINESTONE GRAY' price={699.97} rating={4} image='https://stevemadden.co.za/cdn/shop/products/STEVEMADDEN-SHOES_SAPPHIRE_RHINESTONES_grande_db315855-1576-4b62-a2f8-e6cf50454cb8_grande.webp?v=1695709487' />

          <Product id='SAFDIE HEEL' title='SAFDIE SLANTED BLOCK NUDE ANKLE STRAP HEELS' price={344.97} rating={3} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3391420/original.jpg' />
        </div>

        <div className='home__row'>
          <Product id='GRAVEL WOMEN SANDALS' title='GRAVEL WOMEN BLACK THICK SOLE LAYER' price={199.94} rating={5} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3387376/original.jpg' />

          <Product id='GAVIN WOMEN SNEAKERS' title='GAVIN WOMEN LO BROWN/WHITE SNEAKERS' price={389.99} rating={3} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3383464/original.jpg' />

          <Product id='GAVIN HEEL' title='GAVIN WOMEN SEXY HEELS WHITE/ROSES' price={249.99} rating={4} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3392243/original.jpg' />

          <Product id='WARRIOR WOMEN BOOTS' title='WARRIOR WOMEN FULL FOOT WINTER BOOTS' price={569.99} rating={5} image='https://zz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/9653/1.jpg?8714' />
        </div>

        <div className='home__row'>
          <Product id='ANDE WOMEN SANDALS' title='ANDE WOMEN TOE POST FOOTBED MULE' price={119.95} rating={5} image='https://zz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/4723/1.jpg?3286' />

          <Product id='KINGS WOMEN BOOTS' title='KINGS WOMEN ROSTY LO HEEL BLACK BOOTS' price={469.93} rating={4} image='https://zz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/9653/1.jpg?2086' />

          <Product id='HECA WOMEN SANDALS' title='HECA WOMEN VELCRO PLATFORM SLIDE' price={99.99} rating={3} image='https://zz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/2643/1.jpg?0487' />

          <Product id='UNREAL WOMEN SANDAL' title='UNREAL WOMEN ESPADRILLE SQ TOE WEDGE' price={329.99} rating={5} image='https://www.shoecity.co.za/cdn/shop/files/LadiesSep-65.jpg?v=1692877454' />
        </div>

        <div className='home__row'>
          <Product id='CROOK HEEL' title='CROOK BLACK WOMEN STYLISH HEELS' price={169.94} rating={5} image='https://cdn.media.amplience.net/i/mrpricegroup/01_102204842_SI_11?$preset$&w=320' />

          <Product id='ZAKE SUMMER SANDAL' title='ZAKE WOMEN TWO STRIPED GRAY/DIAMOND SUMMER SANDALS' price={109.99} rating={3} image='https://cdn.media.amplience.net/i/mrpricegroup/01_102217959_SI_11?$preset$&w=320' />

          <Product id='MARIA HEEL' title='MARIA OLD SCHOOL WOMEN HEELS CREAMISH PINK' price={229.99} rating={5} image='https://cdn.media.amplience.net/i/mrpricegroup/01_102004262_SI_11?$preset$&w=320' />

          <Product id='CAPA WOMEN HEELS' title='CAPA WOMEN PLASTIC LOW HEELS' price={59.99} rating={2} image='https://cdn.media.amplience.net/i/mrpricegroup/01_101837835_SI_11?$preset$&w=320' />
        </div>
    </div>
  )
}
