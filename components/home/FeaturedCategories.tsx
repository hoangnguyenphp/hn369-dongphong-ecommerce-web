export default function FeaturedCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {["Electronics", "Fashion", "Home"].map(cat => (
          <div
            key={cat}
            className="rounded-xl border p-6 text-center hover:shadow-md transition"
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}
