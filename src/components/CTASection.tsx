
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";

export const CTASection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('cta-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta-section" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-gray-900">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 text-access-blue">
            Votre succès commence maintenant !
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 font-open-sans">
            Prenez rendez-vous et bénéficiez d'un diagnostic gratuit de votre activité
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <Card className="bg-gray-50 border-gray-200 hover-lift shadow-lg">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-access-orange" />
                <h3 className="text-xl font-montserrat font-bold mb-2 text-gray-900">Appelez-nous</h3>
                <p className="text-gray-600 mb-4">Conseiller disponible 8h-18h</p>
                <div className="space-y-2">
                  <a 
                    href="tel:+221338273821" 
                    className="block text-access-blue font-bold text-lg hover:text-access-orange transition-colors"
                  >
                    +221 33 827 38 21
                  </a>
                  <a 
                    href="tel:+221785327559" 
                    className="block text-access-blue font-bold text-lg hover:text-access-orange transition-colors"
                  >
                    +221 78 532 75 59
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="bg-gray-50 border-gray-200 hover-lift shadow-lg">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-access-blue" />
                <h3 className="text-xl font-montserrat font-bold mb-2 text-gray-900">Visitez-nous</h3>
                <p className="text-gray-600 mb-4">Bureau principal</p>
                <p className="text-access-blue font-semibold">
                  Sacré Cœur 3<br />
                  Villa N° 9653<br />
                  Dakar, Sénégal
                </p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="bg-gray-50 border-gray-200 hover-lift shadow-lg">
              <CardContent className="p-6 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-access-green" />
                <h3 className="text-xl font-montserrat font-bold mb-2 text-gray-900">Écrivez-nous</h3>
                <p className="text-gray-600 mb-4">Réponse sous 24h</p>
                <a 
                  href="mailto:contact@access-pme.net"
                  className="text-access-green font-bold text-lg hover:text-access-blue transition-colors"
                >
                  contact@access-pme.net
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Lead Magnet Call to Action */}
          <Card className="bg-gradient-to-r from-access-blue to-access-green max-w-2xl mx-auto text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-4">
                Diagnostic gratuit de votre activité
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Évaluation complète de vos forces et faiblesses + Plan d'action personnalisé
              </p>
              
              <Button 
                onClick={scrollToContact}
                className="bg-access-orange hover:bg-orange-700 text-white px-8 font-semibold"
                size="lg"
              >
                Nous contacter
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <p className="text-sm opacity-70 mt-4">
                ✓ Diagnostic personnalisé ✓ Évaluation complète ✓ Plan d'action sur mesure
              </p>
            </CardContent>
          </Card>

          {/* Final Message */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 font-open-sans">
              Libérez tout votre potentiel de croissance
            </p>
            <p className="text-2xl font-montserrat font-bold mt-2 text-access-orange">
              Votre Succès, Notre Engagement !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
