
export const JokkolabsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-access-blue/5 via-access-green/5 to-access-orange/5 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-access-orange/10 rounded-full blur-sm animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-access-green/10 rounded-full blur-sm animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-access-blue/10 rounded-full blur-sm animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Titre avec animation */}
          <div className="mb-8 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-access-blue mb-4">
              Une initiative de
            </h2>
          </div>

          {/* Logo Jokkolabs avec effet hover */}
          <div className="flex justify-center mb-8 animate-slide-up">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-white/20">
              <img 
                src="/lovable-uploads/c07f16a2-c3fd-4039-b8aa-00b546c95a4a.png" 
                alt="Jokkolabs - Social Change Hub" 
                className="h-20 md:h-28 w-auto mx-auto"
              />
              <p className="text-access-blue/70 text-sm mt-4 font-open-sans">
                Social Change Hub
              </p>
            </div>
          </div>

          {/* Description avec style moderne */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto animate-fade-in border border-white/30">
            <p className="text-lg text-gray-700 font-open-sans leading-relaxed">
              ACCESS PME est fier d'être une initiative de 
              <span className="font-semibold text-access-blue"> Jokkolabs</span>, 
              l'écosystème de référence pour l'innovation sociale et entrepreneuriale en Afrique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
