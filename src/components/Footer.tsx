
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info with larger logo */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <img 
                src="/lovable-uploads/ef3f9179-5812-473a-a4df-6b57703baac3.png" 
                alt="ACCESS PME Logo" 
                className="h-32 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Une équipe de professionnels spécialisés dans l'accompagnement des entrepreneurs.
            </p>
            
            {/* Jokkolabs section with larger logo and new design */}
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-sm text-gray-300 mb-1">Une initiative de</p>
                  <p className="text-xs text-gray-400">Social Change Hub</p>
                </div>
                <a href="http://www.jokkolabs.net/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/lovable-uploads/c07f16a2-c3fd-4039-b8aa-00b546c95a4a.png" 
                    alt="Jokkolabs" 
                    className="h-24 w-auto hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Instagram className="w-7 h-7 text-gray-400 hover:text-access-orange cursor-pointer transition-colors" />
              <Facebook className="w-7 h-7 text-gray-400 hover:text-access-blue cursor-pointer transition-colors" />
              <Linkedin className="w-7 h-7 text-gray-400 hover:text-access-blue cursor-pointer transition-colors" />
              <svg className="w-7 h-7 text-gray-400 hover:text-access-orange cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <svg className="w-7 h-7 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-access-orange">Nos Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-access-orange transition-colors">Gestion Financière</a></li>
              <li><a href="#" className="hover:text-access-orange transition-colors">Assistance Administrative</a></li>
              <li><a href="#" className="hover:text-access-orange transition-colors">Conseil Stratégique</a></li>
              <li><a href="#" className="hover:text-access-orange transition-colors">Formation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-access-green">Support</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-access-green transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-access-green transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-access-green transition-colors">Tutoriels</a></li>
              <li><a href="#" className="hover:text-access-green transition-colors">Support technique</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-access-blue">Contact</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-access-orange flex-shrink-0" />
                <span>+221 33 827 38 21</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-access-orange flex-shrink-0" />
                <span>contact@access-pme.net</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-access-orange mt-1 flex-shrink-0" />
                <span>Sacré Cœur 3, Villa N° 9653<br />Dakar, Sénégal</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 ACCESS PME. Tous droits réservés.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-access-blue transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-access-green transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-access-orange transition-colors">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
