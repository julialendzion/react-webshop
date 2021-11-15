import "./App.css";
import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";

function App() {
  const product = {
    id: 1163,
    productdisplayname: "Round Neck Jersey",
    price: 895,
    soldOut: 0,
  };

  const basket = [1, 2];

  return (
    <div className="App">
      <Navigation />
      <ProductList {...product} />
      <Basket basket={basket} />
    </div>
  );
}

export default App;
