
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/ef3f9179-5812-473a-a4df-6b57703baac3.png" 
              alt="ACCESS PME Logo" 
              className="h-32 w-auto"
            />
          </div>

          {/* Desktop Navigation - Positioned to the right */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-access-blue transition-colors font-medium"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-gray-700 hover:text-access-blue transition-colors font-medium"
              >
                Nos services
              </button>
              <button 
                onClick={() => scrollToSection('app')}
                className="text-gray-700 hover:text-access-blue transition-colors font-medium"
              >
                Notre Application
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-access-blue transition-colors font-medium"
              >
                Nos offres
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-access-blue transition-colors font-medium"
              >
                Témoignages
              </button>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="text-access-blue border-access-blue hover:bg-access-blue/10"
                onClick={() => scrollToSection('contact')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-access-blue transition-colors font-medium px-4 py-2"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-left text-gray-700 hover:text-access-blue transition-colors font-medium px-4 py-2"
              >
                Nos services
              </button>
              <button 
                onClick={() => scrollToSection('app')}
                className="text-left text-gray-700 hover:text-access-blue transition-colors font-medium px-4 py-2"
              >
                Notre Application
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left text-gray-700 hover:text-access-blue transition-colors font-medium px-4 py-2"
              >
                Nos offres
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-access-blue transition-colors font-medium px-4 py-2"
              >
                Témoignages
              </button>
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-access-blue border-access-blue hover:bg-access-blue/10"
                  onClick={() => scrollToSection('contact')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
