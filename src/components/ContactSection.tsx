
import { Phone, MessageCircle, Instagram, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/5511965919937?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contato" className="py-20 primary-gradient-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              Estamos prontas para cuidar da sua beleza. Entre em contato e agende seu horário!
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl font-playfair">
                    <Phone className="w-6 h-6" />
                    Contatos Diretos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700 text-white justify-start"
                  >
                    <a href="https://wa.me/5511965919937" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-3" />
                      WhatsApp: (11) 96591-9937
                    </a>
                  </Button>

                  <Button
                    asChild
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white justify-start"
                  >
                    <a href="https://instagram.com/guusta.r" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-5 h-5 mr-3" />
                      Instagram: @guusta.r
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl font-playfair">
                    <MapPin className="w-6 h-6" />
                    Localização
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-100">
                    Atendimento em domicílio na região de São Paulo
                  </p>
                  <p className="text-sm text-purple-200 mt-2">
                    Entre em contato para verificar disponibilidade na sua região
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl font-playfair">
                    <Clock className="w-6 h-6" />
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-purple-100">
                    <div className="flex justify-between">
                      <span>Segunda - Sexta:</span>
                      <span>9h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span>8h às 16h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span>Sob consulta</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl font-playfair text-white">
                    <Mail className="w-6 h-6" />
                    Envie uma Mensagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                      />
                    </div>

                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Seu telefone (opcional)"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                      />
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Conte-nos sobre o serviço que deseja ou dúvidas que tem..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="bg-white/20 border-white/30 text-white placeholder:text-purple-200 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-white text-purple-900 hover:bg-gray-100 font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105"
                    >
                      Enviar via WhatsApp
                    </Button>
                  </form>

                  <p className="text-sm text-purple-200 mt-4 text-center">
                    Sua mensagem será enviada diretamente para nosso WhatsApp
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
