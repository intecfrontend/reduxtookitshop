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
    category: "vegetables"
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
    name: "Garlic - 1kg",
    category: "vegetables"
  },
  {
    id: 5,
    price: 25,
    img: "avocado",
    name: "Garlic - 1kg",
    category: "vegetables"
  },
  {
    id: 6,
    price: 25,
    img: "grapes",
    name: "Garlic - 1kg",
    category: "vegetables"
  },
  {
    id: 7,
    price: 25,
    img: "tomatoe",
    name: "Garlic - 1kg",
    category: "vegetables"
  },
  {
    id: 8,
    price: 25,
    img: "strawberry",
    name: "Garlic - 1kg",
    category: "vegetables"
  },
  {
    id: 9,
    price: 25,
    img: "orange",
    name: "Garlic - 1kg",
    category: "vegetables"
  },
  {
    id: 10,
    price: 25,
    img: "paprika",
    name: "Garlic - 1kg",
    category: "vegetables"
  }
];
const Products = () => {
  return (
    <div>
      Products
      {products.map(product => (
        <Product product={product} />
      ))}
    </div>
  );
};
export default Products;
