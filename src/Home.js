import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className='home'>
        <img className='home__image' src='https://raw.githubusercontent.com/Thuso-Ndou/Shop-Kings-Images/main/banner.png'  alt=''/>

        {/* Product with title, price, rating, image */}
        <div className='home__row'>
            <Product id='LERY WATCH' title='LERY BLACK STYLISH WATCH' price={299.99} rating={4} image='https://www.aldoshoes.co.za/wp-content/uploads/artillery_silver_040_main_sq_nt_1000x1000.jpg' />

            <Product id='REICIA WOMEN GLASSES' title='REICIA WOMEN OVERSIZED BLACK SUNGLASSES' price={209.95} rating={4} image='https://www.aldoshoes.co.za/wp-content/uploads/greicia_multi_970_main_sq_nt_1000x1000.jpg' />

            <Product id='NITALI BRACELET' title='NITALI STYLISH BRACELET' price={129.95} rating={3} image='https://www.aldoshoes.co.za/wp-content/uploads/nitali_brown_200_main_sq_nt_1000x1000.jpg' />
        </div>

        <div className='home__row'>
        <Product id='ADRAYAND' title='ADRAYAND' price={349.95} rating={3} image='https://www.aldoshoes.co.za/wp-content/uploads/adrayand_multi_970_main_sq_nt_1000x1000.jpg' />

        <Product id='BLACK SOCKS' title='3 PACK BLACK SEAMLESS SOCKS' price={129.59} rating={4} image='https://www.shoecity.co.za/cdn/shop/products/121286.jpg?v=1623332071' />

        <Product id='PLUSH SHOE CREAM' title='SHOE CREAM 50ML' price={44.95} rating={3} image='https://www.shoecity.co.za/cdn/shop/products/a_86007739_black.png?v=1605013050' />
        </div>

        <div className='home__row'>
        <Product id='PLUSH BROWN' title='CLEAN AND SHINE 125ML' price={59.95} rating={5} image='https://www.shoecity.co.za/cdn/shop/products/a_86009444_n.png?v=1605012389' />
        </div>
    </div>

    
  )
}

export default Home