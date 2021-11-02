import "../../App.css";
import React, { useState } from "react";
import QuantityButton from "./QuantityButton";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../features/cart/cartSlice";

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  return (
    <div className="product productContainer">
      <div>
        <img
          width="100"
          height="100"
          src={`./${product.img}.jpg`}
          alt={product.img}
        />
      </div>

      <div className="descContainer">
        <h2 className="title">{product.name}</h2>
        <p>id{product.id}</p>
        <p>€{product.price}</p>

        <QuantityButton quantity={quantity} setQuantity={setQuantity} />

        <button
          onClick={() => {
            dispatch(addItemToCart(product, quantity));
          }}
          className="addToCartButton"
        >
          ADD TO CART
        </button>
        <a href="/">View full details &#859;</a>
        <p>{product.category}</p>
      </div>
    </div>
  );
};

export default Product;
