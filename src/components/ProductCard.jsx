const ProductCard = ({ name, category, brand, price }) => {
  return (
    <div className="bg-slate-200 m-5 p-5 rounded-xl text-center">
      <h2 className="text-2xl font-semibold mb-3">{name}</h2>
      <div>{category}</div>
      <div>{brand}</div>
      <div className="text-xl text-yellow-600 my-3">${price}</div>

      <button className="text-white bg-black px-5 py-2 rounded">Shop Now</button>
    </div>
  );
};

export default ProductCard;
