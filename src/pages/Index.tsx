
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { AppShowcaseSection } from "@/components/AppShowcaseSection";
import { PricingSection } from "@/components/PricingSection";
import { ResultsSection } from "@/components/ResultsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-access-beige w-full overflow-x-hidden">
      <Header />
      <main className="w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <PainPointsSection />
        <SolutionsSection />
        <AppShowcaseSection />
        <PricingSection />
        <ResultsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
