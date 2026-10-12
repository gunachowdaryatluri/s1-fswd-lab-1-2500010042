# Product Cards with Cart (React + Vite)

Fetches product details from a JSON file, shows them as cards, and has a working shopping cart.

## Run
```
npm install
npm run dev
```
Open http://localhost:5173

## Features
- Product cards from `public/products.json` (name, category, description, price, stock)
- **Add to Cart** adds the product (clicking again increases the quantity); out-of-stock items are disabled
- Cart section: + / - quantity buttons, Remove, Clear Cart, and the total price
- The header shows the cart count; the cart is saved in localStorage so it stays after a refresh

## Files
- src/App.jsx - fetches products, holds the cart state
- src/cartUtils.js - add / change quantity / remove functions
- src/components/ProductCard.jsx, Cart.jsx - the cards and the cart
