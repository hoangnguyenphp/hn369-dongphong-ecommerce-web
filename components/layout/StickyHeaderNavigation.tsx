import Header from "./Header";
import Navigation from "./Navigation";

export default function StickyHeaderNavigation() {
  return (
    <div className="sticky top-0 z-50 bg-surface/90 backdrop-blur">
      <Header />
      <Navigation />
    </div>
  );
}
