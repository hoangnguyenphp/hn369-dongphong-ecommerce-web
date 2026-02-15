import StickyHeaderNavigation from "../../components/layout/StickyHeaderNavigation";
import Footer from "../../components/layout/Footer";
import Container from "../../components/layout/Container";

import CartSummary from "../../components/common/CartSummary";
import WishlistSummary from "../../components/common/WishlistSummary";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StickyHeaderNavigation />

      <main className="min-h-screen py-10">
        <Container>
          {children}
        </Container>
      </main>

      <Footer />

      <CartSummary />
      <WishlistSummary />
    </>
  );
}
