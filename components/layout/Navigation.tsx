import Container from "./Container";

export default function Navigation() {
  return (
    <nav className="
      sticky top-0 z-50
      bg-accent
      shadow-sm
    ">
      <Container>
        <ul className="
          flex gap-8 py-3
          text-sm font-semibold
          text-white
        ">
          {["Home", "Categories", "Deals"].map((item) => (
            <li key={item} className="relative cursor-pointer group">
              <span className="opacity-90 group-hover:opacity-100 transition">
                {item}
              </span>

              <span className="
                absolute -bottom-1 left-0 h-[2px] w-0
                bg-white
                transition-all group-hover:w-full
              " />
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
