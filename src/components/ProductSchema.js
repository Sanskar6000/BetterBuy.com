import React from 'react';
import { Link } from 'react-router-dom';
import './public/Products.css'
function ProductSchema(props) {
  const { product } = props;
  return (
    
    <div key={product.key} className="product-card">
      <Link to={`/product/ ${product.slug}`}>
        <img 
         
   
         width={250}
         height={250}
         
         className="product_img" src={product.image} alt={product.name} />
      </Link>

      <Link to={`/product/${product.slug}`}>
        <p className="product-name" >{product.name}</p>
      </Link>

      <div className="productRating">
        <span>{product.stars}</span>
        <span className="ratingNumber"> {product.rating}</span>
      </div>

      <p className="product-price">
        <span>₹ </span>
        {product.price}
      </p>
    </div>
  );
}

export default ProductSchema;
