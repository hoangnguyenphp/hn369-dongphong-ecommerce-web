import { Product } from "../models/product";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "iphone-15-pro",
    name: "iPhone 15 Pro",
    description: "Apple iPhone 15 Pro with A17 chip",
    images: ["/images/iphone-main.jpg"],
    skus: [
      {
        skuId: "iphone-15-pro-black-128",
        attributes: { color: "Black", storage: "128GB" },
        price: 999,
        stock: 5,
        image: "/images/iphone-black.jpg",
      },
      {
        skuId: "iphone-15-pro-white-256",
        attributes: { color: "White", storage: "256GB" },
        price: 1199,
        stock: 0,
        image: "/images/iphone-white.jpg",
      },
    ],
  },
];
