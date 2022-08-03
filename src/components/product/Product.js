import React from "react";
import { useStateValue } from "../../state/StateProvider";
import "./styles.css";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.img,
        price: props.price,
      },
    });
  };

  return (
    <div className="product-container">
      <img src={props.img} alt="product" />
      <div className="product-info">
        <h4>${props.price}</h4>
        <p>{props.title}</p>
      </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
