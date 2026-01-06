export type SKU = {
  skuId: string;

  attributes: {
    color?: string;
    storage?: string;
    size?: string;
  };

  price: number;
  stock: number;
  image: string;           // ⭐ SKU IMAGE
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  description: string;

  images: string[];        // fallback / hero
  skus: SKU[];
};
