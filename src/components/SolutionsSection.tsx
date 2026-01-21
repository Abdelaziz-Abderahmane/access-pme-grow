
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Smartphone, FileText, GraduationCap, BarChart3, Users } from "lucide-react";

export const SolutionsSection = () => {
  const solutions = [
    {
      title: "Diagnostic Personnalisé",
      description: "Évaluation complète de votre activité avec plan d'action personnalisé",
      icon: Briefcase,
      features: ["Revue 360° de votre activité", "Évaluation détaillée", "Plan d'action personnalisé"]
    },
    {
      title: "Assistance à la Gestion Financière",
      description: "ACCESS PME vous aide à mieux comprendre vos chiffres et à évaluer vos leviers de financement",
      icon: BarChart3,
      features: ["Analyse financière", "Leviers de financement", "Optimisation trésorerie"]
    },
    {
      title: "Assistance Administrative",
      description: "Bénéficiez d'un accompagnement sur mesure dans vos démarches administratives",
      icon: FileText,
      features: ["Déclaration BRS, CGU etc..", "Suivi conformité", "Accompagnement personnalisé"]
    },
    {
      title: "Accompagnement Humain",
      description: "Bénéficiez des conseils personnalisés pour accroître votre activité",
      icon: Users,
      features: ["Conseiller dédié", "Suivi de proximité", "Réseau d'entrepreneurs"]
    },
    {
      title: "Formation à la Gestion Financière",
      description: "Maîtrisez vos finances grâce à nos programmes de formation approfondis",
      icon: GraduationCap,
      features: ["Formation personnalisée", "Suivi post-formation", "Support technique continu"]
    },
    {
      title: "Application de Gestion de Trésorerie & Boutique en ligne",
      description: "Boostez vos ventes 24h/24 et pilotez votre trésorerie depuis votre smartphone",
      icon: Smartphone,
      features: ["Gestion trésorerie temps réel", "Boutique en ligne intégrée", "Alertes automatiques"]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-access-blue mb-6">
            Des Solutions Complètes adaptées à vos besoins
          </h2>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
            Un écosystème complet pour transformer votre gestion et libérer votre potentiel de croissance
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-0">
                {/* Icon Header with unified gradient background */}
                <div className="bg-gradient-to-r from-access-blue via-access-green to-access-orange p-4 text-center">
                  <solution.icon className="w-10 h-10 text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-montserrat font-bold text-white">
                    {solution.title}
                  </h3>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {solution.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-1.5">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-access-orange rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
