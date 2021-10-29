import "../../App.css";
import QuantityButton from "./QuantityButton";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img
        width="100"
        height="100"
        src={`./${product.img}.jpg`}
        alt={product.img}
      />

      <div className="descContainer">
        <h2 className="title">{product.name}</h2>
        <p>id{product.id}</p>
        <p>€{product.price}</p>

<QuantityButton/>



        <button className="addToCartButton">ADD TO CART</button>
        <a href="/">View full details &#859;</a>
        <p>{product.category}</p>
      </div>
    </div>
  );
};

export default Product;
