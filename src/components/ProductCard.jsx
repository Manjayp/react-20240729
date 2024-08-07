/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import headphone from "../assets/headphone.jpg";

const ProductCard = ({
  id,
  name,
  category,
  brand = "Default brand",
  price = 0,
}) => {
  return (
    <div className="bg-slate-200 p-5 rounded-xl text-center">
      <img src={headphone} alt="headphone" className="h-24 w-auto mx-auto" />
      <h2 className="text-2xl font-semibold mb-3">{name}</h2>
      <div>{category}</div>
      <div>{brand}</div>
      <div className={`text-xl text-yellow-600 my-3`}>${price}</div>
      <Link to={`${id}`} className="text-white bg-black px-5 py-2 rounded">
        Shop Now
      </Link>
    </div>
  );
};

export default ProductCard;
