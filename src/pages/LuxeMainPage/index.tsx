import { Header } from "../../widgets/Header";
import { HeroSection } from "../../widgets/HeroSection";
import { CategorySection } from "../../widgets/CategorySection";
import { FeaturedProducts } from "../../widgets/FeaturedProducts";
import { PromoSection } from "../../widgets/PromoSection";
import { Footer } from "../../widgets/Footer";

export const LuxeMainPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <PromoSection />
      </main>
      <Footer />
    </div>
  );
};