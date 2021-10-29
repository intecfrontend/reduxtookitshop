import React from "react";
import Products from "./components/Product/Products";
import Cart from "./components/Product/Cart";
import Filters from "./components/Product/Filters";

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
