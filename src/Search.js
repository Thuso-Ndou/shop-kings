import React from 'react';
import Product from './Product';

function Search({ filteredProducts }) {
  return (
    <div className="product__home">
        <h1>Search results</h1>
        <div className="home__row">
        {filteredProducts.map(product => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
