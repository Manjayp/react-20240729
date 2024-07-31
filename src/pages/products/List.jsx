import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const ProductList = () => {
  return (
    <div className="container">
      <h1 className="text-5xl my-5">Product list</h1>

      <div className="grid grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Link
        to={"details"}
        className="bg-slate-700 text-white rounded px-5 py-2"
      >
        Details
      </Link>
    </div>
  );
};

export default ProductList;
