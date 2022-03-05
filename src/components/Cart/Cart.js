import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import Backdrop from "../UI/Backdrop";

const CART_ITEMS = [
  {
    id: "m1",
    name: "Sushi",
    amount: 1,
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    amount: 2,
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    amount: 3,
    price: 12.99,
  },
];

function Cart() {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {CART_ITEMS.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <>
      <Backdrop />
      <Modal>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>$35.55</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
      </Modal>
    </>
  );
}

export default Cart;
