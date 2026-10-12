// Displays one product. onAdd is called when "Add to Cart" is clicked.
export default function ProductCard({ product, inCart, onAdd }) {
  const { name, category, price, inStock, icon, description } = product;
  return (
    <article className="card">
      <div className="icon" aria-hidden="true">{icon}</div>
      <span className="category">{category}</span>
      <h2>{name}</h2>
      <p className="description">{description}</p>
      <div className="bottom">
        <strong className="price">₹{price.toLocaleString("en-IN")}</strong>
        <span className={inStock ? "stock in" : "stock out"}>{inStock ? "In Stock" : "Out of Stock"}</span>
      </div>
      <button disabled={!inStock} onClick={onAdd}>{inStock ? "Add to Cart" : "Unavailable"}</button>
      {inCart > 0 && <p className="in-cart">In cart: {inCart}</p>}
    </article>
  );
}
