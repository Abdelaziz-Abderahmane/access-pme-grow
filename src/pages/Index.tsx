
import { HeroSection } from "@/components/HeroSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { AppShowcaseSection } from "@/components/AppShowcaseSection";
import { ResultsSection } from "@/components/ResultsSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-access-beige">
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionsSection />
        <AppShowcaseSection />
        <ResultsSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
