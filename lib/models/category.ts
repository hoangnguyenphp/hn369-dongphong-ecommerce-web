export type Category = {
  id: string;
  name: string;
  slug: string;            // slug riêng của node
  parentSlug?: string;     // dùng để build tree
  description?: string;
};