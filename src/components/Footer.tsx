
import { Heart, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Sil, a Cabeleireira
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Transformando beleza em autoestima há mais de 10 anos. 
                Cuidamos do seu cabelo com carinho e profissionalismo.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <div className="space-y-2">
                {[
                  { label: 'Início', href: '#inicio' },
                  { label: 'Sobre', href: '#sobre' },
                  { label: 'Serviços', href: '#servicos' },
                  { label: 'Galeria', href: '#galeria' },
                  { label: 'Contato', href: '#contato' },
                ].map((link) => (
                  <button
                    key={link.label}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-gray-400 hover:text-purple-300 transition-colors duration-300 mx-auto"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/5511965919937"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-end gap-2 text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  <MessageCircle size={18} />
                  (11) 96591-9937
                </a>
                <a
                  href="https://instagram.com/guusta.r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-end gap-2 text-gray-400 hover:text-pink-400 transition-colors duration-300"
                >
                  <Instagram size={18} />
                  @guusta.r
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 Sil, a Cabeleireira. Todos os direitos reservados.
              </p>
              
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Feito com</span>
                <Heart size={16} className="text-red-500 fill-current" />
                <span>para você</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
