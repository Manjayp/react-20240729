import { useSelector } from "react-redux";

const Home = () => {
  const { count } = useSelector((state) => state.counter);

  return (
    <div>
      <h1 className="text-5xl">Home page</h1>
      <h2 className="text-center p-5 text-9xl">{count}</h2>
    </div>
  );
};

export default Home;
