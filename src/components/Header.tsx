
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'contact') {
      document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/53692a86-e6a6-4fef-9530-8ed4a7de37b8.png" 
              alt="ACCESS PME" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-access-blue font-medium transition-colors"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-access-blue font-medium transition-colors"
              >
                Nos services
              </button>
              <button 
                onClick={() => scrollToSection('application')}
                className="text-gray-700 hover:text-access-blue font-medium transition-colors"
              >
                Notre Application
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-access-blue font-medium transition-colors"
              >
                Nos offres
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-access-blue font-medium transition-colors"
              >
                Témoignages
              </button>
            </nav>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-access-red hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-access-blue font-medium text-left"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-access-blue font-medium text-left"
              >
                Nos services
              </button>
              <button 
                onClick={() => scrollToSection('application')}
                className="text-gray-700 hover:text-access-blue font-medium text-left"
              >
                Notre Application
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-access-blue font-medium text-left"
              >
                Nos offres
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-access-blue font-medium text-left"
              >
                Témoignages
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-access-red hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold w-fit"
              >
                Contact
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
