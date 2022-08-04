import React from "react";
import { useStateValue } from "../../state/StateProvider";
import "./styles.css";

function CheckoutProduct({ id, title, img, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeProduct = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="product-container">
      <img src={img} alt="product" />
      <div className="product-info">
        <h4>${price}</h4>
        <p>{title}</p>
      </div>
      <button onClick={removeProduct}>Remove from Basket</button>
    </div>
  );
}

export default CheckoutProduct;
