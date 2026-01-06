"use client";

import { Product, SKU } from "../../lib/constants";
import PriceDisplay from "./PriceDisplay";
import StockStatus from "./StockStatus";

type Props = {
  product: Product;
  selectedSku?: SKU;
  onSkuChange: (sku: SKU) => void;
  onAddToCart: () => void;
};

export default function ProductInfo({
  product,
  selectedSku,
  onSkuChange,
  onAddToCart,
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {product.description}
        </p>
      </div>

      {/* SKU selector */}
      <div className="space-y-2">
        <p className="text-sm font-semibold">Choose option</p>
        <div className="flex flex-wrap gap-3">
          {product.skus.map((sku) => (
            <button
              key={sku.skuId}
              onClick={() => onSkuChange(sku)}
              className={`rounded-lg border px-4 py-2 text-sm transition
                ${
                  selectedSku?.skuId === sku.skuId
                    ? "border-primary bg-primary/10"
                    : "hover:border-gray-400"
                }`}
            >
              {Object.values(sku.attributes).join(" / ")}
            </button>
          ))}
        </div>
      </div>

      <PriceDisplay sku={selectedSku} />
      <StockStatus sku={selectedSku} />

      <button
        disabled={!selectedSku || selectedSku.stock === 0}
        onClick={onAddToCart}
        className="w-full rounded-xl bg-primary py-3 font-semibold text-white disabled:opacity-50"
      >
        Add to cart
      </button>
    </div>
  );
}
