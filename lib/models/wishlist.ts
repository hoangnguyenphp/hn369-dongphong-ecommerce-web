import { SKU } from "./product";

export type WishlistItem = {
  productId: number;
  slug: string;
  name: string;

  skuId: string;
  attributes: SKU["attributes"];
  price: number;
  image?: string;
};
