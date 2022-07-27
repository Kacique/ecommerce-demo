import React from "react";
import "./styles.css";

function Product(props) {
  return (
    <div className="product-container">
      <img src={props.img} alt="product" />
      <div className="product-info">
        <h4>{props.price}</h4>
        <p>{props.title}</p>
      </div>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
