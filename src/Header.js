// Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
import data from './data'; // Import the product data

function Header({ onSearch }) { // Add onSearch prop
  const [{ cart, user }] = useStateValue();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');

  const handleAuthentication = () => {
    if(auth){
      auth.signOut();
    }
  }

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSearchClick = () => {
    if (searchQuery.trim() !== '') {
      const filteredProducts = data.productData.filter((product) => {
        const productName = (product.title || '').toLowerCase();
        return productName.includes(searchQuery.toLowerCase());
      });
      onSearch(filteredProducts);
      navigate(`/search?q=${searchQuery}`, { replace: true });
    } else {
      alert('Please enter a search query.'); // You can customize this message
    }
  };

  return (
    <nav className='header'>
        {/* logo */}
        <Link to='/'>
            <img className='header__logo' src='https://raw.githubusercontent.com/Thuso-Ndou/Shop-Kings-Images/main/logo.svg' alt=''/>
        </Link>

        {/* search bar */}
        <div className='header__search'>
            <input type='text' className='header__searchInput' placeholder='Search Here...' value={searchQuery}
            onChange={handleSearchInputChange}/>
            <SearchIcon className='header__searchIcon'  onClick={handleSearchClick}/>
        </div>

      <div className='header__nav'>
      <Link className='header__link' to='/men'>
          <div className='header__option'>
              <span className='header__optionLineOne'>Men </span>
              <span className='header__optionLineTwo'>Clothes</span>
          </div>
        </Link>

        <Link className='header__link' to='/women'>
          <div className='header__option'>
              <span className='header__optionLineOne'>Women </span>
              <span className='header__optionLineTwo'>Clothes</span>
          </div>
        </Link>

        <Link className='header__link' to='/orders'>
          <div className='header__option'>
              <span className='header__optionLineOne'>Recent </span>
              <span className='header__optionLineTwo'>Orders</span>
          </div>
        </Link>

        <Link className='header__link' to='/about'>
          <div className='header__option'>
              <span className='header__optionLineOne'>About </span>
              <span className='header__optionLineTwo'>Store</span>
          </div>
        </Link>

        <Link className='header__link' to={!user && '/login'}>
          <div onClick={handleAuthentication}  className='header__option'>
              <span className='header__optionLineOne'>{!user ? 'Hello Guest' : user.email}</span>
              <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link className='header__link' to='/checkout'>
          <div className='header__optionCart'>
              {/* shopping cart icon */}
              <ShoppingBasketIcon />
              {/* Number of items */}
              <span className='header__optionLineTwo header__cartCount'>{cart?.length}</span>
          </div>
        </Link>

      </div>
    </nav>
  )
}

export default Header;