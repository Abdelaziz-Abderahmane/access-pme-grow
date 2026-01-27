
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
              Propulsez Votre Activité : Découvrez ACCESS PME
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
            <div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/53692a86-e6a6-4fef-9530-8ed4a7de37b8.png"
                  alt="Conseillers ACCESS PME en réunion" 
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
