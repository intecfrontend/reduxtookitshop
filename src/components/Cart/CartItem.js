import Icon from "./Icon";
import "../../App.css";
import {removeItemFromCart} from "../../features/cart/cartSlice";
import productsProvider from "../../features/product/products";
// const cartItems = [
//   { id: 1, name: "Apple", quantity: 10, price: 250 },
//   { id: 2, name: "Orange", quantity: 5, price: 150 }
// ];
const CartItem = ({ cartItem }) => {
  const product = productsProvider.find(p => p.id === cartItem.productId);
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <div className="cartItemDescContainer">
        <b>Name: {product.name}</b>
        <p>Quantity: {cartItem.quantity}</p>
        <p>Price: {product.price * cartItem.quantity}</p>
      </div>
{/* //do we have a problem here? */}
      {/* <div className="cartItemRemoveButtonContainer" onClick={() => dispatch(removeItemFromCart{cartItemId: cartItem.id})}
> */}
        <span>
          <Icon />
        </span>
      </div>
  );
};

export default CartItem;
