import React from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
      <Header />
      <Meals />
      <Cart />
    </>
  );
}

export default App;
