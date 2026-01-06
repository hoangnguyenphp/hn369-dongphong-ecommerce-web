"use client";

import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";

export default function ProductCard({
  product,
}: {
  product: { id: number; name: string; price: number; image?: string };
}) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="rounded-xl border p-4 hover:shadow-lg transition bg-white">
      <div className="h-32 bg-gray-200 rounded mb-3 overflow-hidden">
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <h3 className="font-semibold text-gray-800">{product.name}</h3>
      <p className="text-indigo-600 font-bold">${product.price}</p>

      <div className="mt-3 flex items-center gap-2">
        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product)}
          className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition"
          title="Add to Cart"
        >
          <ShoppingCart size={18} />
          <span className="text-sm font-medium">Add</span>
        </button>

        {/* Wishlist */}
        <button
          onClick={() => addToWishlist(product)}
          className="p-2 rounded-lg border hover:bg-pink-50 transition"
          title="Add to Wishlist"
        >
          <Heart size={18} className="text-pink-500" />
        </button>
      </div>
    </div>
  );
}
