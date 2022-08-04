import React from "react";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import { useStateValue } from "../../state/StateProvider";
import "./styles.css";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);

  const totalPrice = () => {
    let arrCopy = basket;
    let price = 0;
    for (let i = 0; i < arrCopy.length; i++) {
      console.log(arrCopy[i]);
      price = price + arrCopy[i].price;
    }
    return price;
  };

  const products = basket.map((item) => {
    return (
      <CheckoutProduct
        title={item.title}
        img={item.image}
        price={item.price}
        id={item.id}
      />
    );
  });

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <h2>Your shopping basket</h2>
        {products}
      </div>
      <div className="checkout-right">
        <div>
          <p>
            Subtotal({basket.length} items): ${totalPrice()}
          </p>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
