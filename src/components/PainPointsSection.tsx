
import { Card, CardContent } from "@/components/ui/card";
import { Repeat, TrendingDown, Package } from "lucide-react";

export const PainPointsSection = () => {
  const painPoints = [
    {
      title: "Commerçant",
      subtitle: "Votre quotidien vous déborde ?",
      description: "Calculs de marges compliqués, stocks désorganisés, factures impayées qui s'accumulent...",
      question: "Et si votre boutique générait plus de profits avec moins de stress ?",
      icon: Package,
      color: "bg-access-orange"
    },
    {
      title: "Startup",
      subtitle: "Votre croissance vous échappe ?",
      description: "Finances imprévisibles, rapports qui prennent des heures, décisions basées sur des suppositions...",
      question: "Et si vous maîtrisiez votre croissance avec des données fiables ?",
      icon: TrendingDown,
      color: "bg-access-green"
    },
    {
      title: "Entrepreneur",
      subtitle: "L'administratif tue votre créativité ?",
      description: "Idées brillantes freinées par la paperasse, vision entrepreneuriale noyée dans les comptes...",
      question: "Et si la gestion financière devenait votre meilleur allié créatif ?",
      icon: Repeat,
      color: "bg-access-blue"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-access-blue mb-6">
            Vous êtes ?
          </h2>
          <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
            Identifiez-vous et découvrez comment nous transformons vos défis en opportunités
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <Card 
              key={index} 
              className="hover-lift cursor-pointer group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 ${point.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <point.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-montserrat font-bold text-access-blue mb-3">
                  {point.title}
                </h3>
                
                {/* Subtitle */}
                <p className="text-lg font-semibold text-gray-700 mb-4">
                  {point.subtitle}
                </p>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {point.description}
                </p>
                
                {/* Question */}
                <div className="bg-access-orange/5 rounded-lg p-4 border-l-4 border-access-orange">
                  <p className="text-access-orange font-semibold text-sm">
                    {point.question}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-access-blue via-access-green to-access-orange text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Quel que soit votre profil...
            </h3>
            <p className="text-lg opacity-90">
              Nous avons la solution adaptée à vos besoins spécifiques
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
