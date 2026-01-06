import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import HeroBanner from "../components/home/HeroBanner";
import FeaturedCategories from "../components/home/FeaturedCategories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Navigation />
      <HeroBanner />
      <FeaturedCategories />
      <FeaturedProducts />
      <Footer />
    </>
  );
}