import React from 'react';

import { Link } from 'react-router-dom';
import "./public/Header.css"


function Header() {
  return (
    // <div>
    //   <Link to="/">Flipkart</Link>
    // </div>
    <div className="header">
      <Link to="/">
        {' '}
        <img
          className="headerLogo"
          src="https://static.toiimg.com/thumb/msid-86006062/86006062.jpg?width=500&resizemode=4"
          alt="logo"
        />
      </Link>

      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />
        <i class="bi bi-search"></i>
      </div>

      <div className="headerNavbar">
        <Link to="/login">
          <div className="navbarOption">
            <span className="optionLineone">Hello</span>
            <span className="optionLinetwo">Sign in</span>
          </div>
        </Link>

        <div className="navbarOption">
          <span className="optionLineone">Returns</span>
          <span className="optionLinetwo">& Orders</span>
        </div>

        <Link to="/checkout">
          <div className="navbarOptionCart">
            <i class="bi bi-cart"></i>
            <span className="optionLinetwo cartCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;