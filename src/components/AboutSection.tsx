
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-access-orange/10 rounded-full blur-sm animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-access-green/10 rounded-full blur-sm animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-access-blue/10 rounded-full blur-sm animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Titre principal */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-access-blue mb-6">
              À propos
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto leading-relaxed">
              Propulsez Votre Entreprise : Découvrez ACCESS PME
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Contenu principal */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-montserrat font-bold text-access-blue mb-6">
                Une équipe de professionnels spécialisés dans l'accompagnement des entrepreneurs
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nous vous accompagnons dans la structuration de votre activité, la gestion optimisée de vos finances et de votre trésorerie, ainsi que dans vos démarches administratives.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                En complément, vous bénéficiez d'un outil numérique innovant et d'une boutique en ligne, vous permettant de suivre votre trésorerie et boostez vos ventes en temps réel.
              </p>
            </div>

            {/* Image des conseillers africains */}
            <div className="animate-slide-up">
              <div className="relative group">
                <img 
                  src="/lovable-uploads/53692a86-e6a6-4fef-9530-8ed4a7de37b8.png"
                  alt="Conseillers ACCESS PME en réunion" 
                  className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-access-blue/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Animation floating elements around image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-access-orange rounded-full animate-bounce opacity-70"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-access-green rounded-full animate-pulse opacity-70"></div>
              </div>
            </div>
          </div>

          {/* Section Jokkolabs avec design ajusté */}
          <div className="text-center animate-fade-in">
            <div className="relative bg-gradient-to-r from-access-blue/5 via-access-green/5 to-access-orange/5 rounded-2xl p-4 overflow-hidden">
              <div className="relative z-10 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="text-center md:text-left">
                    <h4 className="text-lg font-montserrat font-bold text-access-blue mb-2">
                      Une initiative de
                    </h4>
                    <p className="text-gray-600 font-open-sans text-sm">
                      L'écosystème de référence pour l'innovation<br />
                      sociale et entrepreneuriale en Afrique
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <a href="http://www.jokkolabs.net/" target="_blank" rel="noopener noreferrer">
                        <img 
                          src="/lovable-uploads/6557697e-085f-4deb-99ce-6ad4d77fb066.png" 
                          alt="Jokkolabs - Social Change Hub" 
                          className="h-24 w-auto hover:scale-110 transition-transform duration-300"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
