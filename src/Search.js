import React from 'react';
import SearchResults from './SearchResults';
import { useLocation } from 'react-router-dom';

function Search({ filteredProducts }) {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');

  console.log(searchQuery);

  return (
    <div>
      <h1>Search Results for: {searchQuery}</h1>
      <SearchResults filteredProducts={filteredProducts} />
    </div>
  );
}

export default Search;
