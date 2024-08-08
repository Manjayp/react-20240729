import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct } from "../redux/product/productActions";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { GrAdd } from "react-icons/gr";

const AddProductForm = () => {
  const {
    add: { loading, success },
  } = useSelector((state) => state.product);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  function submitForm(data) {
    dispatch(addNewProduct(data));
  }

  useEffect(() => {
    if (success) reset();
  }, [reset, success]);

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="py-1">
        <label htmlFor="name" className="ml-1 font-semibold text-sm">
          Product Name
        </label>
        <input
          type="text"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("name", {
            required: "Product name is required.",
          })}
        />
        <p className="text-red-500 text-sm mt-2 ml-1">{errors.name?.message}</p>
      </div>
      <div className="py-1">
        <label htmlFor="category" className="ml-1 font-semibold text-sm">
          Category
        </label>
        <input
          type="text"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("category", {
            required: "Category is required.",
          })}
        />
        <p className="text-red-500 text-sm mt-2 ml-1">
          {errors.category?.message}
        </p>
      </div>
      <div className="py-1">
        <label htmlFor="brand" className="ml-1 font-semibold text-sm">
          Brand
        </label>
        <input
          type="text"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("brand", {
            required: "Brand is required.",
          })}
        />
        <p className="text-red-500 text-sm mt-2 ml-1">
          {errors.brand?.message}
        </p>
      </div>
      <div className="py-1">
        <label htmlFor="price" className="ml-1 font-semibold text-sm">
          Price
        </label>
        <input
          type="number"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("price", {
            required: "Price is required.",
          })}
        />
        <p className="text-red-500 text-sm mt-2 ml-1">
          {errors.price?.message}
        </p>
      </div>
      <div className="mt-5 text-center">
        <button
          type="submit"
          className="bg-green-600 text-white rounded py-2 hover:bg-green-700 cursor-pointer w-full flex justify-center items-center"
        >
          <span className="mr-2">Add Product</span>
          {loading ? <Spinner /> : <GrAdd />}
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
