export const routes = {
  home: () => "/",

  categories: () => "/categories",

  category: (slug: string) =>
    `/categories/${slug}`,

  categoryPath: (slugs: string[]) =>
    `/categories/${slugs.join("/")}`,

  product: (slug: string) =>
    `/products/${slug}`,
};
