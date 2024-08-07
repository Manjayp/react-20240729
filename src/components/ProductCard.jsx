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
    <div className="px-5 py-10 rounded-xl text-center shadow-md border">
      <img src={headphone} alt="headphone" className="h-24 w-auto mx-auto" />
      <div className="rounded-2xl bg-green-500 px-2 w-max mx-auto mt-5">
        {category}
      </div>
      <h2 className="text-3xl font-semibold mb-3">{name}</h2>
      <div>{brand}</div>
      <div className={`text-xl text-yellow-600 mb-3`}>${price}</div>
      <Link to={`${id}`} className="text-white bg-black px-5 py-2 rounded">
        Shop Now
      </Link>
    </div>
  );
};

export default ProductCard;
