import "../../App.css";
import {useState} from 'react';
const QuantityButton = ({ setQuantity, quantity }) => {
  const substractQuantity = () => {
    if (quantity <= 1) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };

  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  return (
    <div className="quantityButton">
      <button onClick={substractQuantity}>&#8722;</button>
      <span>{quantity}</span>
      <button onClick={addQuantity}>&#43;</button>
    </div>
  );
};

export default QuantityButton;
