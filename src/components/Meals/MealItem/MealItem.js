import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import formatPriceDollar from "../../../helpers/format-price";
import CartContext from "../../../store/cart-context";

function MealItem(props) {
  const cartContext = useContext(CartContext);

  const { id, name, description, price } = props;

  const addItemToCart = (quantity) => {
    const newItem = {
      id,
      name,
      price,
      quantity,
    };
    cartContext.addItem(newItem);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formatPriceDollar(price)}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addItemToCart} />
      </div>
    </li>
  );
}

export default MealItem;
