import { useState, useEffect } from 'react';
import { Menu, X, Feather } from 'lucide-react';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const whatsappNumber = '56994117532';
  const whatsappMessage = encodeURIComponent('Hola Pau, quiero agendar una hora');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Feather className="w-8 h-8 text-pink-600" />
              <button 
                onClick={() => scrollToSection('inicio')} 
                className="text-2xl font-bold text-gray-900 hover:opacity-80 transition-opacity focus:outline-none"
              >
                Pau <span className="text-pink-600">Depilación</span>
              </button>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Servicios
            </button>
            
            <button
              onClick={() => scrollToSection('resenas')}
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Reseñas
            </button>
            <button
              onClick={() => scrollToSection('ubicacion')}
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Ubicación
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Contacto
            </button>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Agendar Hora
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-pink-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-200 pt-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Servicios
            </button>

            <button
              onClick={() => scrollToSection('resenas')}
              className="block w-full text-left text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Reseñas
            </button>
            <button
              onClick={() => scrollToSection('ubicacion')}
              className="block w-full text-left text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Ubicación
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Contacto
            </button>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors shadow-lg"
            >
              Agendar Hora
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
