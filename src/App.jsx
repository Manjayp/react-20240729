import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //code
    console.log("hello world");
  }, [count]);

  return (
    <>
      <Header />
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <div className="grid grid-cols-3">
        <ProductCard
          name="Iphone 14"
          category="Smartphones"
          brand="Apple"
          price={1499}
        />
        <ProductCard
          name="Iphone 15"
          category="Smartphones"
          brand="Apple"
          price={1699}
        />
        <ProductCard
          name="Iphone 12 Pro max"
          category="Smartphones"
        />
      </div>
    </>
  );
};

export default App;
