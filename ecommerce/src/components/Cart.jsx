// Shows the items added to the cart, with quantity buttons and the total price
export default function Cart({ cart, products, onChange, onRemove, onClear }) {
  const rows = cart.map(c => ({ ...products.find(p => p.id === c.id), qty: c.qty })).filter(r => r.name);
  const total = rows.reduce((sum, r) => sum + r.price * r.qty, 0);
  return (
    <section id="cart" className="cart" aria-label="Shopping cart">
      <h2>Your Cart</h2>
      {rows.length === 0 ? <p>Your cart is empty.</p> : (
        <>
          {rows.map(r => (
            <div className="cart-row" key={r.id}>
              <span className="cart-name">{r.icon} {r.name}</span>
              <span className="qty">
                <button onClick={() => onChange(r.id, -1)} aria-label={"Decrease " + r.name}>-</button>
                <b>{r.qty}</b>
                <button onClick={() => onChange(r.id, 1)} aria-label={"Increase " + r.name}>+</button>
              </span>
              <span className="line">₹{(r.price * r.qty).toLocaleString("en-IN")}</span>
              <button className="remove" onClick={() => onRemove(r.id)}>Remove</button>
            </div>
          ))}
          <p className="total">Total: ₹{total.toLocaleString("en-IN")}</p>
          <button className="clear" onClick={onClear}>Clear Cart</button>
        </>
      )}
    </section>
  );
}
