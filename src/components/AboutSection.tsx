
import { Award, Heart, Star } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
              Sobre a Sil
            </h2>
            <div className="w-24 h-1 primary-gradient mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Sil, a Cabeleireira"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 primary-gradient opacity-20"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 primary-gradient rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 secondary-gradient rounded-full opacity-30"></div>
            </div>

            {/* Content */}
            <div className="animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-gray-800 mb-6">
                Uma paixão que virou profissão
              </h3>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Há mais de 10 anos, dedico minha vida a cuidar da autoestima de mulheres 
                através da arte da beleza capilar. Cada cabelo é único, cada cliente é especial, 
                e cada transformação é uma nova história de sucesso.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Com técnica apurada, produtos de qualidade e muito carinho, transformo 
                não apenas cabelos, mas também sorrisos e autoconfiança. Aqui, você não é 
                apenas mais uma cliente - você é parte da nossa família.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-md hover-scale">
                  <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">10+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-xl shadow-md hover-scale">
                  <Heart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">Clientes Satisfeitas</div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-xl shadow-md hover-scale">
                  <Star className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">5.0</div>
                  <div className="text-sm text-gray-600">Avaliação Média</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
