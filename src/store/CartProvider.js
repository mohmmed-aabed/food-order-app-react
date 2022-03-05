import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM_TO_CART") {
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.quantity;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    let updatedItems;
    if (existingItemIndex === -1) {
      updatedItems = [...state.items, action.payload];
    } else {
      const existingCartItem = state.items[existingItemIndex];
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.payload.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === "REMOVE_ITEM_FROM_CART") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload
    );
    const existingCartItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (state.items[existingItemIndex].quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.payload);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else {
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
