import React, { useEffect, useReducer, useState } from 'react';

import Header from './Header';
import ProductSchema from './ProductSchema';
import './public/Products.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeroBanner from './HeroBanner';
import Footer from './Footer';
import FooterBanner from './FooterBanner';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [entries, setEntries] = useState([]);
  const url = 'http://localhost:8000/api/';

  // //Fetching Products
  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const getProducts = () => {
  //   axios
  //     .get(`${url}products`)
  //     .then((response) => {
  //       console.log(response);
  //       const allProducts = response.data;
  //       setProducts(allProducts);
  //     })
  //     .catch((error) => console.log(`Error: ${error}`));
  // };
  const getEntries = async () => {
    const res = await axios.get('http://localhost:8000/api/entries');
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
