import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getProductCategories,
  getProductList,
} from "../../redux/product/productActions";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "../../components/Spinner";
import ProductsFilter from "../../components/ProductsFilter";
import Modal from "../../components/Modal";
import AddProductForm from "../../components/AddProductForm";

const ProductList = () => {
  const [openAddModal, setOpenAddModal] = useState(false);

  const {
    loading,
    products,
    query,
    error,
    add: { success },
  } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList(query));
    dispatch(getProductCategories());
  }, [dispatch, query, success]);

  useEffect(() => {
    if (success) {
      setOpenAddModal(false);

      toast.success("Product added successfully.");
    }

    if (error) toast.error(error);
  }, [error, success]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl my-5 ml-8 font-semibold">Product list</h1>
        <button
          className="bg-slate-50 h-max py-2 px-8 rounded shadow-md"
          onClick={() => setOpenAddModal(true)}
        >
          Add Product +
        </button>
      </div>

      <ProductsFilter />

      {loading ? (
        <div className="flex items-center justify-center w-100 h-[70vh]">
          <Spinner height="h-20" width="w-20" />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-5">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}

      <Modal
        isOpen={openAddModal}
        setIsOpen={setOpenAddModal}
        title="Add Product"
        content={<AddProductForm />}
      />
      <ToastContainer />
    </div>
  );
};

export default ProductList;
