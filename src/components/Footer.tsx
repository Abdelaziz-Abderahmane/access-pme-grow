
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-access-red rounded-lg flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-lg">A</span>
              </div>
              <span className="font-montserrat font-bold text-xl">ACCESS PME</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Initiative de Jokkolabs pour libérer les PME africaines des complexités financières.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Solutions</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Conseil financier</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Application mobile</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gestion administrative</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Formations</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutoriels</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Webinaires</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-access-red" />
                <span>+221 33 827 38 21</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-access-red" />
                <span>contact@accesspme.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-access-red mt-1" />
                <span>Jokkolabs Dakar<br />Plateau, Sénégal</span>
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
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
