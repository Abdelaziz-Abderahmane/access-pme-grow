
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, TrendingUp, Shield, GraduationCap, Smartphone, User, FileText, Banknote, Clock, Award } from "lucide-react";

export const SolutionsSection = () => {
  const services = [
    {
      icon: <User className="w-8 h-8 text-access-blue" />,
      title: "Diagnostic Personnalisé",
      description: "Évaluation complète de votre activité"
    },
    {
      icon: <Banknote className="w-8 h-8 text-access-green" />,
      title: "Assistance à la gestion financière",
      description: "ACCESS PME vous aide à mieux comprendre vos chiffres et à évaluer vos leviers de financement."
    },
    {
      icon: <FileText className="w-8 h-8 text-access-orange" />,
      title: "Assistance Administrative",
      description: "Bénéficiez d'un accompagnement sur mesure dans vos démarches administratives."
    },
    {
      icon: <Users className="w-8 h-8 text-access-blue" />,
      title: "Accompagnement Humain",
      description: "Bénéficiez des conseils personnalisés pour accroître votre activité."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-access-green" />,
      title: "Formation à la gestion financière",
      description: "Maîtrisez vos finances grâce à nos programmes de formation approfondis et bénéficiez d'un support technique continu."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-access-orange" />,
      title: "Application de gestion de trésorerie & Boutique en ligne",
      description: "Boostez vos ventes 24h/24 et pilotez votre trésorerie depuis votre smartphone."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-access-blue mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
            Des Solutions Complètes adaptées à vos besoins
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="bg-access-beige rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-montserrat font-bold text-access-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-open-sans leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-r from-access-blue to-access-green rounded-2xl p-8 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Résultats Concrets
            </h3>
            <p className="text-xl opacity-90">
              Un accompagnement à la hauteur de vos engagements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-montserrat font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">se déclarent satisfaits et recommandent ACCESS PME</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-montserrat font-bold mb-2">87%</div>
              <div className="text-sm opacity-90">augmentation de trésorerie +20% en 6 mois</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-montserrat font-bold mb-2">60%</div>
              <div className="text-sm opacity-90">recrutent de nouveaux collaborateurs</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-montserrat font-bold mb-2">2/3</div>
              <div className="text-sm opacity-90">gagnent un temps précieux pour leur cœur de métier</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
