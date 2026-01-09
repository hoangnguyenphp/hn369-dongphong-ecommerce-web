import Container from "./Container";
import SearchBar from "../common/SearchBar";
import ThemeToggle from "../common/ThemeToggle";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="top-0 z-50 bg-surface/90 backdrop-blur border-b border-border">
      <Container>
        <div className="grid grid-cols-12 items-center gap-4 py-4">
          {/* Logo */}
          <div className="col-span-6 md:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            {/* Light mode logo */}
            <Image
              src="https://res.cloudinary.com/ddnshr4rk/image/upload/v1767952344/a_logo_for_hn369_ecommerce_in_red_color_with_the_idea_of_exploring_the_universe_light_ni0l2p.png"
              alt="HN369 Logo"
              width={56}
              height={56}
              className="block dark:hidden rounded-md"
              priority
            />

            {/* Dark mode logo */}
            <Image
              src="https://res.cloudinary.com/ddnshr4rk/image/upload/v1767959469/a_logo_for_hn369_ecommerce_in_red_color_with_the_idea_of_exploring_the_universe_dark_nl5lq4.png"
              alt="HN369 Logo Dark"
              width={56}
              height={56}
              className="hidden dark:block rounded-md"
              priority
            />

            <span className="hidden md:inline font-bold text-xl text-accent">
              HN369
            </span>
          </Link>
          </div>

          {/* Search */}
          <div className="col-span-12 md:col-span-7 order-3 md:order-none">
            <SearchBar />
          </div>

          {/* Actions */}
          <div className="col-span-6 md:col-span-3 flex justify-end items-center gap-4">
            <ThemeToggle />
            <span className="cursor-pointer">🛒 Cart</span>
          </div>
        </div>
      </Container>
    </header>
  );
}
