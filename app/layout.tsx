"use client";

import "./globals.css";
import { CartProvider } from "../hooks/useCart";
import { WishlistProvider } from "../hooks/useWishlist";
import { ToastProvider } from "../components/common/ToastProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-text">
        <ToastProvider>
          <CartProvider>
            <WishlistProvider>{children}</WishlistProvider>
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
