
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-access-beige via-white to-access-beige pt-20">
      <div className="container mx-auto px-4 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge className="bg-access-blue/10 text-access-blue border-access-blue/20 px-4 py-2 text-sm font-medium">
              🚀 Solution N°1 pour PME Africaines
            </Badge>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-access-blue leading-tight">
              Libérez votre entreprise des 
              <span className="text-access-red"> complexités financières</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 font-open-sans leading-relaxed">
              Conseil expert + Application tout-en-un = Croissance maîtrisée
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>+500 PME accompagnées</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>95% de satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>App gratuite</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('about')}
                size="lg"
                className="bg-access-red hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full hover-lift"
              >
                En savoir plus
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Partner Logos */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Ils nous font confiance :</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-gray-400">BDK</div>
                <div className="text-2xl font-bold text-gray-400">COFINA</div>
                <img 
                  src="/lovable-uploads/6da8b5d1-a6e3-4056-9c1b-35aec5b1f9b9.png" 
                  alt="Jokkolabs" 
                  className="h-8 opacity-60"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-access-blue to-access-green rounded-2xl p-8 shadow-2xl hover-lift">
              <img 
                src="/lovable-uploads/ef3f9179-5812-473a-a4df-6b57703baac3.png" 
                alt="Entrepreneurs africains au travail" 
                className="w-full rounded-lg shadow-lg"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce">
                <div className="text-2xl">📈</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg animate-pulse">
                <div className="text-2xl">💰</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
