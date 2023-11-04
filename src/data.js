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
            image:'https://www.shoecity.co.za/cdn/shop/products/MensFeb_23-29.jpg?v=1675764629'
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
            id:  'Collared jersey dress',
            title:  'Collared jersey dress - white',
            price: 259.96,
            rating: 4,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3408401/original.jpg'
        },
        {
            id: 'dharma floral procelain dress',
            title: 'Tori tie up mini dress - dharma floral procelain',
            price: 599.89,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3407744/original.jpg'
        },
        {
            id: 'Dress vuelo',
            title: 'Dress vuelo - medium purple',
            price: 350.65,
            rating: 4,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3378509/original.jpg'   
        },
        { 
            id: 'Dress rosh',
            title: 'Dress rosh - red',
            price: 270.00,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3379250/original.jpg'
        },
        { 
            id: 'Dress janice',
            title: 'Dress janice - light/pastel brown',
            price: 980.65,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3377954/original.jpg'  
        },
        {
            id: 'Dress rufi',
            title: 'Dress rufi - light pastel orange',
            price: 756.98,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3378791/original.jpg' 
        },
        {
            id: 'Dress linda-h',
            title: 'Dress linda-h - dark blue',
            price: 378.75,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3379404/original.jpg' 
        },
        {  
            id: 'Satin mini slip dress with trim detail',
            title: 'Satin mini slip dress with trim detail- dragon fire',
            price: 1200.65,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3405857/original.jpg'          
        },
        { 
            id: 'Dress flash',
            title: 'Dress flash - natural',
            price: 320.65,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3379362/original.jpg'              
        },
        {
            id: 'Print sleeveless midi dress', 
            title: 'Print sleeveless midi dress - off white',
            price: 630.87,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3406570/original.jpg'
        },
        {
            id: 'Print mandarin collar maxi dress',
            title: 'Print mandarin collar maxi dress - pink diverse',
            price: 600.86,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3405800/original.jpg'  
        },
        {
            id: 'Belted sleeveless dress', 
            title: 'Belted sleeveless dress - pink',
            price: 819.99,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3405588/original.jpg'  
        },
        {     
            id: 'Dress fiona', 
            title: 'Dress fiona - mid green',
            price: 899.99,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3379304/original.jpg' 
        },
        {        
            id: 'Dress Loren',
            title: 'Dress Loren - mid-pink',
            price: 1500.00,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3378532/original.jpg'
        },
        {      
            id: 'Mini trapeze dress',
            title: 'Mini trapeze dress with tie detail - black',
            price: 499.97,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3405889/original.jpg'    
        },
        {     
            id: 'Pleated metallic halter maxi dress', 
            title: 'Pleated metallic halter maxi dress - silver',
            price: 745.98,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3405673/original.jpg'  
        },
        {  
            id: 'halter neck ruched midi bodycon dress',
            title: 'halter neck ruched midi bodycon dress - black',
            price: 699.99,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3405922/original.jpg'    
        },
        {      
            id: 'Tie-detail linen-blend dress',
            title: 'Tie-detail linen-blend dress - black/patterned',
            price: 529.87,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3398927/original.jpg'
        },
        {       
            id: 'Cotton bodycon dress',
            title: 'Cotton bodycon dress - red',
            price: 199.98,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3398553/original.jpg'
        },
        {  
            id: 'Dress mare',
            title: 'Dress mare - black',
            price: 921.99,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3374648/original.jpg'   
        },
        {   
            id: 'Dress tina',
            title: 'Dress tina - silver',
            price: 473.78,
            rating:5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3375687/original.jpg'  
        },
        { 
            id: 'Haven Wide', 
            title: 'Haven Wide Leg Pant',
            price: 599.86,
            rating: 5,
            image: 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-women/default/dw54d6b531/2056694/2056694-01-1.jpg?sw=800&sh=1200&sm=fit'
        },
        { 
            id: 'Bobbie Cargo',
            title: 'Bobbie Cargo Pant',
            price: 699.89,
            rating: 5,
            image: 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-women/default/dw3f645089/2054319/2054319-03-2.jpg?sw=640&sh=960&sm=fit'  
        },
        {                  
            id: 'Curvy Stretch',
            title: 'Curvy Stretch Straight Jean',
            price: 680.54,
            rating: 5,
            image: 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-women/default/dw2534ece8/2056530/2056530-02-2.jpg?sw=640&sh=960&sm=fit'
        },
        {             
            id: 'Loose Straight',
            title: 'Loose Straight Jean',
            price: 478.47,
            rating: 5,
            image: 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-women/default/dw7e4800a5/2053335/2053335-66-2.jpg?sw=640&sh=960&sm=fit' 
        },
        {             
            id: 'Bella Bootleg',
            title: 'Bella Bootleg Pant',
            price: 350.76, 
            rating: 5,
            image: 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-women/default/dwf1520a81/2056807/2056807-01-2.jpg?sw=640&sh=960&sm=fit'   
        },
        {                   
            id: 'Utility Denim',
            title: 'Utility Denim Long Overall',
            price: 986.56,
            rating: 5,
            image: 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-women/default/dwb4711076/2054906/2054906-08-2.jpg?sw=640&sh=960&sm=fit'  
        },
        {            
            id: 'Plush Essential',
            title: 'Plush Essential Gym Trackpant',
            price: 314.45,
            rating: 5,
            image: 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-body/default/dw8e95be11/6335821/6335821-15-2.jpg?sw=640&sh=960&sm=fit' 
        },
        {             
            id: 'High Waisted Dylan',
            title: 'High Waisted Dylan Legging',
            price: 174.43, 
            rating: 5,
            image: 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-women/default/dw9b728c5f/2007848/2007848-02-2.jpg?sw=640&sh=960&sm=fit'    
        },
        {             
            id: 'Cargo trousers', 
            title: 'Cargo trousers - black',
            price: 373.95,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3414130/original.jpg'  
        },
        {             
            id: 'Trousers bo',
            title: 'Trousers bo - light beige',
            price: 1199.56,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3376150/original.jpg'  
        },
        {            
            id: 'Feather print trousers',
            title: 'Feather print trousers - black',
            price: 249.54,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3414016/original.jpg'   
        },
        {            
            id: 'Print trousers',
            title: 'Print trousers - black',
            price: 263.65,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3414041/original.jpg'   
        },
        {            
            id: 'Slim leg trousers',
            title: 'Slim leg trousers - khaki',
            price: 699.65,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3414114/original.jpg'  
        },
        {            
            id: 'Linen-blend pull-on trousers', 
            title: 'Linen-blend pull-on trousers - cream leaf-patterned',
            price: 349.89,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3410259/original.jpg'    
        },
        {             
            id: 'STELLA MORGAN',
            title: 'Open side harem pants with front detail - black',
            price: 499.87,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3412824/original.jpg'  
        },
        {            
            id: 'Trousers loren', 
            title: 'Trousers loren - mid green',
            price: 568.65,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3378663/original.jpg'   
        },
        {                 
            id: 'Wide trousers',
            title: 'Wide trousers - light blue',
            price: 279.98,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3408962/original.jpg' 
        },
        {             
            id: 'Pull-on jersey trousers',
            title: 'Pull-on jersey trousers - beige',
            price: 249.99,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3408911/original.jpg'   
        },
        {             
            id: 'Flared leg trousers',
            title: 'Flared leg trousers - pink',
            price: 249.89,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3405711/original.jpg'
        },
        {             
            id: 'Trousers paloma', 
            title: 'Trousers paloma - green',
            price: 899.65,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3374783/original.jpg'   
        },
        {              
            id: 'Oversized printed t-shirt',
            title: 'Oversized printed t-shirt - blue',
            price: 157.54,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3414641/original.jpg'  
        },
        {             
            id:  'Cotton vest top', 
            title: 'Cotton vest top - red',
            price: 85.25,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3414626/original.jpg'  
        },
        {             
            id:  'Cotton T-shirt',
            title: 'Cotton T-shirt - purple',
            price: 79.89,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3414474/original.jpg'  
        },
        {             
            id:  'Linen-blend shirt',
            title: 'Linen-blend shirt - green', 
            price: 380.78,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3413753/original.jpg'  
        },
        {             
            id:  'Cropped lace top',
            title: 'Cropped lace top - light beige',
            price: 215.56,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3414163/original.jpg'  
        },
        {             
            id:  'V-neck blouse',
            title: 'V-neck blouse - black',
            price: 248.89,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3413544/original.jpg' 
        },
        {             
            id:  '2-Pack cropped tube tops',
            title: '2-Pack cropped tube tops - light pink & dark',
            price: 150.45,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3414507/original.jpg'  
        },
        {             
            id:  'Cropped strappy top',
            title: 'Cropped strappy top - light pink',
            price: 75.32,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3413608/original.jpg'  
        },
        {             
            id:  'Willa waffle short sleeve henley', 
            title: 'Willa waffle short sleeve henley - stripe alpine/forest/sage green',
            price: 279.65,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3394497/original.jpg'   
        },
        { 
            id:  'Fitted lcn graphic longline tee',
            title: 'Fitted lcn graphic longline tee - vintage white',
            price: 349.78,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3390721/original.jpg'  
        },
        {  
            id:  'Nyc stripe hoodie',
            title: 'Nyc stripe hoodie - white & navy',
            price: 550.64,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3412924/original.jpg' 
        },
        {  
            id:  'Graphic ringer rickie za headline logo stripe', 
            title: 'Graphic ringer rickie za headline logo stripe - gardenia/racing red',
            price: 330.99,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3402701/original.jpg' 
        },
        { 
            id: 'Rib-knit top', 
            title: 'Rib-knit top - dark grey', 
            price: 235.97,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3410898/original.jpg'  
        },
        {
            id:  'LINEN',
            title: 'LINEN SHORTS',
            price: 230,
            rating: 3,
            image: 'https://cdn.shopify.com/s/files/1/0243/3004/3455/files/CopyofCopyofCapture-1251_360x.jpg?v=1697724952',
        },
        {
            id:  'Mens Cargo',
            title: 'Mens Cargo Short',
            price: 289,
            rating: 5,
            image: 'https://www.picknpayclothing.co.za/media/catalog/product/cache/38bfb0e5b25353c4f7bc7d84e4c9d2c6/9/2/927883003_Cargo_Short_Camel_Front1.jpg',
        },
        {
            id:  'Mens Adventure',
            title: 'Mens Adventure Short',
            price: 230,
            rating: 5,
            image: 'https://www.picknpayclothing.co.za/media/catalog/product/cache/38bfb0e5b25353c4f7bc7d84e4c9d2c6/9/2/927850001_Blue_Adventure_Shorts_Front.jpg',
        },
        {
            id:  'Mens Printed Walk',
            title: 'Mens Printed Walk Short',
            price: 199,
            rating: 5,
            image: 'https://www.picknpayclothing.co.za/media/catalog/product/cache/38bfb0e5b25353c4f7bc7d84e4c9d2c6/image/5078259577/mens-printed-walk-short.jpg',
        },
        {
            id:  'Mens Chinos', 
            title: 'Mens Chinos - Regular Fit',
            price: 249,
            rating: 5,
            image: 'https://www.picknpayclothing.co.za/media/catalog/product/cache/3ff76aaa5c3f9b31919bd61f799d8fbf/9/1/913432001_Mens-Chinos-Regular-Fit_Front.jpg',
        },
        {
            id: 'Mens Cargo Pants',
            title: 'Mens Cargo Pants- carmel',
            price: 245,
            rating: 5,
            image: 'https://www.picknpayclothing.co.za/media/catalog/product/cache/38bfb0e5b25353c4f7bc7d84e4c9d2c6/9/2/923148001_Mens-Cargo-Pants_Front.jpg',
        },
        {
            id:  'Mens Chinos - Slim Fit',
            title: 'Mens Chinos - Slim Fit fatigue',
            price: 249,
            rating: 5,
            image: 'https://www.picknpayclothing.co.za/media/catalog/product/cache/38bfb0e5b25353c4f7bc7d84e4c9d2c6/9/1/913401011_Mens-Chinos-Slim-Fit_Front.jpg',
        },
        {
            id:  'Organic Cotton Vintage Logo Embroidered' ,
            title: 'Organic Cotton Vintage Logo Embroidered Joggers',
            price: 780,
            rating: 5,
            image: 'https://cdn.zando.co.za/p/427312-8920-213724-2-zoom.jpg',
        },
        {
            id:  'Organic Cotton Slim',
            title: 'Organic Cotton Slim Jeans',
            price: 1500,
            rating: 5,
            image: 'https://cdn.zando.co.za/p/432006-3589-600234-2-zoom.jpg',
        },
        {
            id:  'Organic Cotton Core Cargo',
            title: 'Organic Cotton Core Cargo Pants',
            price: 1799,
            rating: 5,
            image: 'https://cdn.zando.co.za/p/432004-3971-400234-2-zoom.jpg',
        },
        {
            id:  'Vintage ',
            title: 'Vintage Skinny Jeans',
            price: 1950,
            rating: 5,
            image: 'https://cdn.zando.co.za/p/432007-4314-700234-2-zoom.jpg',
        },
        {
            id:  'Core Sport',
            title: 'Core Sport Joggers',
            price: 460,
            rating: 4,
            image: 'https://cdn.zando.co.za/p/432008-3787-800234-2-zoom.jpg',
        },
        {
            id:  'Tech',
            title: 'Tech Joggers',
            price: 350,
            rating: 3,
            image: 'https://cdn.zando.co.za/p/430505-6529-505034-2-zoom.jpg',
        },
        {
            id:  'Essential Tapered Cuff',
            title: 'Essential Tapered Cuff Joggers',
            price: 1566,
            rating: 5,
            image: 'https://cdn.zando.co.za/p/429758-9463-857924-2-zoom.jpg',
        },
        {
            id:  'Vle stripe tee',
            title: 'Vle stripe tee - thrift olive marl & black',
            price: 699.56,
            rating: 3,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3415947/original.jpg',        
        }, 
        {
            id:  'Car icon print tee ',
            title: 'Car icon print tee - black',
            price: 349.76,
            rating: 4,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3418358/original.jpg',
        },
        {   
            id:  'Mens pjc short sleeve ribbed cuff tee',
            title: 'Mens pjc short sleeve ribbed cuff tee - yellow',
            price: 649.99,
            rating: 4,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3418001/original.jpg',      
        },
        {   
            id:  'Mens logo printed short sleeve ',
            title: 'Mens logo printed short sleeve golfer - navy',
            price: 1399.97,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3418144/original.jpg', 
        },
        {
            id:  'Men crest short sleeve golfer ',
            title: 'Men crest short sleeve golfer - navy',
            price: 1199.45,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3418034/original.jpg',
        },
        {
            id:  'Mens short sleeve flock logo tee',
            title: 'Mens short sleeve flock logo tee - navy',
            price: 799.78,
            rating: 4,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3418039/original.jpg', 
        },
        {
            id:  'Mens short sleeve big pony tee ',
            title: 'Mens short sleeve big pony tee - white',
            price: 699.98,
            rating: 4,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3418007/original.jpg',
        },
        {
            id:  'Mens heritage short sleeve',
            title: 'Mens heritage short sleeve tee - red',
            price: 599.65,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3418136/original.jpg',   
        },
        {
            id:  'Mens short sleeve eqestrian ',
            title: 'Mens short sleeve eqestrian tee - navy',
            price: 1099.98,
            rating: 5,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3418126/original.jpg',         
        },
        {
            id:  'Mosaic tee ',
            title: 'Mosaic tee - white',
            price: 349.98,
            rating: 4,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3416120/original.jpg',
        },
        {
            id:  'Stranded tee',
            title: 'Stranded tee - dark grey',
            price: 399.99,
            rating: 4,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3416181/original.jpg',        
        },
        {
            id:  'Relaxed fit cotton T-shirt',
            title: 'Relaxed fit cotton T-shirt - light grey & orange striped',
            price: 279.34,
            rating: 3,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3408242/original.jpg',         
        },
        {
            id:  'T-just-g9 t-shirt regular',
            title: 'T-just-g9 t-shirt regular - black',
            price: 899.97,
            rating: 4,
            image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3413240/original.jpg',
        },
    ]
};

export default data;