import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
  const whatsappNumber = '56994117532';
  const whatsappMessage = encodeURIComponent('Hola Pau, quiero agendar una hora');

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Expertas en <span className="text-pink-600">Depilación con Cera</span> y{' '}
              <span className="text-pink-600">Lifting de Pestañas</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Servicio exclusivo para mujeres en Home Studio, Maipú
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-all shadow-2xl hover:shadow-pink-300 hover:scale-105 duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Reserva tu cita por WhatsApp</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
              <span>Profesional Certificada</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
              <span>Productos de Calidad</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
              <span>Ambiente Cómodo y Privado</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
