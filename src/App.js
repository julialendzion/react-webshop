import "./App.css";
import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const [basket, setBasket] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
      console.log(data);
    }
    fetchData();
  }, []);

  function addToBasket(product) {
    setBasket(function (oldBasket) {
      const nextState = oldBasket.concat(product);
      return nextState;
    });
  }

  return (
    <div className="App">
      <Navigation />
      <ProductList addToBasket={addToBasket} products={products} />
      <Basket basket={basket} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default App;
