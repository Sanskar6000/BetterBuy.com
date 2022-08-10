import React, { useEffect, useState } from 'react';

import Header from './Header';
import ProductSchema from './ProductSchema';
import './public/Products.css';
import axios from 'axios';

import HeroBanner from './HeroBanner';
import Footer from './Footer';
import FooterBanner from './FooterBanner';

function HomePage() {
  const [entries, setEntries] = useState([]);

  const getEntries = async () => {
    const res = await axios.get('/api/entries');
    setEntries(res.data);
  };

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <div>
      <Header />
      <section className="hero">
        <FooterBanner />
        <div className="products-heading">
          <h2>Best Seller Product</h2>
          <p>Wear walk Run Repeat</p>
        </div>
        <div className="products-container">
          {entries.map((product) => (
            <ProductSchema product={product}></ProductSchema>
          ))}
        </div>

        <HeroBanner />

        <Footer />
      </section>
    </div>
  );
}

export default HomePage;
