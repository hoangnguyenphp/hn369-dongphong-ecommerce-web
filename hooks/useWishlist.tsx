"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product, SKU } from "../lib/models/product";
import { WishlistItem } from "../lib/models/wishlist";

type WishlistContextType = {
  wishlistItems: WishlistItem[];
  addToWishlist: (product: Product, sku: SKU) => void;
  removeFromWishlist: (skuId: string) => void;
  clearWishlist: () => void;
  isOpen: boolean;
  toggleOpen: () => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  /* ---------- LOAD FROM LOCALSTORAGE ---------- */
  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) setWishlistItems(JSON.parse(saved));
  }, []);

  /* ---------- SAVE TO LOCALSTORAGE ---------- */
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    if (wishlistItems.length > 0) setIsOpen(true);
  }, [wishlistItems]);

  /* ---------- ADD TO WISHLIST (SKU-AWARE) ---------- */
  const addToWishlist = (product: Product, sku: SKU) => {
    setWishlistItems((prev) => {
      const exists = prev.find((i) => i.skuId === sku.skuId);
      if (exists) return prev;

      return [
        ...prev,
        {
          productId: product.id,
          slug: product.slug,
          name: product.name,

          skuId: sku.skuId,
          attributes: sku.attributes,
          price: sku.price,
          image: sku.image ?? product.images[0],
        },
      ];
    });
  };

  /* ---------- REMOVE ---------- */
  const removeFromWishlist = (skuId: string) =>
    setWishlistItems((prev) => prev.filter((i) => i.skuId !== skuId));

  const clearWishlist = () => setWishlistItems([]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isOpen,
        toggleOpen,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return context;
}
