"use client";

import { useCart } from "../../hooks/useCart";

export default function CartSummary() {
  const { items, clearCart, isOpen, toggleOpen } = useCart();

  if (!items || items.length === 0) return null;

  if (!isOpen) {
    return (
      <button
        onClick={toggleOpen}
        className="fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-full shadow-lg z-50"
      >
        🛒 Cart ({items.length})
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-surface border border-border p-4 rounded-xl shadow-xl w-72 z-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold">Cart ({items.length})</h4>
        <button
          onClick={toggleOpen}
          className="text-muted hover:text-text font-bold"
        >
          ✕
        </button>
      </div>

      {/* Items */}
      <ul className="mb-3 max-h-40 overflow-auto space-y-3">
        {items.map((item) => (
          <li key={item.skuId} className="flex justify-between text-sm">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-muted text-xs">
                {Object.values(item.attributes)
                  .filter(Boolean)
                  .join(" · ")}
              </p>
              <p className="text-xs">Qty: {item.quantity}</p>
            </div>
            <span className="font-semibold">${item.price}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={clearCart}
        className="text-sm px-3 py-2 border border-border rounded-lg hover:bg-bg w-full"
      >
        Clear Cart
      </button>
    </div>
  );
}
