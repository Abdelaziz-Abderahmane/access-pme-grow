
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star, Zap } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Basique",
      price: "7 000",
      period: "/mois",
      description: "Parfait pour débuter",
      features: [
        { name: "E-boutique WhatsApp", included: true },
        { name: "Suivi trésorerie basique", included: true },
        { name: "Rapports mensuels", included: true },
        { name: "Support par email", included: true },
        { name: "Conseil personnalisé", included: false },
        { name: "Formations", included: false },
        { name: "IA prédictive", included: false }
      ],
      buttonText: "Commencer",
      buttonStyle: "outline",
      popular: false
    },
    {
      name: "Standard",
      price: "25 000",
      period: "/mois",
      description: "Le plus populaire",
      features: [
        { name: "E-boutique WhatsApp", included: true },
        { name: "Suivi trésorerie avancé", included: true },
        { name: "Rapports hebdomadaires", included: true },
        { name: "Support prioritaire", included: true },
        { name: "Conseil personnalisé (4h/mois)", included: true },
        { name: "Formations mensuelles", included: true },
        { name: "IA prédictive", included: false }
      ],
      buttonText: "Choisir Standard",
      buttonStyle: "primary",
      popular: true,
      offer: "1 MOIS GRATUIT"
    },
    {
      name: "Intégrée",
      price: "60 000",
      period: "/mois",
      description: "Solution complète",
      features: [
        { name: "E-boutique WhatsApp", included: true },
        { name: "Suivi trésorerie temps réel", included: true },
        { name: "Rapports quotidiens", included: true },
        { name: "Support 24/7", included: true },
        { name: "Conseil personnalisé illimité", included: true },
        { name: "Formations illimitées", included: true },
        { name: "IA prédictive complète", included: true }
      ],
      buttonText: "Accès Premium",
      buttonStyle: "primary",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-access-blue mb-6">
            Tarification Claire
          </h2>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
            Choisissez le plan qui correspond à vos besoins et à votre budget
          </p>
        </div>

        {/* Special Offer Banner */}
        <div className="bg-gradient-to-r from-access-red to-red-600 text-white rounded-2xl p-6 text-center mb-12 shadow-xl">
          <div className="flex items-center justify-center mb-2">
            <Zap className="w-6 h-6 mr-2 text-yellow-300" />
            <span className="text-lg font-montserrat font-bold">OFFRE SPÉCIALE</span>
          </div>
          <p className="text-2xl font-bold mb-2">1 MOIS GRATUIT sur le plan Standard</p>
          <p className="opacity-90">Profitez de notre offre de lancement limitée</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative hover-lift transition-all duration-300 ${
                plan.popular 
                  ? 'border-access-red shadow-xl scale-105 bg-white' 
                  : 'border-gray-200 shadow-lg bg-white'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-access-red text-white px-4 py-1">
                  <Star className="w-4 h-4 mr-1" />
                  Plus populaire
                </Badge>
              )}
              
              {plan.offer && (
                <Badge className="absolute -top-3 right-4 bg-green-500 text-white px-3 py-1">
                  {plan.offer}
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-montserrat font-bold text-access-blue mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-montserrat font-bold text-access-red">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">FCFA{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full py-3 text-lg font-semibold ${
                    plan.buttonStyle === 'primary'
                      ? 'bg-access-red hover:bg-red-700 text-white'
                      : 'bg-white border-2 border-access-red text-access-red hover:bg-access-red hover:text-white'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Tous les plans incluent une garantie satisfait ou remboursé de 30 jours
          </p>
          <Button variant="link" className="text-access-blue hover:text-access-red font-semibold">
            Comparer tous les plans en détail →
          </Button>
        </div>
      </div>
    </section>
  );
};
