import React from "react";
import { useStateValue } from "../../state/StateProvider";
import "./styles.css";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  const removeProduct = () => {
    console.log("removed");
  };

  const basketItems = basket.map((item) => {
    return (
      <div className="product-container">
        <img src={item.image} alt="product" />
        <div className="product-info">
          <h4>{item.price}</h4>
          <p>{item.title}</p>
        </div>
        <button onClick={removeProduct}>Remove from Basket</button>
      </div>
    );
  });

  const totalPrice = () => {
    for (let i = 0; i < basket.length; i++) {
      console.log(basket[i].price);
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <h2>Your shopping basket</h2>
        {basketItems}
      </div>
      <div className="checkout-right">
        <p>Subtotal({totalPrice()})</p>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
