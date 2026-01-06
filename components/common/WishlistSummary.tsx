"use client";

import { useWishlist } from "../../hooks/useWishlist";

export default function WishlistSummary() {
  const { wishlistItems, removeFromWishlist, isOpen, toggleOpen } = useWishlist();

  // If no items, hide the summary entirely
  if (wishlistItems.length === 0) return null;

  // If closed, show a small button to re-open
  if (!isOpen) {
    return (
      <button
        onClick={toggleOpen}
        className="fixed bottom-4 left-4 bg-pink-600 text-white px-3 py-1 rounded shadow-md z-50"
      >
        Open Wishlist ({wishlistItems.length})
      </button>
    );
  }

  // If open, show the full wishlist box
  return (
    <div className="fixed bottom-4 left-4 bg-white border p-4 rounded shadow-md w-64 z-50">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold">Wishlist ({wishlistItems.length})</h4>
        <button
          onClick={toggleOpen}
          className="text-gray-500 hover:text-gray-700 font-bold"
        >
          ✕
        </button>
      </div>
      <ul className="mb-2 max-h-40 overflow-auto">
        {wishlistItems.map((p) => (
          <li key={p.id} className="flex justify-between mb-1">
            <span>{p.name}</span>
            <button
              onClick={() => removeFromWishlist(p.id)}
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
