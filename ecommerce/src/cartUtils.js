// Add one product; if it is already in the cart, increase its quantity
export function addItem(cart, id) {
  if (cart.some(c => c.id === id)) return cart.map(c => (c.id === id ? { ...c, qty: c.qty + 1 } : c));
  return [...cart, { id, qty: 1 }];
}
// Change quantity by +1 / -1; an item that reaches 0 is removed
export function changeQty(cart, id, change) {
  return cart.map(c => (c.id === id ? { ...c, qty: c.qty + change } : c)).filter(c => c.qty > 0);
}
export function removeItem(cart, id) {
  return cart.filter(c => c.id !== id);
}
export const countItems = cart => cart.reduce((sum, c) => sum + c.qty, 0);
