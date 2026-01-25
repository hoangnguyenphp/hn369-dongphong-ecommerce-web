import Link from "next/link";
import { getRootCategories } from "../../../domain/category/category";
import {routes} from "../../../lib/routes"

export default function CategoriesPage() {
  const categories = getRootCategories();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">All Categories</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((c) => (
          <Link
            key={c.id}
            href={`${routes.categories()}/${c.slug}`}
            className="p-4 border rounded-lg hover:bg-bg"
          >
            {c.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
