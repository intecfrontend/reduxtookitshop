import Product from "./Product";
import productsProvider from "../../features/product/products";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../features/product/productsSlice";

const Products = () => {
  const selectedCategory = useSelector(getSelectedCategory);
  return (
    <div className="productsContainer">
      {productsProvider.filter(product => {if (selectedCategory === 'all')return true;
      return selectedCategory === product.category}).map(product => (
        <Product product={product} />
      ))}
    </div>
  );
};
export default Products;
