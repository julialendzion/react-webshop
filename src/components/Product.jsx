export default function Product(props) {
  const styles = {
    border: "2px solid #000",
    margin: "10px",
    textAlign: "center",
    backgroundColor: props.soldOut ? "red" : "lightgreen",
  };
  return (
    <article style={styles}>
      <h2>{props.productdisplayname}</h2>
      <p>{props.price}</p>
    </article>
  );
}
