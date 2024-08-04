import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCounter,
  increaseCounter,
  resetCounter,
} from "../redux/counter/counterSlice";

const About = () => {
  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  function increaseCountValue() {
    dispatch(increaseCounter());
  }

  function decreaseCountValue() {
    dispatch(decreaseCounter());
  }
  function resetCountValue() {
    dispatch(resetCounter());
  }

  return (
    <div>
      <h1 className="text-5xl">About page</h1>

      <h2 className="text-center p-5">{count}</h2>

      <div className="container mx-auto flex justify-center">
        <button
          className="bg-blue-500 text-white rounded px-3 py-1 w-max mx-5"
          onClick={increaseCountValue}
        >
          +
        </button>
        <button
          className="bg-blue-500 text-white rounded px-3 py-1 w-max mx-5"
          onClick={decreaseCountValue}
        >
          -
        </button>
        <button
          className="bg-blue-500 text-white rounded px-3 py-1 w-max mx-5"
          onClick={resetCountValue}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default About;
