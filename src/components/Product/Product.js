import "../..//App.css";
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
        <div className="quantityButton">
          <button>&#8722;</button>
          <span>10</span>
          <button>&#43;</button>
        </div>
        <button className="addToCartButton">ADD TO CART</button>
        <a href="/">View full details &#859;</a>
        <p>{product.category}</p>
      </div>
    </div>
  );
};

export default Product;
