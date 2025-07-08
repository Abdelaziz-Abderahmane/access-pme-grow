
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Smartphone, FileText, GraduationCap, BarChart3, Users } from "lucide-react";

export const SolutionsSection = () => {
  const solutions = [
    {
      title: "Diagnostic Personnalisé",
      description: "Évaluation complète de votre activité avec plan d'action personnalisé",
      icon: Briefcase,
      features: ["Audit complet", "Évaluation détaillée", "Plan d'action personnalisé"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Assistance à la Gestion Financière",
      description: "ACCESS PME vous aide à mieux comprendre vos chiffres et à évaluer vos leviers de financement",
      icon: BarChart3,
      features: ["Analyse financière", "Leviers de financement", "Optimisation trésorerie"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Assistance Administrative",
      description: "Bénéficiez d'un accompagnement sur mesure dans vos démarches administratives",
      icon: FileText,
      features: ["Déclarations automatiques", "Suivi conformité", "Accompagnement personnalisé"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Accompagnement Humain",
      description: "Bénéficiez des conseils personnalisés pour accroître votre activité",
      icon: Users,
      features: ["Conseiller dédié", "Suivi personnalisé", "Réseau d'entrepreneurs"],
      color: "from-red-500 to-red-600"
    },
    {
      title: "Formation à la Gestion Financière",
      description: "Maîtrisez vos finances grâce à nos programmes de formation approfondis",
      icon: GraduationCap,
      features: ["Formation personnalisée", "Suivi post-formation", "Certification ACCESS PME"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Application de Gestion de Trésorerie & Boutique en ligne",
      description: "Boostez vos ventes 24h/24 et pilotez votre trésorerie depuis votre smartphone",
      icon: Smartphone,
      features: ["Gestion trésorerie temps réel", "Boutique en ligne intégrée", "Alertes automatiques"],
      color: "from-blue-500 to-blue-600"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        <div className="w-2 h-2 bg-access-orange rounded-full mr-3 flex-shrink-0"></div>
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
          <div className="text-center mb-8">
            <h3 className="text-2xl font-montserrat font-bold text-access-blue mb-4">
              Résultats Concrets
            </h3>
            <p className="text-gray-600">
              Grâce à ACCESS PME, vous n'êtes plus seul(e) : vous avancez avec des conseils concrets
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-montserrat font-bold text-access-orange mb-2">95%</div>
              <div className="text-gray-600">Satisfaction & recommandation</div>
            </div>
            <div>
              <div className="text-4xl font-montserrat font-bold text-access-green mb-2">87%</div>
              <div className="text-gray-600">Croissance trésorerie +20%</div>
            </div>
            <div>
              <div className="text-4xl font-montserrat font-bold text-access-blue mb-2">60%</div>
              <div className="text-gray-600">Recrutent des collaborateurs</div>
            </div>
            <div>
              <div className="text-4xl font-montserrat font-bold text-access-orange mb-2">2/3</div>
              <div className="text-gray-600">Gagnent un temps précieux</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
