import React from "react";
import CartItem from "./CartItem.js";
import { useSelector } from "react-redux";
import { getCartItems } from "../../features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  return (
    <div className="borderedContainer cartContainer">
      <h2 className="title">Cart</h2>
      <div className="cartTotalPriceContainer">
        <p>Total:</p>
        <span className="cartTotalPrice">$450</span>
      </div>
      {cartItems.map(cartItem => (
        <CartItem cartItem={cartItem} />
      ))}
    </div>
  );
};

export default Cart;
