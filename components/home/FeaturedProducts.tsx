import ProductCard from "./ProductCard";
import { products } from "../../lib/data/products";

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              id: product.id,
              name: product.name,
              slug: product.slug,
              price: product.skus[0].price, // 👈 price hiển thị đại diện
              image: product.images[0],
            }}
          />
        ))}
      </div>
    </section>
  );
}
