export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 opacity-90" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Smart Shopping Starts Here
        </h1>

        <p className="mt-4 text-lg text-white/90">
          Best deals on top products — curated for you
        </p>

        {/* <div className="mt-8 flex justify-center gap-4">
          <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
            Shop Now
          </button>
          <button className="border border-white/40 px-6 py-3 rounded-xl hover:bg-white/10 transition">
            View Deals
          </button>
        </div> */}
      </div>
    </section>
  );
}
