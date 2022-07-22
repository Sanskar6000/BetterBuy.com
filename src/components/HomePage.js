import React, { useEffect, useReducer, useState } from 'react';

import Header from './Header';
import ProductSchema from './ProductSchema';

import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
  const [products, setProducts] = useState([]);

  const url = 'http://localhost:5000/api/';

  //Fetching Products
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get(`${url}products`)
      .then((response) => {
        console.log(response);
        const allProducts = response.data;
        setProducts(allProducts);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  return (
    <div>
      <Header />

      {products.map((product) => (
        <ProductSchema product={product}></ProductSchema>
      ))}
    </div>
  );
}

export default HomePage;
