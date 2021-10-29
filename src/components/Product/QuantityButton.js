import "../../App.css";
const QuantityButton = ({ product }) => {
  return (
    <div className="quantityButton">
      <button>&#8722;</button>
      <span>10</span>
      <button>&#43;</button>
    </div>
  );
};

export default QuantityButton;
