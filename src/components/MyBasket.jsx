export default function MyBasket(props) {
  return (
    <div>
      <h2>Your basket</h2>
      <p>{props.basket.length} items</p>
      <p>$100</p>
    </div>
  );
}
