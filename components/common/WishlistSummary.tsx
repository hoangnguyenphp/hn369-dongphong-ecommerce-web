"use client";

import { useEffect, useState } from "react";
import { useWishlist } from "../../hooks/useWishlist";

export default function WishlistSummary() {
  const {
    wishlistItems,
    removeFromWishlist,
    isOpen,
    toggleOpen,
  } = useWishlist();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ❗ Only render when open
  if (!mounted || !isOpen || wishlistItems.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-surface border border-border rounded-xl shadow-xl w-72 z-50">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 border-b border-border">
        <h4 className="font-semibold">
          Wishlist ({wishlistItems.length})
        </h4>
        <button
          onClick={toggleOpen}
          className="text-muted hover:text-text font-bold"
          aria-label="Close wishlist"
        >
          ✕
        </button>
      </div>

      {/* Items */}
      <ul className="max-h-56 overflow-auto p-3 space-y-3">
        {wishlistItems.map((item) => (
          <li key={item.skuId} className="flex gap-3 items-start">
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded object-cover border border-border"
              />
            )}

            <div className="flex-1">
              <p className="font-medium text-sm">{item.name}</p>

              {item.attributes && (
                <p className="text-xs text-muted">
                  {Object.values(item.attributes)
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              )}

              <p className="text-sm font-semibold text-primary">
                ${item.price.toFixed(2)}
              </p>
            </div>

            <button
              onClick={() => removeFromWishlist(item.skuId)}
              className="text-red-500 text-xs hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
