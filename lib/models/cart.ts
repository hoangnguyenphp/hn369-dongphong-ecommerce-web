import { SKU, Product } from "./product";

export type CartItem = {
  productId: number;
  slug: string;
  name: string;

  skuId: string;
  attributes: Record<string, string | undefined>;
  price: number;
  quantity: number;
  image?: string;
};

