export default function ProductCard({ name, price, image }) {
  const formattedPrice = 
    typeof price === "number"
    ? price.toFixed(2)
    : Number(price).toFixed(2);

  return (
    <div className="product-card">
      <h3>{name}</h3>

      <div className="product-image">
        <img src={image} alt={name} />
      </div>

      <div className="product-footer">
        <span className="price">{formattedPrice} EUR</span>
        <button className="buy-btn">BUY</button>
      </div>
    </div>
  );
}