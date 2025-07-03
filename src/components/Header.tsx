
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Download } from "lucide-react";
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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-access-red rounded-lg flex items-center justify-center">
              <span className="text-white font-montserrat font-bold text-lg">A</span>
            </div>
            <span className="font-montserrat font-bold text-xl text-access-blue">
              ACCESS PME
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-gray-700 hover:text-access-red transition-colors font-medium"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('app')}
              className="text-gray-700 hover:text-access-red transition-colors font-medium"
            >
              Application
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-access-red transition-colors font-medium"
            >
              Tarifs
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-access-red transition-colors font-medium"
            >
              Témoignages
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="text-access-blue border-access-blue">
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Button>
            <Button className="bg-access-red hover:bg-red-700 text-white">
              <Download className="w-4 h-4 mr-2" />
              Télécharger
            </Button>
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
                onClick={() => scrollToSection('solutions')}
                className="text-left text-gray-700 hover:text-access-red transition-colors font-medium px-4 py-2"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('app')}
                className="text-left text-gray-700 hover:text-access-red transition-colors font-medium px-4 py-2"
              >
                Application
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left text-gray-700 hover:text-access-red transition-colors font-medium px-4 py-2"
              >
                Tarifs
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-access-red transition-colors font-medium px-4 py-2"
              >
                Témoignages
              </button>
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                <Button variant="outline" size="sm" className="text-access-blue border-access-blue">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                <Button className="bg-access-red hover:bg-red-700 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
