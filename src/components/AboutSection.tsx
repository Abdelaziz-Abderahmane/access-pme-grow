
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
              À propos d'ACCESS PME
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
                En complément, vous bénéficiez d'une application mobile innovante, vous permettant de suivre votre trésorerie en temps réel, où que vous soyez.
              </p>
            </div>

            {/* Image des conseillers africains */}
            <div className="animate-slide-up">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                  alt="Conseillers professionnels africains en réunion de travail" 
                  className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-access-blue/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Section Jokkolabs avec logo plus grand */}
          <div className="text-center animate-fade-in">
            <div className="bg-gradient-to-r from-access-blue/5 via-access-green/5 to-access-orange/5 rounded-3xl p-8 inline-flex items-center space-x-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-left">
                <h4 className="text-lg font-montserrat font-bold text-access-blue mb-2">
                  Une initiative de
                </h4>
                <p className="text-gray-600 font-open-sans text-sm">
                  L'écosystème de référence pour l'innovation<br />
                  sociale et entrepreneuriale en Afrique
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <a href="http://www.jokkolabs.net/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/lovable-uploads/c07f16a2-c3fd-4039-b8aa-00b546c95a4a.png" 
                    alt="Jokkolabs - Social Change Hub" 
                    className="h-16 w-auto hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
