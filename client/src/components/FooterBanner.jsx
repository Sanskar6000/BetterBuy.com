import React from 'react';
import { Shoes } from './img/weimg';
import './public/Products.css'
const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          
          <h3>Year's</h3>
          <h2>Biggest</h2>
          <h3>Sale</h3>
          
        </div>
        <div className="right">
          <p>Huge Discounts</p>
          <h3>Monsoon Sale</h3>
          <p>Best Brand Product Under sale In India</p>
         
            <h2>Upto 70% OFF</h2>
            <p>On Top Brands</p>
          
        </div>
         <Shoes/>
       
      </div>
    </div>
  )
}

export default FooterBanner