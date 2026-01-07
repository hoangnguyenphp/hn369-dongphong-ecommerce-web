import Container from "./Container";

export default function Navigation() {
  return (
    <nav className="
      top-0 z-50
      bg-white/90 dark:bg-slate-900/80
      backdrop-blur-lg
      border-b border-gray-200/60 dark:border-slate-700
      shadow-sm
    ">
      <Container>
        <ul className="
          flex gap-8 py-3
          text-sm font-semibold
          text-gray-800 dark:text-gray-100
        ">
          <li className="relative cursor-pointer group">
            <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
              Home
            </span>
            <span className="
              absolute -bottom-1 left-0 h-[2px] w-0
              bg-gradient-to-r from-indigo-500 to-pink-500
              transition-all group-hover:w-full
            " />
          </li>

          <li className="relative cursor-pointer group">
            <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
              Categories
            </span>
            <span className="
              absolute -bottom-1 left-0 h-[2px] w-0
              bg-gradient-to-r from-indigo-500 to-pink-500
              transition-all group-hover:w-full
            " />
          </li>

          <li className="relative cursor-pointer group">
            <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
              Deals
            </span>
            <span className="
              absolute -bottom-1 left-0 h-[2px] w-0
              bg-gradient-to-r from-indigo-500 to-pink-500
              transition-all group-hover:w-full
            " />
          </li>
        </ul>
      </Container>
    </nav>
  );
}
