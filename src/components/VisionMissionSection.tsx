import { Target, Heart, Shield, Scale, Eye, Handshake, CheckCircle } from "lucide-react";

export const VisionMissionSection = () => {
  const values = [
    { name: "Confidentialité", icon: Shield },
    { name: "Intégrité", icon: CheckCircle },
    { name: "Transparence", icon: Eye },
    { name: "Équité", icon: Scale },
    { name: "Responsabilité", icon: Handshake }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-access-blue/5 via-white to-access-orange/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-access-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-access-orange rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-access-blue mb-6">
            Notre Vision & Mission
          </h2>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
            Guidés par nos valeurs, nous œuvrons pour l'épanouissement des entrepreneurs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Vision */}
          <div className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-access-blue/20 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-access-blue to-blue-600 p-4 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-montserrat font-bold text-access-blue">
                  Vision
                </h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-lg font-open-sans">
                Access PME vise à être le <span className="font-semibold text-access-blue">partenaire de confiance</span> des entrepreneurs, 
                en leur fournissant des conseils financiers et non financiers pour favoriser leur croissance et leur intégration dans l'économie formelle.
              </p>
              
              <div className="mt-6 p-4 bg-access-blue/5 rounded-lg border-l-4 border-access-blue">
                <p className="text-gray-700 font-open-sans">
                  Notre engagement se traduit par un <span className="font-semibold">accompagnement stratégique personnalisé et de proximité</span> avec un réseau de conseillers accompagnateurs, 
                  assisté de solutions digitales innovantes.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-access-orange/20 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-access-orange to-orange-600 p-4 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-montserrat font-bold text-access-orange">
                  Mission
                </h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-lg font-open-sans">
                Notre mission est d'<span className="font-semibold text-access-orange">accompagner les entrepreneurs vers le succès</span> en libérant leur potentiel de croissance, 
                en leur donnant accès à des outils et des conseils avisés de proximité.
              </p>
              
              <div className="mt-6 p-4 bg-access-orange/5 rounded-lg border-l-4 border-access-orange">
                <p className="text-gray-700 font-open-sans">
                  Nous croyons au pouvoir de l'<span className="font-semibold">accompagnement humain</span> combiné à l'innovation technologique 
                  pour transformer les défis en opportunités.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nos Valeurs */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-montserrat font-bold text-access-blue mb-4">
              Nos Valeurs
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-access-blue/20 flex items-center gap-3"
              >
                <div className="bg-access-blue/10 p-2 rounded-lg">
                  <value.icon className="w-5 h-5 text-access-blue" />
                </div>
                <span className="font-montserrat font-semibold text-gray-800">
                  {value.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
