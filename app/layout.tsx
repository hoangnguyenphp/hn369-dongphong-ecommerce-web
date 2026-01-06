"use client";

import "./globals.css";
import { CartProvider } from "../hooks/useCart";
import { WishlistProvider } from "../hooks/useWishlist";
import CartSummary from "../components/common/CartSummary";
import WishlistSummary from "../components/common/WishlistSummary";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <WishlistProvider>
            {children}
            <CartSummary />
            <WishlistSummary />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
