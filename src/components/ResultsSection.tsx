
import { TrendingUp, Users, Clock, Award } from "lucide-react";

export const ResultsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-access-blue mb-6">
            Résultats Concrets
          </h2>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
            Un accompagnement à la hauteur de vos engagements
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="bg-access-blue/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 text-access-blue" />
            </div>
            <div className="text-4xl font-montserrat font-bold text-access-blue mb-2">95%</div>
            <div className="text-gray-600 text-sm">se déclarent satisfaits et recommandent ACCESS PME</div>
          </div>
          
          <div className="text-center">
            <div className="bg-access-green/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-access-green" />
            </div>
            <div className="text-4xl font-montserrat font-bold text-access-green mb-2">87%</div>
            <div className="text-gray-600 text-sm">augmentation de trésorerie +20% en 6 mois</div>
          </div>
          
          <div className="text-center">
            <div className="bg-access-orange/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 text-access-orange" />
            </div>
            <div className="text-4xl font-montserrat font-bold text-access-orange mb-2">60%</div>
            <div className="text-gray-600 text-sm">recrutent de nouveaux collaborateurs</div>
          </div>
          
          <div className="text-center">
            <div className="bg-access-blue/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-8 h-8 text-access-blue" />
            </div>
            <div className="text-4xl font-montserrat font-bold text-access-blue mb-2">2/3</div>
            <div className="text-gray-600 text-sm">gagnent un temps précieux pour leur cœur de métier</div>
          </div>
        </div>
      </div>
    </section>
  );
};
