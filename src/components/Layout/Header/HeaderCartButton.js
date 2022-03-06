import React, { useEffect, useContext, useState } from "react";
import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../../store/cart-context";

function HeaderCartButton(props) {
  const { onShowCart } = props;
  const [isCartButtonAnimated, setIsCartButtonAnimated] = useState(false);
  const cartContext = useContext(CartContext);
  const numberOfCartItems = cartContext.items.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    },
    0
  );

  useEffect(() => {
    if (cartContext.totalAmount === 0) {
      return;
    }
    setIsCartButtonAnimated(true);
    const timer = setTimeout(() => {
      setIsCartButtonAnimated(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.totalAmount]);

  return (
    <button
      className={`${classes.button} ${
        isCartButtonAnimated ? classes.bump : ""
      }`}
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
