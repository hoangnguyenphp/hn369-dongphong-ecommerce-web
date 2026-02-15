export type SKUAttribute = {
  color?: string;
  storage?: string;
  size?: string;
};

export type SKU = {
  skuId: string;

  attributes: SKUAttribute;

  price: number;
  stock: number;

  images: string[];   // multiple images per SKU
};

export type Product = {
  id: number;

  slug: string;
  name: string;
  description: string;

  /**
   * Canonical taxonomy path used for:
   * - Breadcrumb
   * - SEO
   * - Structured data
   * - Future category-based product URL
   *
   * Example:
   * ["dong-phong", "dong-phong-muoi-tay-ninh"]
   */
  primaryCategoryPath: string[];

  /**
   * Categories where this product should be displayed.
   * Used for product listing pages and filtering.
   *
   * Must include the last slug of primaryCategoryPath.
   */
  categorySlugs: string[];

  thumbnail: string; // single product image (PLP, cart, SEO)

  skus: SKU[];
};
