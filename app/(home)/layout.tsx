import StickyHeaderNavigation from "../../components/layout/StickyHeaderNavigation";
import HeroBanner from "../../components/home/HeroBanner";
import Footer from "../../components/layout/Footer";
import CartSummary from "../../components/common/CartSummary";
import WishlistSummary from "../../components/common/WishlistSummary";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StickyHeaderNavigation />
      <HeroBanner />

      <main className="min-h-screen">{children}</main>

      <Footer />
      <CartSummary />
      <WishlistSummary />      
    </>
  );
}
