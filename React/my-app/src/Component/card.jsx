import React from "react";
import "./style.css"

export default function Card({name,price,imageUrl}) {
    return (
    <div className="product-card">
      <img className="product-image" src={imageUrl} alt={name} />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">Price: ₹{price}</p>
      <button className="buy-button">Buy Now</button>
    </div>
  );
}

