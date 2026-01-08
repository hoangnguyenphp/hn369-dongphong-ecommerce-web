"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Product, SKU } from "../lib/models/product";
import { WishlistItem } from "../lib/models/wishlist";

/* =======================
   CONTEXT TYPE
======================= */
type WishlistContextType = {
  wishlistItems: WishlistItem[];
  addToWishlist: (product: Product, sku: SKU) => void;
  removeFromWishlist: (skuId: string) => void;
  clearWishlist: () => void;

  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggleOpen: () => void;
};

/* =======================
   CONTEXT
======================= */
const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

/* =======================
   PROVIDER
======================= */
export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  /* ---------- LOAD FROM LOCALSTORAGE ---------- */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("wishlist");
    if (saved) {
      try {
        setWishlistItems(JSON.parse(saved));
      } catch {
        localStorage.removeItem("wishlist");
      }
    }
    setIsHydrated(true);
  }, []);

  /* ---------- SAVE TO LOCALSTORAGE ---------- */
  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems, isHydrated]);

  /* ---------- ADD TO WISHLIST (SKU-AWARE) ---------- */
  const addToWishlist = (product: Product, sku: SKU) => {
    setWishlistItems((prev) => {
      const exists = prev.some((i) => i.skuId === sku.skuId);
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
          image: sku.images?.[0] ?? product.thumbnail ?? "",
        },
      ];
    });

    setIsOpen(true); // ✅ ensure summary opens
  };

  /* ---------- REMOVE ---------- */
  const removeFromWishlist = (skuId: string) => {
    setWishlistItems((prev) => prev.filter((i) => i.skuId !== skuId));
  };

  /* ---------- CLEAR ---------- */
  const clearWishlist = () => {
    setWishlistItems([]);
    setIsOpen(false);
  };

  /* ---------- UI CONTROLS ---------- */
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,

        isOpen,
        open,
        close,
        toggleOpen,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

/* =======================
   HOOK
======================= */
export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return context;
}
