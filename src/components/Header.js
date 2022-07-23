import React from 'react';

import { Link } from 'react-router-dom';
import './public/Header.css';
const Navbar = (props) => {
  const { user } = props;

  return (
    <>
      <div className="n">
        <nav>
          <div className="c">
            <Link to="/">
              {' '}
              <img
                className="headerLogo"
                src="https://i.postimg.cc/Dyy8jH0S/logo-bestd.jpg"
                alt="logo"
              />
            </Link>
            <h3>Better Buy</h3>
            <p>About Us</p>
            <Link to="/add-product">
              <p>Add Product</p>
            </Link>
            <input
              id="searchbar"
              type="text"
              name="search"
              placeholder="   Search for shoes..."
            ></input>
          </div>
          <div className="login1">
            <Link to="/login">
              <h3>Logout</h3>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
