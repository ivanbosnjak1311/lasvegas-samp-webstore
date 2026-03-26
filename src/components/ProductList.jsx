export default function ProductList({ products }) {
  return (
    <div className="package-list">
      {products.map(p => (
        <div key={p.id} className="package-row">
          <div className="pkg-info">
            <span className="pkg-name">{p.name}</span>
          </div>

          <div className="pkg-actions">
            <span className="pkg-price">{p.price}</span>
            <button className="btn-view">VIEW</button>
          </div>
        </div>
      ))}
    </div>
  );
}