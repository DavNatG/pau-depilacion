import { motion } from 'framer-motion';
import { MapPin, Instagram, MessageCircle, Clock, Sparkles } from 'lucide-react';

const ContactFooter = () => {
  const whatsappNumber = '56994117532';
  const whatsappMessage = encodeURIComponent('Hola Pau, quiero agendar una hora');

  return (
    <>
      <section id="ubicacion" className="py-20 bg-gradient-to-br from-pink-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-pink-600">Ubicación</span> y Contacto
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos en Maipú, Santiago - Agenda tu hora con facilidad
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dirección</h3>
                  <p className="text-gray-600">Home Studio en Maipú</p>
                  <p className="text-gray-600">Santiago, Chile</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Horarios</h3>
                  <p className="text-gray-600">Lunes a Sábado</p>
                  <p className="text-gray-600">Con cita previa</p>
                  <p className="text-sm text-pink-600 mt-2">Consulta disponibilidad</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-700 font-semibold"
                  >
                    +56 9 9411 7532
                  </a>
                  <p className="text-sm text-gray-600 mt-2">Horario de respuesta: 9:00 - 20:00 hrs</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-3xl p-8 text-white shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-6">¿Lista para tu próxima cita?</h3>
              <p className="text-pink-100 mb-8 text-lg">
                Reserva tu hora por WhatsApp y recibe confirmación inmediata. Recuerda que requerimos un abono previo para asegurar tu cita.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-all shadow-xl hover:scale-105 duration-300 mb-8"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Agendar por WhatsApp</span>
              </a>

              <div className="border-t border-pink-500 pt-6">
                <p className="text-pink-100 mb-4">Sígueme en Instagram para ver más trabajos y promociones:</p>
                <a
                  href="https://instagram.com/paudepilacion.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-white hover:text-pink-100 font-semibold transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                  <span>@paudepilacion.cl</span>
                </a>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer id="contacto" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-pink-600" fill="#E91E63" />
                <h3 className="text-2xl font-bold">Pau Depilación</h3>
              </div>
              <p className="text-gray-400">
                Home Studio especializado en depilación con cera y lifting de pestañas en Maipú, Santiago.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contacto</h4>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-pink-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>+56 9 9411 7532</span>
                </a>
                <a
                  href="https://instagram.com/paudepilacion.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-pink-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@paudepilacion.cl</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>Maipú, Santiago</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Horarios</h4>
              <p className="text-gray-400 mb-2">Lunes a Sábado</p>
              <p className="text-gray-400 mb-2">Con cita previa</p>
              <p className="text-pink-600 font-semibold">Solo atención a mujeres</p>
            </div>
          </div>

          <div className="w-full h-90 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.263008450254!2d-70.78678858796177!3d-33.520546900995775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dd6de661dc75%3A0xf194cb7a6b86eeb1!2sPaudepilaci%C3%B3n.cl!5e0!3m2!1ses!2scl!4v1769096666272!5m2!1ses!2scl"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full block" // 'block' elimina espacios fantasma
                    ></iframe>
                  </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Pau Depilación. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
