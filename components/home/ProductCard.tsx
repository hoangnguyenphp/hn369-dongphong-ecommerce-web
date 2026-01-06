import Link from "next/link";

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    slug: string;
    price: number;
    image: string;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="block rounded-xl border border-border bg-surface p-4 transition hover:-translate-y-1 hover:shadow-lg"
    >
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
      <p className="text-primary font-bold">${product.price}</p>
    </Link>
  );
}
