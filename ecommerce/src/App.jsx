import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";
import { addItem, changeQty, removeItem, countItems } from "./cartUtils.js";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // The cart is kept in state and saved in localStorage, so it survives a page refresh
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("cart")) || []; } catch { return []; }
  });

  useEffect(() => {
    fetch("/products.json")
      .then(res => {
        if (!res.ok) throw new Error("Could not load products (status " + res.status + ")");
        return res.json();
      })
      .then(data => setProducts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    try { localStorage.setItem("cart", JSON.stringify(cart)); } catch { /* storage not available */ }
  }, [cart]);

  return (
    <>
      <header className="header">
        <h1>Our Products</h1>
        <a href="#cart" className="cart-link">🛒 Cart ({countItems(cart)})</a>
      </header>
      <main>
        {loading && <p className="message">Loading products...</p>}
        {error && <p className="message error">{error}</p>}
        {!loading && !error && (
          <section className="grid" aria-label="Product list">
            {products.map(p => (
              <ProductCard key={p.id} product={p} inCart={(cart.find(c => c.id === p.id) || {}).qty || 0}
                onAdd={() => setCart(addItem(cart, p.id))} />
            ))}
          </section>
        )}
        <Cart cart={cart} products={products}
          onChange={(id, change) => setCart(changeQty(cart, id, change))}
          onRemove={id => setCart(removeItem(cart, id))}
          onClear={() => setCart([])} />
      </main>
    </>
  );
}
