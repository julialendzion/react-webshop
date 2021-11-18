import { useState } from "react";

export default function Product(props) {
  const styles = {
    border: "2px solid #000",
    margin: "10px",
    textAlign: "center",
    borderColor: props.soldout ? "red" : "lightgreen",
    padding: "20px",
  };
  const initial = 0;
  const [stateVariable, updaterFunction] = useState(initial);

  function removeValue() {
    updaterFunction((oldAmount) => {
      if (oldAmount > 0) {
        return oldAmount - 1;
      }
      return 0;
    });
  }

  function addValue() {
    updaterFunction((oldAmount) => oldAmount + 1);
    props.addToBasket({
      price: props.price,
    });
  }

  return (
    <article style={styles}>
      <h2>{props.productdisplayname}</h2>
      <p>{props.price}$</p>
      <button onClick={removeValue}> - </button>
      <p className="amount"> {stateVariable} </p>
      <button onClick={addValue}> + </button>
    </article>
  );
}
