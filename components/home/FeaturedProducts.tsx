import ProductCard from "./ProductCard";

const sampleProducts = [
  { id: 1, name: "Product 1", price: 99, image: "" },
  { id: 2, name: "Product 2", price: 149, image: "" },
  { id: 3, name: "Product 3", price: 79, image: "" },
  { id: 4, name: "Product 4", price: 129, image: "" }
];

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
