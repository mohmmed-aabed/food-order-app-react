import classes from "./CartItem.module.css";
import formatPriceDollar from "../../helpers/format-price";

const CartItem = ({ price, name, quantity, onAdd, onRemove }) => {
  const formattedPrice = formatPriceDollar(price);

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{formattedPrice}</span>
          <span className={classes.amount}>x {quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
