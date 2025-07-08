import { Droplets, Wind, Palette, Scissors, Sparkles, Hand, Eye, CalendarCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Progressiva',
      description: 'Liso perfeito e duradouro com a nossa técnica exclusiva.',
      price: 'R$ 250,00'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Selagem',
      description: 'Redução de volume e frizz, proporcionando brilho e maciez.',
      price: 'R$ 180,00'
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Botox Capilar',
      description: 'Reconstrução e preenchimento dos fios para um cabelo rejuvenescido.',
      price: 'R$ 150,00'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Coloração',
      description: 'Transforme seu visual com cores vibrantes e cobertura impecável.',
      price: 'R$ 170,00'
    },
    {
      icon: <CalendarCheck className="w-8 h-8" />, // Usei um ícone de calendário/check para cronograma
      title: 'Cronograma Capilar',
      description: 'Tratamento completo de hidratação, nutrição e reconstrução para a saúde dos seus fios.',
      price: 'A partir de R$ 90,00'
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'Corte',
      description: 'Novo estilo ou manutenção, sempre com precisão e modernidade.',
      price: 'R$ 70,00'
    },
    {
      icon: <Eye className="w-8 h-8" />, // Ícone para sobrancelha
      title: 'Sobrancelha',
      description: 'Design e cuidado para realçar o seu olhar.',
      price: 'R$ 45,00'
    },
    {
      icon: <Hand className="w-8 h-8" />, // Ícone para manicure
      title: 'Manicure',
      description: 'Unhas impecáveis e bem cuidadas para as suas mãos.',
      price: 'R$ 35,00'
    },
    {
      icon: <Wind className="w-8 h-8" />, // Substituído por Wind para pedicure
      title: 'Pedicure',
      description: 'Pés relaxados e unhas perfeitas para o seu bem-estar.',
      price: 'R$ 45,00'
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-purple-800 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Descubra a transformação que a Sil pode trazer para sua beleza!
            </p>
            <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-purple-200 border-opacity-60"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100/50 rounded-full text-purple-700">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-playfair text-purple-800">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 pt-0">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-semibold text-purple-700">Preço:</span>
                    <span className="text-2xl font-bold text-purple-900">{service.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 italic">
              * Valores podem variar conforme a necessidade e condição dos fios. Agende uma consulta para um orçamento preciso!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;