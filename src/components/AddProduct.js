import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddProduct() {
  const [products, setProducts] = useState([]);

  //   const url = 'http://localhost:8000/api/';

  //   //Fetching Products
  //   useEffect(() => {
  //     getProducts();
  //   }, []);

  //   const getProducts = () => {
  //     axios
  //       .get(`${url}products`)
  //       .then((response) => {
  //         console.log(response);
  //         const allProducts = response.data;
  //         setProducts(allProducts);
  //       })
  //       .catch((error) => console.log(`Error: ${error}`));
  //   };

  const [product, setProduct] = useState({
    id: '',
    image: '',
    name: '',
    stars: '',
    rating: '',
    price: '',
    slug: '',
    description: '',
    countInStock: '',
    customername: '',
    serialnumber: '',
    issuetime: '',
    warrantyduration: '',
    warrantyconditions: '',
  });
  const [err, setErr] = useState('');

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    setErr('');
  };

  const insertObject = (e) => {
    e.preventDefault();
    products.push(product);
    console.log(products);
  };

  return (
    <div>
      <form onSubmit={insertObject}>
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
        <input
          name="slug"
          required
          value={product.slug}
          onChange={onChangeInput}
          placeholder="slug"
        />
        <input
          name="description"
          required
          value={product.description}
          onChange={onChangeInput}
          placeholder="description"
        />
        <input
          name="countInStock"
          required
          value={product.countInStock}
          onChange={onChangeInput}
          placeholder="countInStock"
        />
        <input
          name="customername"
          required
          value={product.customername}
          onChange={onChangeInput}
          placeholder="customername"
        />
        <input
          name="serialnumber"
          required
          value={product.serialnumber}
          onChange={onChangeInput}
          placeholder="serialnumber"
        />
        <input
          name="issuetime"
          required
          value={product.issuetime}
          onChange={onChangeInput}
          placeholder="issuetime"
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
        <input type="submit" value="Sunmit" />
      </form>
    </div>
  );
}

export default AddProduct;
