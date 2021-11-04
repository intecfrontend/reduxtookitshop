import React from "react";
import CartItem from "./CartItem.js";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);
  return (
    <div className="borderedContainer cartContainer">
      <h2 className="title">Cart</h2>
      <div className="cartTotalPriceContainer">
        <p>Total:</p>
        <span className="cartTotalPrice">${totalPrice}</span>
      </div>
      {cartItems.map(cartItem => (
        <CartItem cartItem={cartItem} />
      ))}
    </div>
  );
};

export default Cart;
