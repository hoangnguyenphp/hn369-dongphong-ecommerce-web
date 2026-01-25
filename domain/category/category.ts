import { categories } from "../../lib/mock/categories";
import { products } from "../../lib/mock/products";

export function getCategoryBySlugPath(slugs: string[]) {
  return slugs.reduce((parent, slug) => {
    return categories.find(
      (c) => c.slug === slug && c.parentSlug === parent?.slug
    )!;
  }, undefined as any);
}

export function getSubcategories(currentSlug: string) {
  return categories.filter((c) => c.parentSlug === currentSlug);
}

export function getProductsByCategories(slugs: string[]) {
  return products.filter((p) =>
    slugs.every((s) => p.categorySlugs.includes(s))
  );
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.categorySlugs.includes(slug));
}

export function getRootCategories() {
  return categories.filter((c) => !c.parentSlug);
}
