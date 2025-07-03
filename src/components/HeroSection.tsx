
import { Button } from "@/components/ui/button";
import { Play, Download, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-access-blue via-access-green to-access-orange flex items-center justify-center">
          <div className="text-center text-white/20 font-montserrat text-6xl font-bold">
            VIDEO BACKGROUND
          </div>
        </div>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 leading-tight animate-fade-in text-shadow-lg">
            Propulsez Votre Entreprise avec{" "}
            <span className="text-yellow-300">ACCESS PME</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-open-sans font-light max-w-3xl mx-auto animate-slide-up text-shadow">
            Une équipe de professionnels spécialisés dans l'accompagnement des entrepreneurs
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Button 
              size="lg" 
              className="bg-access-orange hover:bg-access-orange/90 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Découvrir nos solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Application GRATUITE
            </Button>
          </div>

          {/* Initiative Badge */}
          <div className="animate-fade-in mb-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white/90">
              <span className="text-sm font-medium">Une initiative de</span>
              <img 
                src="/lovable-uploads/c07f16a2-c3fd-4039-b8aa-00b546c95a4a.png" 
                alt="Jokkolabs" 
                className="ml-2 h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-access-orange/20 rounded-full blur-sm animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-access-green/20 rounded-full blur-sm animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-access-blue/20 rounded-full blur-sm animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};
