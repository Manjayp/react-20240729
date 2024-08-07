import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductList } from "../../redux/product/productActions";
import { ToastContainer } from "react-toastify";
import Spinner from "../../components/Spinner";

const ProductList = () => {
  const { loading, products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  if (loading)
    return (
      <div className="flex items-center justify-center w-100 h-[80vh]">
        <Spinner size={86} />
      </div>
    );

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl my-5 ml-8 font-semibold">Product list</h1>

      <div className="grid grid-cols-4 gap-10 py-5">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProductList;
