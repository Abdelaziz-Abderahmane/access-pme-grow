
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/ef3f9179-5812-473a-a4df-6b57703baac3.png" 
                alt="ACCESS PME Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Une équipe de professionnels spécialisés dans l'accompagnement des entrepreneurs.
            </p>
            <div className="mb-6">
              <div className="flex items-center space-x-3 bg-gray-800 rounded-lg p-3">
                <img 
                  src="/lovable-uploads/c07f16a2-c3fd-4039-b8aa-00b546c95a4a.png" 
                  alt="Jokkolabs" 
                  className="h-10 w-auto"
                />
                <div>
                  <p className="text-sm text-gray-300">Une initiative de</p>
                  <p className="text-xs text-gray-400">Social Change Hub</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-access-blue cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-access-blue cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-access-blue cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Solutions</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-access-orange transition-colors">Gestion Financière</a></li>
              <li><a href="#" className="hover:text-access-orange transition-colors">Application mobile</a></li>
              <li><a href="#" className="hover:text-access-orange transition-colors">Assistance Administrative</a></li>
              <li><a href="#" className="hover:text-access-orange transition-colors">Formation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-access-green transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-access-green transition-colors">Tutoriels</a></li>
              <li><a href="#" className="hover:text-access-green transition-colors">Webinaires</a></li>
              <li><a href="#" className="hover:text-access-green transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-access-orange" />
                <span>+221 33 827 38 21</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-access-orange" />
                <span>contact@access-pme.net</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-access-orange mt-1" />
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
