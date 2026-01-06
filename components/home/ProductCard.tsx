"use client";

import Link from "next/link";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import { Product, SKU } from "../../lib/models/product";

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    slug: string;
    image: string;
    sku: SKU;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const productForActions: Product = {
    id: product.id,
    name: product.name,
    slug: product.slug,
    description: "",
    images: [product.image],
    skus: [product.sku],
  };

  return (
    <div className="rounded-xl border border-border bg-surface p-4 transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="aspect-square bg-gray-100 rounded mb-3 overflow-hidden">
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <h3 className="font-semibold">{product.name}</h3>
      </Link>

      <p className="text-primary font-bold mt-1">
        ${product.sku.price}
      </p>

      <div className="mt-3 flex gap-2">
        {/* Wishlist */}
        <button
          onClick={() => addToWishlist(productForActions, product.sku)}
          className="flex-1 text-sm border rounded px-2 py-1 hover:bg-gray-100"
        >
          ♡ Wishlist
        </button>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(productForActions, product.sku)}
          className="flex-1 text-sm bg-black text-white rounded px-2 py-1 hover:opacity-90"
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
}
