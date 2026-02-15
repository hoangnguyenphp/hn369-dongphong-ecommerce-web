import {
  getCategoryBySlugPath,
  getSubcategories,
  getProductsByCategory,
} from "../../../../domain/category/category";

import { routes } from "../../../../lib/routes";
import { categories } from "../../../../lib/mock/categories";

import Link from "next/link";
import Breadcrumb from "../../../../components/common/Breadcrumb";

type Props = {
  params: { slug: string[] };
};

export default function CategoryPage({ params }: Props) {
  const slugs = params.slug;

  const category = getCategoryBySlugPath(slugs);
  if (!category) return <div>Category not found</div>;

  const subcategories = getSubcategories(category.slug);
  const products = getProductsByCategory(
    slugs[slugs.length - 1]
  );

  const hasSub = subcategories.length > 0;
  const hasProducts = products.length > 0;

  /* ---------------- BREADCRUMB BUILD ---------------- */

  const breadcrumbItems = [
    { label: "Categories", href: routes.categories() },
  ];

  let accumulatedPath: string[] = [];

  slugs.forEach((slug, index) => {
    accumulatedPath.push(slug);

    const cat = categories.find((c) => c.slug === slug);
    if (!cat) return;

    const isLast = index === slugs.length - 1;

    breadcrumbItems.push({
      label: cat.name,
      href: isLast
        ? undefined
        : `${routes.categories()}/${accumulatedPath.join("/")}`,
    });
  });

  /* -------------------------------------------------- */

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Title */}
      <h1 className="text-3xl font-bold">{category.name}</h1>

      {/* CASE 1: HUB */}
      {hasSub && !hasProducts && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {subcategories.map((c) => (
            <Link
              key={c.id}
              href={`${routes.categories()}/${[...slugs, c.slug].join("/")}`}
              className="p-4 border rounded-lg hover:bg-bg"
            >
              {c.name}
            </Link>
          ))}
        </div>
      )}

      {/* CASE 2: MIXED */}
      {hasSub && hasProducts && (
        <>
          <div className="flex gap-3 overflow-x-auto">
            {subcategories.map((c) => (
              <Link
                key={c.id}
                href={`${routes.categories()}/${[...slugs, c.slug].join("/")}`}
                className="px-4 py-2 border rounded-full text-sm"
              >
                {c.name}
              </Link>
            ))}
          </div>

          <ProductGrid products={products} />
        </>
      )}

      {/* CASE 3: LEAF */}
      {!hasSub && hasProducts && <ProductGrid products={products} />}
    </div>
  );
}

/* -------------------- PRODUCT GRID -------------------- */

function ProductGrid({ products }: { products: any[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p) => {
        const priceText = getPriceRange(p.skus);
        const inStock = p.skus.some((s: any) => s.stock > 0);

        return (
          <Link
            key={p.id}
            href={routes.product(p.slug)}
            className="group border rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            {/* IMAGE */}
            <div className="aspect-square bg-gray-100 flex items-center justify-center">
              <img
                src={p.thumbnail}
                alt={p.name}
                className="object-cover w-full h-full group-hover:scale-105 transition"
              />
            </div>

            {/* INFO */}
            <div className="p-3 space-y-1">
              <div className="font-medium line-clamp-2">
                {p.name}
              </div>

              <div className="text-sm font-semibold">
                {priceText}
              </div>

              <div
                className={`text-xs ${
                  inStock ? "text-green-600" : "text-red-500"
                }`}
              >
                {inStock ? "In stock" : "Out of stock"}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

/* -------------------- HELPERS -------------------- */

function getPriceRange(skus: any[]) {
  const prices = skus.map((s) => s.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return min === max
    ? `$${min}`
    : `$${min} – $${max}`;
}
