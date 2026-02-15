import { categories } from "../../lib/mock/categories";
import { products } from "../../lib/mock/products";

/**
 * Get category by single slug
 */
export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

/**
 * Get category by full slug path
 * Example:
 * ["electronics", "phones", "iphone"]
 */
export function getCategoryBySlugPath(slugs: string[]) {
  return slugs.reduce((parent, slug) => {
    return categories.find(
      (c) => c.slug === slug && c.parentSlug === parent?.slug
    );
  }, undefined as any);
}

/**
 * Get direct subcategories of a category
 */
export function getSubcategories(currentSlug: string) {
  return categories.filter((c) => c.parentSlug === currentSlug);
}

/**
 * Get products that match ALL category slugs (hierarchical filtering)
 */
export function getProductsByCategories(slugs: string[]) {
  return products.filter((p) =>
    slugs.every((s) => p.categorySlugs.includes(s))
  );
}

/**
 * Get products by a single category slug
 */
export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.categorySlugs.includes(slug));
}

/**
 * Get root level categories (no parent)
 */
export function getRootCategories() {
  return categories.filter((c) => !c.parentSlug);
}
