import ProductDetailClient from "./ProductDetailClient";
import { getProductBySlug } from "../../../../lib/data/products";

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <ProductDetailClient product={product} />
    </div>
  );
}
