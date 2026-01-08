import { Product } from "../models/product";

export const products: Product[] = [
  {
    id: 1,
    slug: "iphone-15-pro",
    name: "iPhone 15 Pro",
    description: "Titanium design with a powerful Pro camera system.",
    thumbnail: "/images/iphone-15-pro/thumbnail.jpg",
    skus: [
      {
        skuId: "ip15-pro-black-128",
        attributes: {
          color: "Black",
          storage: "128GB",
        },
        price: 999,
        stock: 10,
        images: [
          "/images/iphone-15-pro/black/front.jpg",
          "/images/iphone-15-pro/black/back.jpg",
          "/images/iphone-15-pro/black/side.jpg",
        ],
      },
      {
        skuId: "ip15-pro-white-256",
        attributes: {
          color: "White",
          storage: "256GB",
        },
        price: 1099,
        stock: 3,
        images: [
          "/images/iphone-15-pro/white/front.jpg",
          "/images/iphone-15-pro/white/back.jpg",
          "/images/iphone-15-pro/white/side.jpg",
        ],
      },
    ],
  },

  {
    id: 2,
    slug: "iphone-17-pro",
    name: "iPhone 17 Pro",
    description: "Next-gen performance with an advanced Pro camera.",
    thumbnail: "/images/iphone-17-pro/thumbnail.jpg",
    skus: [
      {
        skuId: "ip17-pro-black-256",
        attributes: {
          color: "Black",
          storage: "256GB",
        },
        price: 1199,
        stock: 8,
        images: [
          "/images/iphone-17-pro/black/front.jpg",
          "/images/iphone-17-pro/black/back.jpg",
        ],
      },
      {
        skuId: "ip17-pro-blue-512",
        attributes: {
          color: "Blue",
          storage: "512GB",
        },
        price: 1399,
        stock: 2,
        images: [
          "/images/iphone-17-pro/blue/front.jpg",
          "/images/iphone-17-pro/blue/back.jpg",
        ],
      },
    ],
  },
];

export async function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
