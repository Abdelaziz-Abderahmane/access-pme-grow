
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, TrendingUp, ShoppingCart, AlertCircle, BarChart3, Download, Users, Calculator, FileText, Bell, CreditCard, MessageCircle } from "lucide-react";

export const AppShowcaseSection = () => {
  const features = [
    {
      title: "Suivi trésorerie temps réel",
      description: "Visualisez vos flux de trésorerie en temps réel avec des graphiques intuitifs et des alertes personnalisées",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      title: "E-boutique WhatsApp",
      description: "Vendez directement via WhatsApp avec catalogue intégré, gestion des commandes et paiements simplifiés",
      icon: ShoppingCart,
      color: "text-blue-500"
    },
    {
      title: "Gestion des clients",
      description: "Base de données complète de vos clients avec historique des transactions et profils détaillés",
      icon: Users,
      color: "text-purple-500"
    },
    {
      title: "Facturation automatisée",
      description: "Créez et envoyez des factures professionnelles en quelques clics avec suivi des paiements",
      icon: FileText,
      color: "text-indigo-500"
    },
    {
      title: "Alertes intelligentes",
      description: "Système d'alerte avancé pour les impayés, les échéances et les opportunités commerciales",
      icon: Bell,
      color: "text-red-500"
    },
    {
      title: "Rapports et analyses",
      description: "Tableaux de bord complets avec analyses prédictives powered by IA pour optimiser votre business",
      icon: BarChart3,
      color: "text-orange-500"
    },
    {
      title: "Gestion des paiements",
      description: "Acceptez les paiements mobile money, cartes bancaires et cash avec réconciliation automatique",
      icon: CreditCard,
      color: "text-teal-500"
    },
    {
      title: "Support client intégré",
      description: "Chat en temps réel avec vos conseillers ACCESS PME directement depuis l'application",
      icon: MessageCircle,
      color: "text-pink-500"
    }
  ];

  return (
    <section id="app" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Real App Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/6a74f87f-c2f3-418e-a55f-88c4587e108c.png"
                alt="Application ACCESS PME - Interface mobile"
                className="w-full h-auto max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-access-red/10 rounded-full animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-access-blue/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Right Side - Features */}
          <div>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-access-blue mb-6">
              L'Application <span className="text-access-red">ACCESS PME</span>
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

            {/* Testimonial */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 mb-8">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "Grâce aux alertes, -80% d'impayés en 1 mois !"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Adama Diallo</div>
                  <div className="text-sm text-gray-600">Commerçant, Dakar</div>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <Button 
              size="lg" 
              className="bg-access-red hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold w-full sm:w-auto"
            >
              <Download className="w-5 h-5 mr-2" />
              Application GRATUITE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
