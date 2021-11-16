import Product from "./Product";

export default function ProductList(props) {
  const mapped = props.products.map((product) => <Product {...product} />);

  return <section className="ProductList">{mapped}</section>;
}
