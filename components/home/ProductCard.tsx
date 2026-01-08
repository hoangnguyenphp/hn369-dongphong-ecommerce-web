"use client";

import Link from "next/link";
import Image from "next/image";
import { Product, SKU } from "../../lib/models/product";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";

type ProductCardProps = {
  product: Product;
  sku: SKU; // preview / default SKU
};

export default function ProductCard({ product, sku }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="rounded-xl border border-border bg-surface p-4 transition hover:-translate-y-1 hover:shadow-lg">
      {/* Image + Name */}
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative mb-3 aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>

        <h3 className="line-clamp-2 font-semibold">{product.name}</h3>
      </Link>

      {/* Price */}
      <p className="mt-1 font-bold text-primary">
        ${sku.price.toLocaleString()}
      </p>

      {/* Actions */}
      <div className="mt-3 flex gap-2">
        {/* Wishlist */}
        <button
          onClick={() => addToWishlist(product, sku)}
          className="flex-1 rounded border px-2 py-1 text-sm hover:bg-gray-100"
        >
          ♡ Wishlist
        </button>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product, sku)}
          disabled={sku.stock === 0}
          className="flex-1 rounded bg-black px-2 py-1 text-sm text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
}
