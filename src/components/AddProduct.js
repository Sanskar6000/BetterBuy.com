import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './public/AddProduct.css';
import Header from './Header.js';

function AddProduct() {
  const [product, setProduct] = useState({
    id: '',
    image: '',
    name: '',
    stars: '',
    rating: '',
    price: '',
    slug: 'temp',
    description: '',
    countInStock: 'temp',
    customername: 'temp',
    serialnumber: '',
    issuetime: 'temp',
    warrantyduration: '',
    warrantyconditions: '',
  });

  const navigate = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const createEntry = async (e) => {
    e.preventDefault();
    try {
      const {
        id,
        image,
        name,
        stars,
        rating,
        price,
        slug,
        description,
        countInStock,
        customername,
        serialnumber,
        issuetime,
        warrantyduration,
        warrantyconditions,
      } = product;
      const newEntry = {
        id,
        image,
        name,
        stars,
        rating,
        price,
        slug,
        description,
        countInStock,
        customername,
        serialnumber,
        issuetime,
        warrantyduration,
        warrantyconditions,
      };
      await axios.post('http://localhost:8000/api/entries', newEntry);

      return navigate.push('/');
    } catch (error) {
      window.location.href = '/';
    }
  };

  return (
    <>
      <Header />
      <div className="back">
        <form className="form" onSubmit={createEntry}>
          <div className="title">Welcome</div>
          <div className="subtitle">Add Products Of your own</div>
          <div className="input-container ic1">
            <input
              className="input"
              name="id"
              required
              value={product.id}
              onChange={onChangeInput}
              placeholder="Id"
            />
            <div className="cut"></div>
          </div>

          <div className="input-container ic1">
            <input
              className="input"
              name="image"
              required
              value={product.image}
              onChange={onChangeInput}
              placeholder="Image"
            />
            <div className="cut"></div>
          </div>

          <div className="input-container ic1">
            <input
              className="input"
              name="name"
              required
              value={product.name}
              onChange={onChangeInput}
              placeholder="Name"
            />
            <div className="cut"></div>
          </div>

          <div className="input-container ic1">
            <input
              className="input"
              name="stars"
              required
              value={product.stars}
              onChange={onChangeInput}
              placeholder="Stars"
            />
            <div className="cut"></div>
          </div>

          <div className="input-container ic1">
            <input
              className="input"
              name="rating"
              required
              value={product.rating}
              onChange={onChangeInput}
              placeholder="Rating"
            />
            <div className="cut"></div>
          </div>

          <div className="input-container ic1">
            <input
              className="input"
              name="price"
              required
              value={product.price}
              onChange={onChangeInput}
              placeholder="Price"
            />
            <div className="cut"></div>
          </div>

          <div className="input-container ic1">
            <textarea
              className="input"
              name="description"
              required
              value={product.description}
              onChange={onChangeInput}
              placeholder="Description"
            />
            <div className="cut"></div>
          </div>

          <div className="input-container ic1">
            <input
              className="input"
              name="serialnumber"
              required
              value={product.serialnumber}
              onChange={onChangeInput}
              placeholder="Serial Number"
            />
            <div className="cut"></div>
          </div>

          <div className="input-container ic1">
            <input
              className="input"
              name="warrantyduration"
              required
              value={product.warrantyduration}
              onChange={onChangeInput}
              placeholder="Warranty Duration"
            />
            <div className="cut"></div>
          </div>

          <div className="input-container ic1">
            <input
              className="input"
              name="warrantyconditions"
              required
              value={product.warrantyconditions}
              onChange={onChangeInput}
              placeholder="Warranty Conditions"
            />
            <div className="cut"></div>
          </div>
          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </>
  );
}

export default AddProduct;
