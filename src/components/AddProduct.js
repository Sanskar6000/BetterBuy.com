import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    <div>
      <form onSubmit={createEntry}>
        <input
          name="id"
          required
          value={product.id}
          onChange={onChangeInput}
          placeholder="id"
        />
        <input
          name="image"
          required
          value={product.image}
          onChange={onChangeInput}
          placeholder="image"
        />
        <input
          name="name"
          required
          value={product.name}
          onChange={onChangeInput}
          placeholder="name"
        />
        <input
          name="stars"
          required
          value={product.stars}
          onChange={onChangeInput}
          placeholder="stars"
        />
        <input
          name="rating"
          required
          value={product.rating}
          onChange={onChangeInput}
          placeholder="rating"
        />
        <input
          name="price"
          required
          value={product.price}
          onChange={onChangeInput}
          placeholder="price"
        />
        <textarea
          name="description"
          required
          value={product.description}
          onChange={onChangeInput}
          placeholder="description"
        />
        <input
          name="serialnumber"
          required
          value={product.serialnumber}
          onChange={onChangeInput}
          placeholder="serialnumber"
        />
        <input
          name="warrantyduration"
          required
          value={product.warrantyduration}
          onChange={onChangeInput}
          placeholder="warrantyduration"
        />
        <input
          name="warrantyconditions"
          required
          value={product.warrantyconditions}
          onChange={onChangeInput}
          placeholder="warrantyconditions"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddProduct;
