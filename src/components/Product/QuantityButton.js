import "../../App.css";
const QuantityButton = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };  const substractQuantity = () => {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };
  return (
    <div className="quantityButton">
      <button>&#8722;</button>
      <span>{quantity}</span>
      <button onClick={addQuantity}>&#43;</button>
    </div>
  );
};

export default QuantityButton;
