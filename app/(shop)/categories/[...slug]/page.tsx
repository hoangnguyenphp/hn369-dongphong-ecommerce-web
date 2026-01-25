import {
  getCategoryBySlugPath,
  getSubcategories,
  getProductsByCategory,
} from "../../../../domain/category/category";

import {routes} from "../../../../lib/routes"

type Props = {
  params: { slug: string[] };
};

export default function CategoryPage({ params }: Props) {
  const slugs = params.slug;

  const category = getCategoryBySlugPath(slugs);
  if (!category) return <div>Category not found</div>;

  const subcategories = getSubcategories(category.slug);
  const products = getProductsByCategory(slugs[slugs.length - 1]);

  const hasSub = subcategories.length > 0;
  const hasProducts = products.length > 0;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">{category.name}</h1>

      {/* CASE 1: HUB */}
      {hasSub && !hasProducts && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {subcategories.map((c) => (
            <a
              key={c.id}
              href={`${routes.categories()}/${[...slugs, c.slug].join("/")}`}
              className="p-4 border rounded-lg hover:bg-bg"
            >
              {c.name}
            </a>
          ))}
        </div>
      )}

      {/* CASE 2: MIXED */}
      {hasSub && hasProducts && (
        <>
          <div className="flex gap-3 overflow-x-auto">
            {subcategories.map((c) => (
              <a
                key={c.id}
                href={`${routes.categories()}/${[...slugs, c.slug].join("/")}`}
                className="px-4 py-2 border rounded-full text-sm"
              >
                {c.name}
              </a>
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

/* -------------------- */
function ProductGrid({ products }: { products: any[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p) => (
        <div key={p.id} className="border rounded-lg p-3">
          <div className="font-semibold">{p.name}</div>
          <div className="text-sm text-muted">${p.price}</div>
        </div>
      ))}
    </div>
  );
}