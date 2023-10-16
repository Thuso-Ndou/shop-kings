import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from './StateProvider';

function Header() {
  const [{ cart }] = useStateValue();
  return (
    <nav className='header'>
        {/* logo */}
        <Link to='/'>
            <img className='header__logo' src = 'https://raw.githubusercontent.com/Thuso-Ndou/Shop-Kings-Images/main/logo.svg' alt=''/>
        </Link>

        {/* search bar */}
        <div className='header__search'>
            <input type='text' className='header__searchInput' />
            <SearchIcon className='header__searchIcon'/>
        </div>

      <div className='header__nav'>
      <Link className='header__link' to='/'>
          <div className='header__option'>
              <span className='header__optionLineOne'>Men </span>
          </div>
        </Link>

        <Link className='header__link' to='/'>
          <div className='header__option'>
              <span className='header__optionLineOne'>Women </span>
          </div>
        </Link>

        <Link className='header__link' to='/'>
          <div className='header__option'>
              <span className='header__optionLineOne'>About </span>
          </div>
        </Link>

        <Link className='header__link' to='/login'>
          <div className='header__option'>
              <span className='header__optionLineOne'>Hello</span>
              <span className='header__optionLineTwo'>Sign In</span>
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