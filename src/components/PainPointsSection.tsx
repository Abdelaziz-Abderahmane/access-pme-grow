
import { Card, CardContent } from "@/components/ui/card";
import { Repeat, TrendingDown, Package, AlertTriangle } from "lucide-react";

export const PainPointsSection = () => {
  const painPoints = [
    {
      title: "Commerçant",
      subtitle: "Votre quotidien est difficile",
      description: "Marges incalculables, stocks anarchiques, impayés invisibles...",
      question: "Et si votre boutique tournait sans vous épuiser ?",
      icon: Package,
      color: "bg-orange-500"
    },
    {
      title: "Startup",
      subtitle: "Croissance = Complexité",
      description: "Trésorerie imprévisible, reporting chronophage, décisions à l'aveugle...",
      question: "Et si vous pilotiez votre croissance en temps réel ?",
      icon: TrendingDown,
      color: "bg-purple-500"
    },
    {
      title: "Entrepreneur",
      subtitle: "Passion vs Gestion",
      description: "Créatif bridé par l'administratif, vision noyée dans les chiffres...",
      question: "Et si la finance boostait votre créativité ?",
      icon: Repeat,
      color: "bg-blue-500"
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
                <div className="bg-access-red/5 rounded-lg p-4 border-l-4 border-access-red">
                  <p className="text-access-red font-semibold text-sm">
                    {point.question}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-access-blue to-access-red text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Quel que soit votre profil...
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nous avons la solution adaptée à vos besoins spécifiques
            </p>
            <AlertTriangle className="w-12 h-12 mx-auto text-yellow-300 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
