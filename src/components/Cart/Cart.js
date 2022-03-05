import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import Backdrop from "../UI/Backdrop";
import CartContext from "../../store/cart-context";
import formatPriceDollar from "../../helpers/format-price";

const CART_ITEMS = [
  {
    id: "m1",
    name: "Sushi",
    quantity: 1,
    price: 2299,
  },
  {
    id: "m2",
    name: "Schnitzel",
    quantity: 2,
    price: 1650,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    quantity: 3,
    price: 1299,
  },
];

function Cart({ onHideCart }) {
  const cartContext = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {CART_ITEMS.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <>
      <Backdrop onHideCart={onHideCart} />
      <Modal>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{formatPriceDollar(cartContext.totalAmount)}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={onHideCart}>
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </Modal>
    </>
  );
}

export default Cart;
