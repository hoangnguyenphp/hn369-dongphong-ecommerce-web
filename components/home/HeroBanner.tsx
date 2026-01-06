export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Smart Shopping Starts Here
        </h1>
        <p className="mt-4 text-lg">
          Best deals on top products
        </p>
        <button className="mt-6 rounded-xl bg-white px-8 py-3 text-indigo-600 font-semibold">
          Shop Now
        </button>
      </div>
    </section>
  );
}
