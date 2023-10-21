const data = {
    productData: [
        {
            id:'LERY WATCH',
            title:'LERY BLACK STYLISH WATCH' ,
            price:299.99 ,
            rating:4, 
            image:'https://www.aldoshoes.co.za/wp-content/uploads/artillery_silver_040_main_sq_nt_1000x1000.jpg'
        },
        {
            id:'REICIA WOMEN GLASSES', 
            title:'REICIA WOMEN OVERSIZED BLACK SUNGLASSES',
            price:209.95,
            rating:4,
            image:'https://www.aldoshoes.co.za/wp-content/uploads/greicia_multi_970_main_sq_nt_1000x1000.jpg'
        },
        {
            id:'NITALI BRACELET',
            title:'NITALI STYLISH BRACELET',
            price:129.95,
            rating:3,
            image:'https://www.aldoshoes.co.za/wp-content/uploads/nitali_brown_200_main_sq_nt_1000x1000.jpg'
        },
        {
            id:'ADRAYAND BRACELET',
            title:'ADRAYAND BRACELET',
            price:349.95,
            rating:3,
            image:'https://www.aldoshoes.co.za/wp-content/uploads/adrayand_multi_970_main_sq_nt_1000x1000.jpg'
        },
        {
            id:'BLACK SOCKS',
            title:'3 PACK BLACK SEAMLESS SOCKS',
            price:129.59,
            rating:4,
            image:'https://www.shoecity.co.za/cdn/shop/products/121286.jpg?v=1623332071'
        },
        {
            id:'PLUSH SHOE CREAM',
            title:'SHOE CREAM 50ML',
            price:44.95,
            rating:3,
            image:'https://www.shoecity.co.za/cdn/shop/products/a_86007739_black.png?v=1605013050'
        },
        {
            id:'PLUSH CLEAN AND SHINE',
            title:'CLEAN AND SHINE 125ML',
            price:59.95,
            rating:5,
            image:'https://www.shoecity.co.za/cdn/shop/products/a_86009444_n.png?v=1605012389'
        },
        {
            id:'DIAMANTE SANDAL',
            title:'OLDER GIRLS DIAMANTE BLOCK HEEL SANDAL',
            price:299.99,
            rating:4,
            image:'https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3390708/original.jpg'
        },
        {
            id:'CONVERSE ALL STAR',
            title:'CONVERSE ALL STAR CHUCK TAYLOR HI WOMENS SNEAKER BLUE',
            price:849.95,
            rating:4,
            image:'https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3395224/original.jpg'
        },
        {
            id:'ADIDAS ORIGINALS SHOES',
            title:'ADIDAS ORIGINALS GAZELLE BOLD WOMENS SHOES BLUE/WHITE',
            price:1799.95,
            rating:3,
            image:'https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3398293/original.jpg'
        },
        {
            id:'GRANDLY',
            title:'OLDER GIRLS GLITTER PARTY HEEL',
            price:259.95,
            rating:4,
            image:'https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3398281/original.jpg'
        },
        {
            id:'STEVE MADDEN',
            title:'STEVE MADDEN INTL LIGHT-UP NUDE HEELS',
            price:149.95,
            rating:3,
            image:'https://stevemadden.co.za/cdn/shop/files/STEVEMADDEN-INTL_LIGHT-UP_NUDE_b090b967-3b63-4f75-b6c7-eb3bb984184e_grande.jpg?v=1690449466'
        },
        {
            id:'STEDEN SHOES',
            title:'STEDEN WOMEN SHOES CLASH BLACK GRANDE',
            price:499.95,
            rating:4,
            image:'https://stevemadden.co.za/cdn/shop/products/STEVEMADDEN-SHOES_CLASH_BLACK_grande.jpg?v=1686245476'
        },
        {
            id:'NEST LONG LEG HEEL',
            title:'NEST LONG LEG HEEL SHOES SAPPHIRE RHINESTONE GRAY',
            price:699.97,
            rating:4, 
            image:'https://stevemadden.co.za/cdn/shop/products/STEVEMADDEN-SHOES_SAPPHIRE_RHINESTONES_grande_db315855-1576-4b62-a2f8-e6cf50454cb8_grande.webp?v=1695709487'
        },
        {
            id:'SAFDIE HEEL',
            title:'SAFDIE SLANTED BLOCK NUDE ANKLE STRAP HEELS',
            price:344.97,
            rating:3,
            image:'https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3391420/original.jpg'
        },
        {
            id:'GRAVEL WOMEN SANDALS',
            title:'GRAVEL WOMEN BLACK THICK SOLE LAYER SANDALS',
            price:199.94,
            rating:5,
            image:'https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3387376/original.jpg'
        },
        {
            id:'GAVIN WOMEN SNEAKERS',
            title:'GAVIN WOMEN LO BROWN/WHITE SNEAKERS',
            price:389.99,
            rating:3,
            image:'https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3383464/original.jpg'
        },
        {
            id:'GAVIN HEEL',
            title:'GAVIN WOMEN SEXY HEELS WHITE/ROSES',
            price:249.99,
            rating:4,
            image:'https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3392243/original.jpg'
        },
        {
            id:'WARRIOR WOMEN BOOTS',
            title:'WARRIOR WOMEN FULL FOOT WINTER BOOTS',
            price:569.99,
            rating:5,
            image:'https://zz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/9653/1.jpg?8714'
        },
        {
            id:'ANDE WOMEN SANDALS',
            title:'ANDE WOMEN TOE POST FOOTBED MULE SANDALS',
            price:119.95,
            rating:5,
            image:'https://zz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/4723/1.jpg?3286'
        },
        {
            id:'KINGS WOMEN BOOTS',
            title:'KINGS WOMEN ROSTY LO HEEL BLACK BOOTS',
            price:469.93,
            rating:4,
            image:'https://zz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/9653/1.jpg?2086'
        },
        {
            id:'HECA WOMEN SANDALS',
            title:'HECA WOMEN VELCRO PLATFORM SLIDE SANDALS',
            price:99.99,
            rating:3,
            image:'https://zz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/2643/1.jpg?0487'
        },
        {
            id:'UNREAL WOMEN SANDAL',
            title:'UNREAL WOMEN ESPADRILLE SQ TOE WEDGE SANDALS',
            price:329.99,
            rating:5,
            image:'https://www.shoecity.co.za/cdn/shop/files/LadiesSep-65.jpg?v=1692877454'
        },
        {
            id:'CROOK HEEL',
            title:'CROOK BLACK WOMEN STYLISH HEELS',
            price:169.94,
            rating:5,
            image:'https://cdn.media.amplience.net/i/mrpricegroup/01_102204842_SI_11?$preset$&w=320'
        },
        {
            id:'ZAKE SUMMER SANDAL',
            title:'ZAKE WOMEN TWO STRIPED GRAY/DIAMOND SUMMER SANDALS',
            price:109.99,
            rating:3,
            image:'https://cdn.media.amplience.net/i/mrpricegroup/01_102217959_SI_11?$preset$&w=320'
        },
        {
            id:'MARIA HEEL',
            title:'MARIA OLD SCHOOL WOMEN HEELS CREAMISH PINK',
            price:229.99,
            rating:5,
            image:'https://cdn.media.amplience.net/i/mrpricegroup/01_102004262_SI_11?$preset$&w=320'
        },
        {
            id:'CAPA WOMEN HEELS',
            title:'CAPA WOMEN PLASTIC LOW HEELS',
            price:59.99,
            rating:2,
            image:'https://cdn.media.amplience.net/i/mrpricegroup/01_101837835_SI_11?$preset$&w=320'
        },
        {
            id:'ARQUIVOS SLIDE',
            title:'ARQUIVOS SLIDE MEN BLACK EMBOSSED SANDALS.',
            price:169.95,
            rating:4,
            image:'https://thefoschini.vtexassets.com/arquivos/ids/89401698-800-800?v=638326375821970000&width=800&height=800&aspect=true'
        },
        {
            id:'STEVE MADDEN BLACK SNEAKERS',
            title:'STEVE MADDEN BLACK STYLED SNEAKERS',
            price:1200.95,
            rating:5,
            image:'https://stevemadden.co.za/cdn/shop/products/STEVEMADDEN-SHOES_POSSESSION_BLACK-1_grande.jpg?v=1683808967'
        },
        {
            id:'MCENROE',
            title:'MCENROE MINIMALIST LOW TOP SNEAKERS.',
            price:129.59,
            rating:3,
            image:'https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensOCT-74_360x.jpg?v=1697453012'
        },
        {
            id:'MANCINI',
            title:'MANCINI MEN HARRACHI LOAFER',
            price:599.95,
            rating:3,
            image:'https://cdn.shopify.com/s/files/1/0384/6379/9429/files/CopyofShoeCityMensAugust_Sep-170_6290976a-978d-406b-a9ec-306d1235ea57_360x.jpg?v=1697112977'
        },
        {
            id:'NUDE SNEAKERS',
            title:'NUDE MEN KNITTED PU SNEAKER',
            price:399.99,
            rating:3,
            image:'https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensOCT-58_360x.jpg?v=1696862648'
        },
        {
            id:'GRANDE SANDALS',
            title:'GRANDE MEN TOEPOST PU WEDGE SOLE SANDALS',
            price:239.95,
            rating:2,
            image:'https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensOCT-14_360x.jpg?v=1696411375'
        },
        {
            id:'STONE SANDALS',
            title:'STONE MEN SANDALS EVA NEW BEACH THONG',
            price:164.95,
            rating:4,
            image:'https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensSep-2_360x.jpg?v=1692867041'
        },
        {
            id:'HINE FORMAL',
            title:'HINE MEN LACE UP DERBY FORMAL SHOES',
            price:599.99,
            rating:3,
            image:'https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensOCT-110_360x.jpg?v=1696497709'
        },
        {
            id:'RIP SNEAKER',
            title:'RIPP MEN GREY NEOPRENE/ PU COURT SNEAKER',
            price:379.95,
            rating:5,
            image:'https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensSep-30_360x.jpg?v=1693481467'
        },
        {
            id:'AVENTER SANDALS',
            title:'AVENTER MEN CUT OUT SLIDE',
            price:175.99,
            rating:3,
            image:'https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensAUG-78_360x.jpg?v=1692862096'
        },
        {
            id:'KOA FORMAL',
            title:'KAO FORMAL MEN HIGH SHINE LOAFER',
            price:879.99,
            rating:4,
            image:'https://cdn.shopify.com/s/files/1/0384/6379/9429/files/MensSep-58_360x.jpg?v=1692179365'
        },
        {
            id:'LENDE FORMAL',
            title:'LENDE MENS FORMAL LACE UP SHOES',
            price:679.97,
            rating:5,
            image:'https://cdn.shopify.com/s/files/1/0035/9405/9887/products/STEVEMADDEN_SHOES_ZATE_BLACK-LEATHER_SIDE_510x.jpg?v=1684937695'
        },
        {
            id:'ADIDAS SHOES',
            title:'ADIDAS PERFORMANCE PARK ST MENS SHOES CARBON ALUMINIUM EARTH STRATA',
            price:1499.99,
            rating:4,
            image:'https://cdn.shopify.com/s/files/1/0035/9405/9887/files/STEVEMADDEN-SHOES_PRIZE_GREY_SIDE_510x.jpg?v=1686832392'
        },
        {
            id:'NIKE COURT',
            title:'NIKE COURT VISION LO MENS SHOES SAIL/BROWN',
            price:1299.99,
            rating:5,
            image:'https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3387709/original.jpg'
        },
        {
            id:'NIKE AIR SNEAKERS',
            title:'NIKE AIR HUARACHE CRAFT MEN SHOES BLACK/NAVY',
            price:2239.99,
            rating:5,
            image:'https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3388239/original.jpg'
        },
        {
            id:'PUMA REBOUND',
            title:'PUMA REBOUND V6 HIGH MEN SHOES RED',
            price:849.99,
            rating:4,
            image:'https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3394814/original.jpg'
        },
        {
            id:'PUMA',
            title:'PUMA TRINITY OPEN ROAD MENS SHOES BLACK/HOT HEAT',
            price:1499.99,
            rating:5,
            image:'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3394434/original.jpg'
        },
        {
            id:'CONVERSE ALL STAR',
            title:'CONVERSE ALL STAR CHUCK TAYLOR LO MENS SNEAKER ',
            price:949.99,
            rating:5,
            image:'https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3395249/original.jpg'
        },
        {
            id:'ADIDAS PERFORMANCE SNEAKER',
            title:'ADIDAS PERFORMANCE MENS RUN50S MENS SHOES RED INK',
            price:999.99,
            rating:5,
            image:'https://assets.superbalistcdn.co.za/300x432/filters:quality(75):format(jpg)/3398914/original.jpg'
        },
        {
            id:'STEVE MADDEN SLATER SNEAKER',
            title:'STEVE MADDEN MEN SLATER BLACK MULTI-GRANDE',
            price:1199.99,
            rating:5,
            image:'https://stevemadden.co.za/cdn/shop/files/STEVEMADDEN-MENS_SLATER_BLACK-MULTI_grande.jpg?v=1685364088'
        },
        {
            id: 1,
            title: '',
            image: '',
            price: 12345,
            rating: 1,
        }
    ]
};

export default data;