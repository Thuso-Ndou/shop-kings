import React, { useEffect } from 'react';
import Product from './Product';
import { useLocation } from 'react-router-dom';

function Search({ filteredProducts, setFilteredProducts }) {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    if (!searchQuery) {
      setFilteredProducts([]); // Reset filteredProducts if searchQuery is empty
    }
  }, [searchQuery, setFilteredProducts]);

  return (
    <div>
      <h1>Search Results for: {searchQuery}</h1>
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
