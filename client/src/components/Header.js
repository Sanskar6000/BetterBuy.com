import React from 'react';

import { Link } from 'react-router-dom';
import './public/Header.css';
import { Webimage1 } from './img/weimg';
const Navbar = (props) => {
  const { user } = props;

  return (
    <>
      <div className="n">
        <nav>
          <div className="c">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h1 className="Logo_name">
                <span className="Logo_name_span">&</span>BetterBuy
              </h1>
            </Link>
//             <Link to="/add-product" style={{ textDecoration: 'none' }}>
//               <h5>Add Product</h5>
//             </Link>
           
              <h5>Add Product</h5>
            
            <h5>About Us</h5>

            {/* <input
              id="searchbar"
              type="text"
              name="search"
              placeholder="   Search..."
            ></input> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
