"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product, SKU } from "../lib/models/product";
import { CartItem } from "../lib/models/cart";

type CartContextType = {
  items: CartItem[];

  addToCart: (product: Product, sku: SKU) => void;
  removeFromCart: (skuId: string) => void;
  clearCart: () => void;

  isOpen: boolean;
  toggleOpen: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "ecommerce_cart";

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(true);

  /* ----------------------------
   * Load cart from localStorage
   * ---------------------------- */
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        setItems([]);
      }
    }
  }, []);

  /* ----------------------------
   * Persist cart to localStorage
   * ---------------------------- */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  /* ----------------------------
   * Cart Actions
   * ---------------------------- */
  const addToCart = (product: Product, sku: SKU) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.skuId === sku.skuId
      );

      if (existing) {
        return prev.map((i) =>
          i.skuId === sku.skuId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [
        ...prev,
        {
          productId: product.id,
          slug: product.slug,
          name: product.name,

          skuId: sku.skuId,
          attributes: sku.attributes,
          price: sku.price,
          quantity: 1,
          image: sku.image ?? product.images[0],
        },
      ];
    });

    setIsOpen(true); // auto-open cart when adding
  };

  const removeFromCart = (skuId: string) => {
    setItems((prev) =>
      prev.filter((i) => i.skuId !== skuId)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleOpen = () => {
    setIsOpen((v) => !v);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        isOpen,
        toggleOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }
  return ctx;
}
