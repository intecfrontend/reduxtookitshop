import React from "react";
import Products from "./components/Product/Products";
import Cart from "./components/Cart/Cart";
import Filters from "./components/Filter/Filters";

function App() {
  return (
    <div>
      <Filters />
      <Products />
      <Cart />

    </div>
  );
}

export default App;
