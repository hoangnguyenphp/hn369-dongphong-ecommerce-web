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

  images: string[];   // ✅ multiple images per SKU
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  description: string;
  categorySlugs: string[],
  thumbnail: string; // ✅ single product image (PLP, cart, SEO)
  skus: SKU[];
};
