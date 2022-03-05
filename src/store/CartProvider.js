import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      console.log(action.payload);
      const updatedItems = [...state.items, action.payload];
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.quantity;
      return { items: updatedItems, totalAmount: updatedTotalAmount };

    case "REMOVE_ITEM_FROM_CART":
      return;

    default:
      return state;
  }
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      dispatchCartAction({ type: "ADD_ITEM_TO_CART", payload: item });
    },
    removeItem: (id) => {
      dispatchCartAction({ type: "REMOVE_ITEM_FROM_CART", payload: id });
    },
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
