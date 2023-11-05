import React from 'react';
import Product from './Product';
import './MenWomen.css';

export default function WomenProducts() {
  return (
    <div className='product__home'>
        <h1 className='page__head'>Women Products</h1>

        {/* Product with title, price, rating, image */}
        <h2 className='page__header'>Latest Products</h2>
        <div className='home__row'>
            <Product id='DIAMANTE SANDAL' title='OLDER GIRLS DIAMANTE BLOCK HEEL SANDAL' price={299.99} rating={4} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3390708/original.jpg' />

            <Product id='CONVERSE ALL STAR' title='CONVERSE ALL STAR CHUCK TAYLOR HI WOMENS SNEAKER BLUE' price={849.95} rating={4} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3395224/original.jpg' />

            <Product id='ADIDAS ORIGINALS SHOES' title='ADIDAS ORIGINALS GAZELLE BOLD WOMENS SHOES BLUE/WHITE' price={1799.95} rating={3} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3398293/original.jpg' />

            <Product id='GRANDLY' title='OLDER GIRLS GLITTER PARTY HEEL' price={259.95} rating={4} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3398281/original.jpg' />
        </div>

        <h2 className='page__header'>Women's Shoes</h2>
        <div className='home__row'>
         <Product id='STEVE MADDEN' title='STEVE MADDEN INTL LIGHT-UP NUDE HEELS' price={149.95} rating={3} image='https://stevemadden.co.za/cdn/shop/files/STEVEMADDEN-INTL_LIGHT-UP_NUDE_b090b967-3b63-4f75-b6c7-eb3bb984184e_grande.jpg?v=1690449466' />

          <Product id='STEDEN SHOES' title='STEDEN WOMEN SHOES CLASH BLACK GRANDE' price={499.95} rating={4} image='https://stevemadden.co.za/cdn/shop/products/STEVEMADDEN-SHOES_CLASH_BLACK_grande.jpg?v=1686245476' />

          <Product id='NEST LONG LEG HEEL' title='NEST LONG LEG HEEL SHOES SAPPHIRE RHINESTONE GRAY' price={699.97} rating={4} image='https://stevemadden.co.za/cdn/shop/products/STEVEMADDEN-SHOES_SAPPHIRE_RHINESTONES_grande_db315855-1576-4b62-a2f8-e6cf50454cb8_grande.webp?v=1695709487' />

          <Product id='SAFDIE HEEL' title='SAFDIE SLANTED BLOCK NUDE ANKLE STRAP HEELS' price={344.97} rating={3} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3391420/original.jpg' />
        </div>

        <div className='home__row'>
          <Product id='GRAVEL WOMEN SANDALS' title='GRAVEL WOMEN BLACK THICK SOLE LAYER SANDALS' price={199.94} rating={5} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3387376/original.jpg' />

          <Product id='GAVIN WOMEN SNEAKERS' title='GAVIN WOMEN LO BROWN/WHITE SNEAKERS' price={389.99} rating={3} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3383464/original.jpg' />

          <Product id='GAVIN HEEL' title='GAVIN WOMEN SEXY HEELS WHITE/ROSES' price={249.99} rating={4} image='https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3392243/original.jpg' />

          <Product id='WARRIOR WOMEN BOOTS' title='WARRIOR WOMEN FULL FOOT WINTER BOOTS' price={569.99} rating={5} image='https://zz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/9653/1.jpg?8714' />
        </div>

        <h2 className='page__header'>Women's Tops</h2>
        <div className='home__row'>
          <Product id = 'Rib-knit top' title = 'Rib-knit top - dark grey' price = {235.97} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3410898/original.jpg' />

          <Product id =  'Graphic ringer rickie za headline logo stripe' title = 'Graphic ringer rickie za headline logo stripe - gardenia/racing red' price = {330.99} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3402701/original.jpg' />

          <Product id = 'Nyc stripe hoodie' title = 'Nyc stripe hoodie - white & navy' price = {550.64} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3412924/original.jpg' />

          <Product id = 'Fitted lcn graphic longline tee' title = 'Fitted lcn graphic longline tee - vintage white' price = {349.78} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3390721/original.jpg' />
        </div>

        <div className='home__row'>
          <Product  id = 'Willa waffle short sleeve henley' title = 'Willa waffle short sleeve henley - stripe alpine/forest/sage green' price = {279.65} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3394497/original.jpg' />

          <Product id = 'Cropped strappy top' title = 'Cropped strappy top - light pink' price = {75.32} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3413608/original.jpg'  />

          <Product id = '2-Pack cropped tube tops'
            title = '2-Pack cropped tube tops - light pink & dark' price = {150.45} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3414507/original.jpg' />

          <Product id = 'Oversized printed t-shirt' title = 'Oversized printed t-shirt - blue' price = {157.54} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3414641/original.jpg' />
        </div>

        <h2 className='page__header'>Women's Pants</h2>
        <div className='home__row'>
          <Product id = 'Trousers paloma' title = 'Trousers paloma - green' price = {899.65}
            rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3374783/original.jpg' />

          <Product id = 'Trousers loren' title = 'Trousers loren - mid green' price = {568.65}
            rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3378663/original.jpg' />

          <Product id = 'STELLA MORGAN' title = 'Open side harem pants with front detail - black' price = {499.87} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3412824/original.jpg' />

          <Product id = 'Linen-blend pull-on trousers' title = 'Linen-blend pull-on trousers - cream leaf-patterned' price = {349.89} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3410259/original.jpg'  />
        </div>

        <div className='home__row'>
          <Product id = 'Bella Bootleg' title = 'Bella Bootleg Pant' price = {350.76} rating = {5} image = 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-women/default/dwf1520a81/2056807/2056807-01-2.jpg?sw=640&sh=960&sm=fit' />

          <Product id = 'Loose Straight' title = 'Loose Straight Jean' price = {478.47} rating = {5} image = 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-women/default/dw7e4800a5/2053335/2053335-66-2.jpg?sw=640&sh=960&sm=fit' />

          <Product id = 'Curvy Stretch' title = 'Curvy Stretch Straight Jean' price = {680.54} rating = {5} image = 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-women/default/dw2534ece8/2056530/2056530-02-2.jpg?sw=640&sh=960&sm=fit' />

          <Product id = 'Haven Wide' title = 'Haven Wide Leg Pant' price = {599.86} rating = {5} image = 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-women/default/dw54d6b531/2056694/2056694-01-1.jpg?sw=800&sh=1200&sm=fit' />
        </div>

        <h2 className='page__header'>Women's Dresses</h2>
        <div className='home__row'>
          <Product id = 'Dress tina' title = 'Dress tina - silver' price = {473.78} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3375687/original.jpg' />

          <Product id = 'Dress mare' title = 'Dress mare - black' price = {921.99} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3374648/original.jpg' />

          <Product id = 'Cotton bodycon dress' title = 'Cotton bodycon dress - red' price = {199.98} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3398553/original.jpg' />

          <Product id = 'Tie-detail linen-blend dress' title = 'Tie-detail linen-blend dress - black/patterned' price = {529.87} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3398927/original.jpg' />
        </div>

        <div className='home__row'>
          <Product  id = 'halter neck ruched midi bodycon dress' title = 'halter neck ruched midi bodycon dress - black' price = {699.99} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3405922/original.jpg' />

          <Product id = 'Pleated metallic halter maxi dress' title = 'Pleated metallic halter maxi dress - silver' price = {745.98} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3405673/original.jpg'  />

          <Product id = 'Mini trapeze dress' title = 'Mini trapeze dress with tie detail - black' price = {499.97} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3405889/original.jpg' />

          <Product id = 'Belted sleeveless dress' title = 'Belted sleeveless dress - pink' price = {819.99} rating = {5} image = 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3405588/original.jpg' />
        </div>
    </div>
  )
}
