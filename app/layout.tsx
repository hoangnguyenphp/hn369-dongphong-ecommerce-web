"use client";

import "./globals.css";
import { CartProvider } from "../hooks/useCart";
import { WishlistProvider } from "../hooks/useWishlist";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-text">
        <CartProvider>
          <WishlistProvider>{children}</WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
