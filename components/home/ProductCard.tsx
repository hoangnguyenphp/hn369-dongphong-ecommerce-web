"use client";

import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";

export default function ProductCard({ product }: { product: { id: number; name: string; price: number; image?: string } }) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="rounded-xl border p-4 hover:shadow-lg transition">
      <div className="h-32 bg-gray-200 rounded mb-3">
        {product.image && <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded" />}
      </div>
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-indigo-600 font-bold">${product.price}</p>
      <div className="mt-2 flex gap-2">
        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
        >
          Add to Cart
        </button>
        <button
          onClick={() => addToWishlist(product)}
          className="flex-1 border px-3 py-1 rounded hover:bg-gray-100"
        >
          Wishlist
        </button>
      </div>
    </div>
  );
}
