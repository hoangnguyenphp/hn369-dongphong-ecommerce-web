"use client";

import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";

export default function CartSummary() {
  const { items, clearCart, isOpen, toggleOpen } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ❗ Only render when open
  if (!mounted || !isOpen || !items || items.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4  bg-surface border border-border p-4 rounded-xl shadow-xl w-72 z-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold">Cart ({items.length})</h4>
        <button
          onClick={toggleOpen}
          className="text-muted hover:text-text font-bold"
          aria-label="Close cart"
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

              {item.attributes && (
                <p className="text-muted text-xs">
                  {Object.values(item.attributes)
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              )}

              <p className="text-xs">Qty: {item.quantity}</p>
            </div>

            <span className="font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
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
