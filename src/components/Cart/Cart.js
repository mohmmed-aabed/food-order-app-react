import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import Backdrop from "../UI/Backdrop";
import CartContext from "../../store/cart-context";
import formatPriceDollar from "../../helpers/format-price";
import CartItem from "./CartItem";

function Cart(props) {
  const { onHideCart } = props;
  const cartContext = useContext(CartContext);
  const cartHasItems = cartContext.items.length > 0;
  const totalAmount = formatPriceDollar(cartContext.totalAmount);

  const addItem = (item) => {
    cartContext.addItem({ ...item, quantity: 1 });
  };

  const removeItem = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onAdd={addItem.bind(null, item)}
          onRemove={removeItem.bind(null, item.id)}
        />
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
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={onHideCart}>
            Close
          </button>
          {cartHasItems && <button className={classes.button}>Order</button>}
        </div>
      </Modal>
    </>
  );
}

export default Cart;
