import Container from "./Container";
import Link from "next/link";
import { routes } from "../../lib/routes";

const NAV_ITEMS = [
  { label: "Home", href: routes.home() },
  { label: "Categories", href: routes.categories() },
  { label: "Deals", href: routes.home() },
];

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
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="relative group">
              <Link
                href={item.href}
                className="opacity-90 group-hover:opacity-100 transition"
              >
                {item.label}

                <span
                  className="
                    absolute -bottom-1 left-0 h-[2px] w-0
                    bg-white
                    transition-all group-hover:w-full
                  "
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}