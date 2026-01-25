"use client";

import Container from "./Container";
import SearchBar from "../common/SearchBar";
import ThemeToggle from "../common/ThemeToggle";
import Link from "next/link";
import Image from "next/image";

import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import {routes} from "../../lib/routes"

export default function Header() {
  const { toggleOpen: toggleCart } = useCart();
  const { toggleOpen: toggleWishlist } = useWishlist();

  return (
    <header className="top-0 z-50 bg-surface/90 backdrop-blur border-b border-border">
      <Container>
        <div className="grid grid-cols-12 items-center gap-4 py-4">
          {/* Logo */}
          <div className="col-span-6 md:col-span-2">
            <Link href={routes.home()} className="flex items-center gap-2">
              <Image
                src="https://res.cloudinary.com/ddnshr4rk/image/upload/v1768147038/infinity_universe_log_lighter_aspang.jpg"
                alt="HN369 Logo"
                width={72}
                height={72}
                className="block dark:hidden rounded-md"
                priority
              />
              <Image
                src="https://res.cloudinary.com/ddnshr4rk/image/upload/v1768020250/infinity_universe_log_dark_b3gvug.jpg"
                alt="HN369 Logo Dark"
                width={72}
                height={72}
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

            {/* Cart Icon */}
            <button
              onClick={toggleCart}
              aria-label="Open cart"
              className="text-xl hover:text-accent transition"
            >
              🛒
            </button>
            {/* Wishlist Icon */}
            <button
              onClick={toggleWishlist}
              aria-label="Open wishlist"
              className="text-xl hover:text-accent transition"
            >
              ❤️
            </button>            
          </div>
        </div>
      </Container>
    </header>
  );
}
