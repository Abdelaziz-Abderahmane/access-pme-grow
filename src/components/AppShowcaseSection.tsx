
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, TrendingUp, ShoppingCart, Users, Calculator, FileText, Bell, CreditCard, Download } from "lucide-react";

export const AppShowcaseSection = () => {
  const features = [
    {
      title: "Suivi trésorerie temps réel",
      description: "Visualisez vos flux de trésorerie avec des graphiques intuitifs et des alertes personnalisées",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      title: "E-boutique WhatsApp",
      description: "Vendez directement via WhatsApp avec catalogue intégré et gestion des commandes",
      icon: ShoppingCart,
      color: "text-blue-500"
    },
    {
      title: "Gestion des clients",
      description: "Base de données complète avec historique des transactions et profils détaillés",
      icon: Users,
      color: "text-purple-500"
    },
    {
      title: "Facturation automatisée",
      description: "Créez et envoyez des factures professionnelles avec suivi des paiements",
      icon: FileText,
      color: "text-indigo-500"
    },
    {
      title: "Alertes intelligentes",
      description: "Système d'alerte pour les impayés, échéances et opportunités commerciales",
      icon: Bell,
      color: "text-red-500"
    },
    {
      title: "Gestion des paiements",
      description: "Acceptez les paiements mobile money et cartes bancaires avec réconciliation",
      icon: CreditCard,
      color: "text-teal-500"
    }
  ];

  return (
    <section id="app" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - App Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/6a74f87f-c2f3-418e-a55f-88c4587e108c.png"
                alt="Application ACCESS PME - Interface mobile"
                className="w-full h-auto max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-access-orange/10 rounded-full animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-access-blue/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Right Side - Features */}
          <div>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-access-blue mb-6">
              L'Application <span className="text-access-orange">ACCESS PME</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 font-open-sans">
              Tout ce dont vous avez besoin pour gérer votre entreprise, dans votre poche
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group">
                  <div className={`w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <feature.icon className={`w-4 h-4 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-montserrat font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="space-y-4 mb-8">
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-4">
                <blockquote className="text-sm italic text-gray-700 mb-3">
                  "Grâce au suivi trésorerie, j'ai pu éviter plusieurs ruptures de stock et optimiser mes achats !"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    A
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900 text-sm">Adama Diallo</div>
                    <div className="text-xs text-gray-600">Commerçant, Dakar</div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4">
                <blockquote className="text-sm italic text-gray-700 mb-3">
                  "Ma boutique WhatsApp m'a permis de doubler mes ventes en 3 mois !"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    F
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900 text-sm">Fatou Sall</div>
                    <div className="text-xs text-gray-600">Entrepreneur, Thiès</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-montserrat font-bold text-access-blue mb-6">
            Téléchargez l'Application GRATUITEMENT
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://apps.apple.com/ci/app/access-pme/id6737127505"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold w-full sm:w-auto"
              >
                <Download className="w-5 h-5 mr-2" />
                App Store
              </Button>
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.accesspme.app&pcampaignid=web_share&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold w-full sm:w-auto"
              >
                <Download className="w-5 h-5 mr-2" />
                Google Play
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
