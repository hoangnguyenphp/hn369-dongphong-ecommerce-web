"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Product = { id: number; name: string; price: number; image?: string };

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  toggleOpen: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCartItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    if (cartItems.length > 0) setIsOpen(true); // open automatically when items added
  }, [cartItems]);

  const addToCart = (product: Product) => setCartItems((prev) => [...prev, product]);
  const removeFromCart = (productId: number) => setCartItems((prev) => prev.filter(p => p.id !== productId));
  const clearCart = () => setCartItems([]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, isOpen, toggleOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
