import Product from "./Product";

export default function ProductList(props) {
  return (
    <section>
      <h1>Product list</h1>
      <section className="ProductList">
        <Product {...props} />
        <Product {...props} />
        <Product {...props} />
        <Product {...props} />
      </section>
    </section>
  );
}
