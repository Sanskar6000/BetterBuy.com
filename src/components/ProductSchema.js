import React from 'react';
import { Link } from 'react-router-dom';

function ProductSchema(props) {
  const { product } = props;
  return (
    <div key={product.key} className="product">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} />
      </Link>

      <Link to={`/product/${product.slug}`}>
        <p>{product.name}</p>
      </Link>

      <div className="productRating">
        <span>{product.stars}</span>
        <span className="ratingNumber"> {product.rating}</span>
      </div>

      <p className="productPrice">
        <span>₹ </span>
        {product.price}
      </p>
    </div>
  );
}

export default ProductSchema;
