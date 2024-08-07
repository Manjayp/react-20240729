import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getProductCategories,
  getProductList,
} from "../../redux/product/productActions";
import { ToastContainer } from "react-toastify";
import Spinner from "../../components/Spinner";
import ProductsFilter from "../../components/ProductsFilter";

const ProductList = () => {
  const { loading, products, query } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList(query));
    dispatch(getProductCategories());
  }, [dispatch, query]);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl my-5 ml-8 font-semibold">Product list</h1>

      <ProductsFilter />

      {loading ? (
        <div className="flex items-center justify-center w-100 h-[70vh]">
          <Spinner height="h-20" width="w-20" />
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-5">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default ProductList;
