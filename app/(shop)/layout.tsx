import Header from "../../components/layout/Header";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";

import CartSummary from "../../components/common/CartSummary";
import WishlistSummary from "../../components/common/WishlistSummary";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Navigation />

      <main className="min-h-screen">{children}</main>

      <Footer />

      <CartSummary />
      <WishlistSummary />
    </>
  );
}
