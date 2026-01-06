"use client";

import { useMemo, useState } from "react";
import { Product, SKU } from "../../../../lib/models/product";
import { useCart } from "../../../../hooks/useCart";

import ProductGallery from "../../../../components/product/ProductGallery";
import ProductInfo from "../../../../components/product/ProductInfo";

type Props = {
  product: Product;
};

export default function ProductDetailClient({ product }: Props) {
  // Prefer first in-stock SKU, fallback to first SKU
  const defaultSku = useMemo<SKU>(() => {
    return product.skus.find((sku) => sku.stock > 0) ?? product.skus[0];
  }, [product.skus]);

  const [selectedSku, setSelectedSku] = useState<SKU>(defaultSku);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSku) return;
    addToCart(product, selectedSku);
  };

  return (
    <div className="grid gap-10 md:grid-cols-2">
      {/* LEFT: Gallery */}
      <ProductGallery
        productImages={product.images}
        selectedSku={selectedSku}
      />

      {/* RIGHT: Info + SKU + Cart */}
      <ProductInfo
        product={product}
        selectedSku={selectedSku}
        onSkuChange={setSelectedSku}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
