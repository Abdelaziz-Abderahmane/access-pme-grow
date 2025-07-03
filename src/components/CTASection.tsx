
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, FileText, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-access-blue via-access-blue/90 to-access-red">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 text-shadow-lg">
            Prêt à révolutionner votre gestion ?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-12 font-open-sans text-shadow">
            Rejoignez plus de 500 entrepreneurs qui ont transformé leur business
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-montserrat font-bold mb-2">Appelez-nous</h3>
                <p className="opacity-90 mb-4">Conseiller disponible 8h-18h</p>
                <a 
                  href="tel:+221338273821" 
                  className="text-yellow-300 font-bold text-lg hover:text-yellow-200 transition-colors"
                >
                  +221 33 827 38 21
                </a>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-green-300" />
                <h3 className="text-xl font-montserrat font-bold mb-2">Chat WhatsApp</h3>
                <p className="opacity-90 mb-4">Réponse immédiate</p>
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold"
                  size="sm"
                >
                  Démarrer le chat
                </Button>
              </CardContent>
            </Card>

            {/* Audit */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                <h3 className="text-xl font-montserrat font-bold mb-2">Audit gratuit</h3>
                <p className="opacity-90 mb-4">Diagnostic personnalisé</p>
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                  size="sm"
                >
                  Réserver
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Lead Magnet Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-4">
                Recevez le guide gratuit
              </h3>
              <p className="text-lg opacity-90 mb-6">
                "7 Erreurs Financières qui Tuent les PME Africaines"
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Votre email professionnel"
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                />
                <Button 
                  className="bg-access-red hover:bg-red-700 text-white px-8 font-semibold"
                  size="lg"
                >
                  Télécharger
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <p className="text-sm opacity-70 mt-4">
                ✓ Guide PDF de 20 pages ✓ Checklist pratique ✓ Cas d'études réels
              </p>
            </CardContent>
          </Card>

          {/* Final Message */}
          <div className="mt-16 text-center">
            <p className="text-lg opacity-90 font-open-sans">
              Votre réussite commence par une conversation.
            </p>
            <p className="text-2xl font-montserrat font-bold mt-2 text-yellow-300">
              Contactez-nous dès maintenant !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
