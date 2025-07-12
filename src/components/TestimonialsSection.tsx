
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export const TestimonialsSection = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "Fatou Sall",
      role: "Commerçante",
      location: "Marché Sandaga, Dakar",
      content: "Ma boutique en ligne me permet de gérer mes catégories, produits et clients facilement. Je partage le lien et mes ventes ont doublé en 3 mois !",
      rating: 5,
      avatar: "F",
      color: "bg-pink-500"
    },
    {
      name: "Moussa Diop",
      role: "Fondateur Startup",
      location: "Almadies, Dakar",
      content: "L'application m'a fait gagner 10h par semaine sur ma gestion financière. Le suivi de trésorerie en temps réel est parfait !",
      rating: 5,
      avatar: "M",
      color: "bg-blue-500"
    },
    {
      name: "Aïcha Ba",
      role: "Entrepreneuse",
      location: "Thiès",
      content: "Grâce aux conseils ACCESS PME et l'application, j'ai optimisé ma gestion financière et doublé mon chiffre d'affaires en 6 mois.",
      rating: 5,
      avatar: "A",
      color: "bg-green-500"
    },
    {
      name: "Ibrahima Ndiaye",
      role: "Directeur PME",
      location: "Plateau, Dakar",
      content: "L'accompagnement personnalisé a transformé notre vision de la gestion financière. Notre équipe maîtrise maintenant tous les outils !",
      rating: 5,
      avatar: "I",
      color: "bg-purple-500"
    },
    {
      name: "Mariama Touré",
      role: "Commerçante",
      location: "Guédiawaye",
      content: "La boutique en ligne intégrée avec gestion complète des produits m'a ouvert de nouveaux marchés. Mes ventes ont explosé !",
      rating: 5,
      avatar: "M",
      color: "bg-orange-500"
    },
    {
      name: "Amadou Sy",
      role: "Gérant Restaurant",
      location: "Yoff, Dakar",
      content: "Les services de conseil et l'application pour le suivi financier ont sauvé mon restaurant. Plus jamais de mauvaises surprises !",
      rating: 5,
      avatar: "A",
      color: "bg-red-500"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2500); // Réduit de 4000ms à 2500ms pour plus de vitesse

    const handleMouseEnter = () => {
      clearInterval(interval);
    };

    const handleMouseLeave = () => {
      const newInterval = setInterval(() => {
        api.scrollNext();
      }, 2500);
      return () => clearInterval(newInterval);
    };

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      clearInterval(interval);
    };
  }, [api]);

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

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <Carousel
            setApi={setApi}
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={() => {
              // Pause auto-scroll on hover
            }}
            onMouseLeave={() => {
              // Resume auto-scroll
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Quote Icon */}
                      <Quote className="w-8 h-8 text-access-red/20 mb-4" />
                      
                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      {/* Content */}
                      <blockquote className="text-gray-700 mb-6 leading-relaxed italic flex-grow">
                        "{testimonial.content}"
                      </blockquote>
                      
                      {/* Author */}
                      <div className="flex items-center mt-auto">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
