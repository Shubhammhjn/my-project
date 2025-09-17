import React from 'react';
import './ProductCard.css'; // Make sure to create this CSS file

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <h3 className="product-name">{props.name}</h3>
      <p className="product-price">Price: ${props.price}</p>
      <p className="product-status">Status: {props.status}</p>
    </div>
  );
};

export default ProductCard;