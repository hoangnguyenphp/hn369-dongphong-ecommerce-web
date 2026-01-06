"use client";

import { useCart } from "../../hooks/useCart";

export default function CartSummary() {
  const { cartItems, clearCart, isOpen, toggleOpen } = useCart();

  if (cartItems.length === 0) return null;

  if (!isOpen) {
    // show a small button to re-open
    return (
      <button
        onClick={toggleOpen}
        className="fixed bottom-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded shadow-md z-50"
      >
        Open Cart ({cartItems.length})
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border p-4 rounded shadow-md w-64 z-50">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold">Cart ({cartItems.length})</h4>
        <button onClick={toggleOpen} className="text-gray-500 hover:text-gray-700 font-bold">✕</button>
      </div>
      <ul className="mb-2 max-h-40 overflow-auto">
        {cartItems.map((p) => (
          <li key={p.id} className="flex justify-between mb-1">
            <span>{p.name}</span>
            <span>${p.price}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={clearCart}
        className="text-sm px-3 py-1 border rounded hover:bg-gray-100 w-full"
      >
        Clear Cart
      </button>
    </div>
  );
}
