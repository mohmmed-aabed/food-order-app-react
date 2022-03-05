import React, { useContext } from "react";
import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../../store/cart-context";

function HeaderCartButton({ onShowCart }) {
  const cartContext = useContext(CartContext);
  const numberOfCartItems = cartContext.items.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    },
    0
  );

  return (
    <button
      className={`${classes.button} ${classes.bump}`}
      onClick={onShowCart}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
