import Container from "./Container";
import SearchBar from "../common/SearchBar";
import ThemeToggle from "../common/ThemeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-surface border-b border-border">
      <Container>
        <div className="grid grid-cols-12 items-center gap-4 py-4">
          {/* Logo */}
          <div className="col-span-6 md:col-span-2 font-bold text-xl">
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity"
            >
              ShopLogo
            </Link>
          </div>

          <div className="col-span-12 md:col-span-7 order-3 md:order-none">
            <SearchBar />
          </div>

          <div className="col-span-6 md:col-span-3 flex justify-end items-center gap-4">
            <ThemeToggle />
              🛒 Cart
          </div>
        </div>
      </Container>
    </header>
  );
}
