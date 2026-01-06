import { Product } from "../models/product";

export const products: Product[] = [
  {
    id: 1,
    slug: "iphone-15-pro",
    name: "iPhone 15 Pro",
    description: "Titanium. Pro camera.",
    images: ["/images/iphone/hero.jpg"],
    skus: [
      {
        skuId: "ip15-black-128",
        attributes: { color: "Black", storage: "128GB" },
        price: 999,
        stock: 10,
        image: "/images/iphone/black.jpg",
      },
      {
        skuId: "ip15-white-256",
        attributes: { color: "White", storage: "256GB" },
        price: 1099,
        stock: 3,
        image: "/images/iphone/white.jpg",
      },
    ],
  },
    {
    id: 2,
    slug: "iphone-17-pro",
    name: "iPhone 17 Pro",
    description: "Titanium. Pro camera.",
    images: ["/images/iphone/hero.jpg"],
    skus: [
      {
        skuId: "ip17-black-128",
        attributes: { color: "Black", storage: "128GB" },
        price: 999,
        stock: 10,
        image: "/images/iphone/black.jpg",
      },
      {
        skuId: "ip17-white-256",
        attributes: { color: "White", storage: "256GB" },
        price: 1099,
        stock: 3,
        image: "/images/iphone/white.jpg",
      },
    ],
  },
];

export async function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
