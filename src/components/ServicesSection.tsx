
import { Droplets, Wind, Palette, Scissors } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Hidratação',
      description: 'Nutrição profunda para cabelos saudáveis e brilhantes',
      prices: {
        'Liso Curto': 'R$ 35',
        'Liso Médio': 'R$ 45',
        'Liso Longo': 'R$ 55',
        'Ondulado Curto': 'R$ 40',
        'Ondulado Médio': 'R$ 50',
        'Ondulado Longo': 'R$ 60',
        'Crespo Curto': 'R$ 45',
        'Crespo Médio': 'R$ 55',
        'Crespo Longo': 'R$ 65',
      }
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Escova Modelada',
      description: 'Modelagem perfeita para um visual impecável',
      prices: {
        'Liso Curto': 'R$ 40',
        'Liso Médio': 'R$ 50',
        'Liso Longo': 'R$ 60',
        'Ondulado Curto': 'R$ 45',
        'Ondulado Médio': 'R$ 55',
        'Ondulado Longo': 'R$ 65',
        'Crespo Curto': 'R$ 50',
        'Crespo Médio': 'R$ 60',
        'Crespo Longo': 'R$ 70',
      }
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'Alisamento',
      description: 'Progressiva e Definitiva para cabelos lisos e disciplinados',
      prices: {
        'Progressiva Curto': 'R$ 120',
        'Progressiva Médio': 'R$ 150',
        'Progressiva Longo': 'R$ 180',
        'Definitiva Curto': 'R$ 200',
        'Definitiva Médio': 'R$ 250',
        'Definitiva Longo': 'R$ 300',
      }
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Coloração',
      description: 'Transforme seu visual com cores vibrantes e naturais',
      prices: {
        'Retoque Raiz': 'R$ 80',
        'Coloração Completa Curto': 'R$ 120',
        'Coloração Completa Médio': 'R$ 150',
        'Coloração Completa Longo': 'R$ 180',
        'Mechas Curto': 'R$ 100',
        'Mechas Médio': 'R$ 130',
        'Mechas Longo': 'R$ 160',
      }
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços para realçar sua beleza natural
            </p>
            <div className="w-24 h-1 primary-gradient mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="primary-gradient text-white">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-full">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-playfair">{service.title}</CardTitle>
                      <p className="text-purple-100 mt-2">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 mb-4">Valores por tipo e comprimento:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(service.prices).map(([type, price]) => (
                        <div key={type} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                          <span className="text-gray-600">{type}</span>
                          <span className="font-semibold text-purple-600">{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 italic">
              * Valores podem variar conforme o estado e necessidades específicas do cabelo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
