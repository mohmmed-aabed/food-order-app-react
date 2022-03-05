import React from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

function MealItem(props) {
  const { id, name, description, price } = props;
  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
}

export default MealItem;
