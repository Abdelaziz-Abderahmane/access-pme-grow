
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Fatou Sall",
      role: "Commerçante",
      location: "Marché Sandaga, Dakar",
      content: "Mon conseiller a libéré 4 millions FCFA de trésorerie en 3 mois ! Je peux enfin développer ma boutique sereinement.",
      rating: 5,
      avatar: "F",
      color: "bg-pink-500"
    },
    {
      name: "Moussa Diop",
      role: "Fondateur Startup",
      location: "Almadies, Dakar",
      content: "L'application m'a fait gagner 10h par semaine sur ma comptabilité. Les rapports IA sont bluffants de précision !",
      rating: 5,
      avatar: "M",
      color: "bg-blue-500"
    },
    {
      name: "Aïcha Ba",
      role: "Entrepreneuse",
      location: "Thiès",
      content: "Grâce à ACCESS PME, j'ai réduit mes impayés de 70% et doublé mon chiffre d'affaires en 6 mois.",
      rating: 5,
      avatar: "A",
      color: "bg-green-500"
    },
    {
      name: "Ibrahima Ndiaye",
      role: "Directeur PME",
      location: "Plateau, Dakar",
      content: "L'accompagnement personnalisé a transformé notre vision de la finance. Notre équipe est enfin alignée !",
      rating: 5,
      avatar: "I",
      color: "bg-purple-500"
    },
    {
      name: "Mariama Touré",
      role: "Commerçante",
      location: "Guédiawaye",
      content: "La boutique WhatsApp intégrée m'a ouvert de nouveaux marchés. Mes ventes ont explosé !",
      rating: 5,
      avatar: "M",
      color: "bg-orange-500"
    },
    {
      name: "Amadou Sy",
      role: "Gérant Restaurant",
      location: "Yoff, Dakar",
      content: "Les alertes anti-impayés ont sauvé mon restaurant. Plus jamais de mauvaises surprises !",
      rating: 5,
      avatar: "A",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-access-blue mb-6">
            Témoignages Vivants
          </h2>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto mb-8">
            Découvrez comment nos clients transforment leur business avec ACCESS PME
          </p>
          
          {/* Satisfaction Badge */}
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 mr-2 fill-current" />
            <span className="font-semibold">94% de satisfaction client</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-access-red/20 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonial Section */}
        <div className="bg-gradient-to-r from-access-blue to-access-red rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-montserrat font-bold mb-4">
            Écoutez nos entrepreneurs parler de leur transformation
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Des témoignages vidéo authentiques de nos clients les plus fidèles
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-0 h-0 border-l-6 border-r-0 border-t-4 border-b-4 border-l-white border-t-transparent border-b-transparent ml-1"></div>
            </div>
            <p className="text-sm font-medium">Vidéos témoignages</p>
            <p className="text-xs opacity-80">Bientôt disponible</p>
          </div>
        </div>
      </div>
    </section>
  );
};
