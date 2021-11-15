import MyBasket from "./MyBasket";

export default function Basket(props) {
  return (
    <aside>
      <MyBasket basket={props.basket} />
      <div>CHECKOUT</div>
    </aside>
  );
}
