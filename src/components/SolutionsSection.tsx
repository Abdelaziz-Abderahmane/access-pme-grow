
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Smartphone, FileText, GraduationCap } from "lucide-react";

export const SolutionsSection = () => {
  const solutions = [
    {
      title: "Conseil financier stratégique",
      description: "Experts dédiés pour optimiser votre trésorerie, réduire vos coûts et maximiser vos profits",
      icon: Briefcase,
      features: ["Audit financier complet", "Plan de trésorerie personnalisé", "Suivi mensuel avec expert"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Application tout-en-un",
      description: "Pilotez votre entreprise depuis votre smartphone avec tous les outils essentiels",
      icon: Smartphone,
      features: ["Suivi temps réel", "E-boutique WhatsApp", "Rapports automatisés"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Libération administrative",
      description: "Nous gérons votre paperasse pendant que vous développez votre business",
      icon: FileText,
      features: ["Déclarations automatiques", "Suivi conformité", "Support juridique"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Formations booste-profits",
      description: "Montez en compétences avec nos formations pratiques animées par des experts",
      icon: GraduationCap,
      features: ["Webinaires exclusifs", "Cas d'études réels", "Certification ACCESS PME"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-access-blue mb-6">
            Nos Solutions
          </h2>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
            Un écosystème complet pour transformer votre gestion financière et booster votre croissance
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-0">
                {/* Icon Header */}
                <div className={`bg-gradient-to-r ${solution.color} p-6 text-center`}>
                  <solution.icon className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-montserrat font-bold text-white">
                    {solution.title}
                  </h3>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-access-red rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-montserrat font-bold text-access-red mb-2">500+</div>
              <div className="text-gray-600">PME accompagnées</div>
            </div>
            <div>
              <div className="text-4xl font-montserrat font-bold text-access-red mb-2">25%</div>
              <div className="text-gray-600">Croissance moyenne CA</div>
            </div>
            <div>
              <div className="text-4xl font-montserrat font-bold text-access-red mb-2">80%</div>
              <div className="text-gray-600">Réduction impayés</div>
            </div>
            <div>
              <div className="text-4xl font-montserrat font-bold text-access-red mb-2">94%</div>
              <div className="text-gray-600">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
