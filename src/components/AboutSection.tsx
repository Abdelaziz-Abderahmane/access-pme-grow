
export const AboutSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-access-orange/10 rounded-full blur-sm animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-access-green/10 rounded-full blur-sm animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-access-blue/10 rounded-full blur-sm animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Titre principal */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-access-blue mb-6">
              Qui sommes-nous ?
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto leading-relaxed">
              Propulsez Votre Entreprise : Découvrez ACCESS PME
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenu principal */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-montserrat font-bold text-access-blue mb-6">
                Une équipe de professionnels spécialisés dans l'accompagnement des entrepreneurs
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nous vous accompagnons dans la structuration de votre activité, la gestion optimisée de vos finances et de votre trésorerie, ainsi que dans vos démarches administratives.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                En complément, vous bénéficiez d'une application mobile innovante, vous permettant de suivre votre trésorerie en temps réel, où que vous soyez.
              </p>
            </div>

            {/* Section Jokkolabs intégrée */}
            <div className="animate-slide-up">
              <div className="bg-gradient-to-br from-access-blue/5 via-access-green/5 to-access-orange/5 rounded-3xl p-8 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-montserrat font-bold text-access-blue mb-6">
                  Une initiative de
                </h4>
                
                {/* Logo Jokkolabs */}
                <div className="flex justify-center mb-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/30">
                    <img 
                      src="/lovable-uploads/c07f16a2-c3fd-4039-b8aa-00b546c95a4a.png" 
                      alt="Jokkolabs - Social Change Hub" 
                      className="h-16 md:h-20 w-auto mx-auto"
                    />
                  </div>
                </div>

                <p className="text-gray-700 font-open-sans leading-relaxed">
                  ACCESS PME est fier d'être une initiative de 
                  <span className="font-semibold text-access-blue"> Jokkolabs</span>, 
                  l'écosystème de référence pour l'innovation sociale et entrepreneuriale en Afrique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
