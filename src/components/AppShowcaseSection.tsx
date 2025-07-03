
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, TrendingUp, ShoppingCart, AlertCircle, BarChart3, Download } from "lucide-react";

export const AppShowcaseSection = () => {
  const features = [
    {
      title: "Suivi trésorerie temps réel",
      description: "Visualisez vos flux de trésorerie en temps réel avec des graphiques intuitifs",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      title: "E-boutique WhatsApp",
      description: "Vendez directement via WhatsApp avec catalogue intégré et paiements simplifiés",
      icon: ShoppingCart,
      color: "text-blue-500"
    },
    {
      title: "Alertes anti-impayés",
      description: "Système d'alerte intelligent pour réduire drastiquement vos impayés",
      icon: AlertCircle,
      color: "text-red-500"
    },
    {
      title: "Rapports prédictifs",
      description: "IA qui analyse vos données pour prédire les tendances de votre business",
      icon: BarChart3,
      color: "text-purple-500"
    }
  ];

  return (
    <section id="app" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - App Mockup */}
          <div className="relative">
            <div className="relative z-10">
              {/* Phone Mockup */}
              <div className="mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-access-beige rounded-[2.5rem] overflow-hidden">
                  {/* Phone Header */}
                  <div className="bg-access-blue text-white p-4 flex items-center justify-between">
                    <span className="font-montserrat font-bold">ACCESS PME</span>
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    {/* Dashboard Cards */}
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Trésorerie</span>
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="text-2xl font-bold text-access-blue">2.5M FCFA</div>
                      <div className="text-sm text-green-500">+15% ce mois</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Ventes du jour</span>
                        <ShoppingCart className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="text-2xl font-bold text-access-blue">450K FCFA</div>
                      <div className="text-sm text-blue-500">12 commandes</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Alertes</span>
                        <AlertCircle className="w-4 h-4 text-red-500" />
                      </div>
                      <div className="text-sm text-red-500">3 impayés à suivre</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-access-red to-red-600 rounded-lg p-4 text-white">
                      <div className="text-center">
                        <BarChart3 className="w-8 h-8 mx-auto mb-2" />
                        <div className="text-sm font-semibold">Rapport IA prêt</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-access-red/10 rounded-full animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-access-blue/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Right Side - Features */}
          <div>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-access-blue mb-6">
              L'Application <span className="text-access-red">Star</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 font-open-sans">
              Tout ce dont vous avez besoin pour gérer votre entreprise, dans votre poche
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-montserrat font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
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
              Télécharger maintenant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
