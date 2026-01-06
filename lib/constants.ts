export type SKU = {
  skuId: string;
  image: string; // ✅ SKU-level image
  attributes: {
    color?: string;
    storage?: string;
    size?: string;
  };
  price: number;
  stock: number;
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  description: string;
  images: string[]; // fallback / general images
  skus: SKU[];
};
