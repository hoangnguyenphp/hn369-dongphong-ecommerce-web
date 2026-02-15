import ProductDetailClient from "./ProductDetailClient";
import { getProductBySlug } from "../../../../lib/mock/products";
import { getCategoryBySlug } from "../../../../domain/category/category";
import { routes } from "../../../../lib/routes";
import Breadcrumb from "../../../../components/common/Breadcrumb";

type Crumb = {
  label: string;
  href?: string;
};

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  const { primaryCategoryPath } = product;

  // 👇 Explicitly type items
  const items: Crumb[] = [
    {
      label: "Categories",
      href: routes.categories(),
    },
  ];

  primaryCategoryPath.forEach((slug, index) => {
    const category = getCategoryBySlug(slug);
    if (!category) return;

    const path = primaryCategoryPath.slice(0, index + 1).join("/");

    items.push({
      label: category.name,
      href: `${routes.categories()}/${path}`,
    });
  });

  // ✅ Now this works
  items.push({
    label: product.name,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
      <Breadcrumb items={items} />
      <ProductDetailClient product={product} />
    </div>
  );
}
