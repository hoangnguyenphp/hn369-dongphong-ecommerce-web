import ProductCard from "./ProductCard";
import { products } from "../../lib/mock/products";
import { Product, SKU } from "../../lib/models/product";

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="mb-6 text-2xl font-bold">Featured Products</h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {products.map((product: Product) => {
          // Prefer first in-stock SKU
          const defaultSku: SKU =
            product.skus.find((sku) => sku.stock > 0) ?? product.skus[0];

          return (
            <ProductCard
              key={`${product.id}-${defaultSku.skuId}`}
              product={product}
              sku={defaultSku}
            />
          );
        })}
      </div>
    </section>
  );
}
