
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, ShoppingBag, Bell, BarChart3, Smartphone, Download } from "lucide-react";

export const AppShowcaseSection = () => {
  return (
    <section id="application" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header - Centered */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-access-blue mb-6">
            Notre Application
          </h2>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
            L'Application ACCESS PME<br />
            Tout ce dont vous avez besoin pour gérer votre entreprise, dans votre poche
          </p>
        </div>

        {/* App Features - Aligned Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* App Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-access-blue to-access-green rounded-2xl p-8 shadow-2xl">
              <img 
                src="/lovable-uploads/8fccf90b-64c9-453f-b897-79f5321a72ec.png" 
                alt="Application ACCESS PME" 
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 group">
              <div className="bg-access-blue/10 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-access-blue" />
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-bold text-access-blue mb-2">
                  Suivi Trésorerie Temps Réel
                </h3>
                <p className="text-gray-600">
                  Visualisez vos flux financiers instantanément et pilotez votre activité où que vous soyez
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-access-green/10 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                <ShoppingBag className="w-6 h-6 text-access-green" />
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-bold text-access-green mb-2">
                  Boutique en ligne
                </h3>
                <p className="text-gray-600">
                  Vendez sur tous les canaux en partageant simplement le lien de votre boutique
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-access-orange/10 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                <Bell className="w-6 h-6 text-access-orange" />
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-bold text-access-orange mb-2">
                  Alertes Anti-Impayés
                </h3>
                <p className="text-gray-600">
                  Recevez des notifications intelligentes pour éviter les retards de paiement
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-access-red/10 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-6 h-6 text-access-red" />
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-bold text-access-red mb-2">
                  Rapports Détaillés
                </h3>
                <p className="text-gray-600">
                  Générez des analyses complètes pour prendre des décisions éclairées
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials - Centered */}
        <div className="text-center mb-12">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <p className="text-gray-700 italic mb-4">
                  "Grâce au suivi temps réel, j'ai augmenté ma trésorerie de 30% en 3 mois !"
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    M
                  </div>
                  <div>
                    <div className="font-semibold">Moussa Diop</div>
                    <div className="text-sm text-gray-600">Entrepreneur, Dakar</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <p className="text-gray-700 italic mb-4">
                  "Ma boutique en ligne a multiplié mes ventes par 3. Je partage juste le lien !"
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    F
                  </div>
                  <div>
                    <div className="font-semibold">Fatou Sall</div>
                    <div className="text-sm text-gray-600">Commerçante, Sandaga</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Download Buttons - Centered */}
        <div className="text-center">
          <p className="text-lg font-montserrat font-semibold text-access-blue mb-6">
            Téléchargez l'application gratuitement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://apps.apple.com/ci/app/access-pme/id6737127505"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Télécharger sur</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>
            </a>
            
            <a 
              href="https://play.google.com/store/apps/details?id=com.accesspme.app&pcampaignid=web_share&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Disponible sur</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
