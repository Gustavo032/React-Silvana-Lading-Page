
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Larissa Santos",
      text: "A Sil mudou minha vida! O atendimento é impecável e o resultado sempre supera minhas expectativas. Meu cabelo nunca esteve tão saudável e bonito.",
      rating: 5,
      service: "Hidratação + Escova"
    },
    {
      name: "Juliana Costa",
      text: "Meu cabelo nunca esteve tão lindo! A Sil tem uma técnica incrível e um carinho especial com cada cliente. Super recomendo!",
      rating: 5,
      service: "Coloração"
    },
    {
      name: "Marina Oliveira",
      text: "Profissional excepcional! Além de muito competente, a Sil é super carinhosa e faz você se sentir em casa. Virei cliente fiel!",
      rating: 5,
      service: "Progressiva"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
              O que dizem nossas clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A satisfação das nossas clientes é nossa maior recompensa
            </p>
            <div className="w-24 h-1 primary-gradient mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-purple-200">
                    <Quote size={32} />
                  </div>

                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-800 mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-purple-600">{testimonial.service}</p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 left-0 w-full h-1 primary-gradient"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Quer fazer parte dessas histórias de sucesso?</p>
            <a
              href="https://agenda.codematch.com.br/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 font-semibold hover:scale-105 transform"
            >
              Agende seu horário
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
