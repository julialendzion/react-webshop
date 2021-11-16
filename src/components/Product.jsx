import { useState } from "react";

export default function Product(props) {
  const styles = {
    border: "2px solid #000",
    margin: "10px",
    textAlign: "center",
    backgroundColor: props.soldOut ? "red" : "lightgreen",
  };
  const initial = 0;
  const [stateVariable, updaterFunction] = useState(initial);

  function addValue() {
    updaterFunction((prevCount) => prevCount + 1);
  }

  function removeValue() {
    updaterFunction((prevCount) => prevCount - 1);
  }

  return (
    <article style={styles}>
      <h2>{props.productdisplayname}</h2>
      <p>{props.price}</p>
      <button onClick={addValue}> + </button>
      <p>{stateVariable}</p>
      <button onClick={removeValue}> - </button>
    </article>
  );
}
