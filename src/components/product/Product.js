import React from "react";
import { useStateValue } from "../../state/StateProvider";
import "./styles.css";

function Product({ id, title, img, price }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: img,
        price: price,
      },
    });
  };

  return (
    <div className="product-container">
      <img src={img} alt="product" />
      <div className="product-info">
        <h4>${price}</h4>
        <p>{title}</p>
      </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
