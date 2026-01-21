
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star, Zap } from "lucide-react";

export const PricingSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: "DIAMBAR",
      price: "7 000",
      period: "/mois",
      description: "Parfait pour débuter",
      priceNote: "",
      features: [
        { name: "Assistance gestion financière", included: false },
        { name: "Déclaration fiscale et sociale", included: false },
        { name: "Conseil stratégique et Opérationnel", included: false },
        { name: "Assistance administrative", included: false },
        { name: "Rapport d'activité (mensuel)", included: true },
        { name: "Conseiller de proximité", included: true },
        { name: "Boutique en ligne", included: true },
        { name: "Application Access PME", included: true }
      ],
      buttonText: "Commencer",
      buttonStyle: "primary",
      popular: false
    },
    {
      name: "NDANANE",
      price: "25 000",
      period: "/mois",
      description: "Le plus populaire",
      priceNote: "À partir de 25 000 FCFA / mois",
      features: [
        { name: "Assistance gestion financière", included: false },
        { name: "Déclaration fiscale et sociale", included: false },
        { name: "Conseil stratégique et Opérationnel", included: false },
        { name: "Assistance administrative", included: true },
        { name: "Rapport d'activité (mensuel)", included: true },
        { name: "Conseiller de proximité", included: true },
        { name: "Boutique en ligne", included: true },
        { name: "Application Access PME", included: true }
      ],
      buttonText: "Choisir NDANANE",
      buttonStyle: "primary",
      popular: true,
      offer: "1 MOIS GRATUIT"
    },
    {
      name: "WARABA",
      price: "75 000",
      period: "/mois",
      description: "Solution complète",
      priceNote: "À partir de 75 000 FCFA / mois",
      features: [
        { name: "Assistance gestion financière", included: true },
        { name: "Déclaration fiscale et sociale", included: true },
        { name: "Conseil stratégique et Opérationnel", included: true },
        { name: "Assistance administrative", included: true },
        { name: "Rapport d'activité (mensuel)", included: true },
        { name: "Conseiller de proximité", included: true },
        { name: "Boutique en ligne", included: true },
        { name: "Application Access PME", included: true }
      ],
      buttonText: "Choisir WARABA",
      buttonStyle: "primary",
      popular: false
    },
    {
      name: "ENTREPRISE",
      price: "Sur mesure",
      period: "",
      description: "Offre spéciale entreprises",
      priceNote: "Tarification personnalisée",
      features: [
        { name: "Assistance gestion financière", included: true },
        { name: "Déclaration fiscale et sociale", included: true },
        { name: "Conseil stratégique et Opérationnel", included: true },
        { name: "Assistance administrative", included: true },
        { name: "Rapport d'activité (mensuel)", included: true },
        { name: "Conseiller de proximité dédié", included: true },
        { name: "Boutique en ligne premium", included: true },
        { name: "Application Access PME", included: true }
      ],
      buttonText: "Nous contacter",
      buttonStyle: "primary",
      popular: false,
      isEnterprise: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-access-blue mb-6">
            Nos Offres
          </h2>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
            Des Solutions Complètes adaptées à vos besoins
          </p>
        </div>

        {/* Special Offer Banner */}
        <div className="bg-gradient-to-r from-access-orange to-orange-600 text-white rounded-2xl p-6 text-center mb-12 shadow-xl">
          <div className="flex items-center justify-center mb-2">
            <Zap className="w-6 h-6 mr-2 text-yellow-300" />
            <span className="text-lg font-montserrat font-bold">OFFRE SPÉCIALE</span>
          </div>
          <p className="text-2xl font-bold mb-2">1 MOIS GRATUIT sur le plan NDANANE</p>
          <p className="opacity-90">Profitez de notre offre de lancement limitée</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative hover-lift transition-all duration-300 ${
                plan.popular 
                  ? 'border-access-orange shadow-xl scale-105 bg-white' 
                  : plan.isEnterprise
                  ? 'border-access-blue shadow-xl bg-gradient-to-b from-access-blue/5 to-white'
                  : 'border-gray-200 shadow-lg bg-white'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-access-orange text-white px-4 py-1">
                  <Star className="w-4 h-4 mr-1" />
                  Plus populaire
                </Badge>
              )}

              {plan.isEnterprise && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-access-blue text-white px-4 py-1">
                  <Zap className="w-4 h-4 mr-1" />
                  Offre Spéciale
                </Badge>
              )}
              
              {plan.offer && (
                <Badge className="absolute -top-3 right-4 bg-access-green text-white px-3 py-1">
                  {plan.offer}
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-montserrat font-bold text-access-blue mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-montserrat font-bold text-access-orange">
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
                        <Check className="w-5 h-5 text-access-green mr-3 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  onClick={() => scrollToSection('cta-section')}
                  className="w-full py-3 text-lg font-semibold bg-access-orange hover:bg-orange-700 text-white"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-montserrat font-bold text-access-blue mb-4">
              Résultats Concrets
            </h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-montserrat font-bold text-gray-800 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction & recommandation</div>
            </div>
            <div>
              <div className="text-4xl font-montserrat font-bold text-gray-800 mb-2">87%</div>
              <div className="text-gray-600">Croissance trésorerie +20%</div>
            </div>
            <div>
              <div className="text-4xl font-montserrat font-bold text-gray-800 mb-2">60%</div>
              <div className="text-gray-600">Recrutent des collaborateurs</div>
            </div>
            <div>
              <div className="text-4xl font-montserrat font-bold text-gray-800 mb-2">2/3</div>
              <div className="text-gray-600">Gagnent un temps précieux</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
