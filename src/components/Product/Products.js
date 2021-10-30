import Product from "./Product";
const products = [
  {
    id: 1,
    price: 25,
    img: "garlic",
    name: "Garlic - 1kg",
    category: "vegetables"
  },
  {
    id: 2,
    price: 45,
    img: "lemon",
    name: "Lemon - 5kg",
    category: "fruit"
  },
  {
    id: 3,
    price: 35,
    img: "apple",
    name: "Garlic - 1kg",
    category: "vegetables"
  },
  {
    id: 4,
    price: 25,
    img: "kiwi",
    name: "Kiwi - 1kg",
    category: "fruit"
  },
  {
    id: 5,
    price: 25,
    img: "avocado",
    name: "Avocado - 1kg",
    category: "fruit"
  },
  {
    id: 6,
    price: 25,
    img: "grapes",
    name: "Grapes - 1kg",
    category: "fruit"
  },
  {
    id: 7,
    price: 25,
    img: "tomatoe",
    name: "Tomatoes - 1kg",
    category: "vegetables"
  },
  {
    id: 8,
    price: 25,
    img: "strawberry",
    name: "Strawberries - 1kg",
    category: "fruit"
  },
  {
    id: 9,
    price: 25,
    img: "orange",
    name: "Orange - 1kg",
    category: "fruit"
  },
  {
    id: 10,
    price: 25,
    img: "paprika",
    name: "Paprika - 1kg",
    category: "vegetables"
  }
];
const Products = () => {
  return (
    <div>
      {products.map(product => (
        <Product product={product} />
      ))}
    </div>
  );
};
export default Products;
