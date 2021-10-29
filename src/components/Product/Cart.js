import React from "react";

const Cart = () => {
  return (
    <div className="borderedContainer cartContainer">
      <h2 className="title">Cart</h2>
      <div className="cartTotalPriceContainer">
        <p>Total:</p>
        <span className="cartTotalPrice">$250</span>
      </div>
    </div>
  );
};

export default Cart;
