// Search.js
import React from 'react';
import SearchResults from './SearchResults';

function Search({ filteredProducts }) {
  return (
    <div>
      <h1>Search Results</h1>
      <SearchResults filteredProducts={filteredProducts} />
    </div>
  );
}

export default Search;
