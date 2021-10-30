import Icon from "./Icon";
import "../../App.css";
const cartItems = [
  { id: 1, name: "Apple", quantity: 10, price: 250 },
  { id: 2, name: "Orange", quantity: 5, price: 150 }
];
const CartItem = cartItem => {
  return (
    <div>

      <div className="cartItemDescContainer">
        <b>Name: {cartItem.name}</b>
        <b>Quantity: {cartItem.quantity}</b>
        <b>Price: {cartItem.price}</b>
      </div>
      <div className="cartItemRemoveButtonContainer">
        <span>
          <Icon />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
