import { Category } from "../models/category";

export const categories: Category[] = [
  // ROOT
  { id: "c1", name: "Electronics", slug: "electronics" },

  // LEVEL 1
  { id: "c2", name: "Phones", slug: "phones", parentSlug: "electronics" },
  { id: "c3", name: "Laptops", slug: "laptops", parentSlug: "electronics" },

  // LEVEL 2
  { id: "c4", name: "iPhone", slug: "iphone", parentSlug: "phones" },
  { id: "c5", name: "Samsung", slug: "samsung", parentSlug: "phones" },

  { id: "c6", name: "Gaming Laptops", slug: "gaming", parentSlug: "laptops" },

  // Đông Phong ROOT
  { id: "dong-phong", name: "Đông Phong", slug: "dong-phong" },

  // Đông Phong muối Tây Ninh (L1)
  { id: "dong-phong-muoi-tay-ninh", name: "Muối Tây Ninh", slug: "dong-phong-muoi-tay-ninh", parentSlug: "dong-phong"},
];
