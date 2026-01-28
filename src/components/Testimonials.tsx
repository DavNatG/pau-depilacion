import { motion } from 'framer-motion';
import { Star, Instagram } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María José',
      rating: 5,
      text: 'Excelente servicio! Pau es muy profesional y el ambiente es súper cómodo. El lifting de pestañas quedó perfecto.',
      date: 'Hace 2 semanas',
    },
    {
      name: 'Carolina',
      rating: 5,
      text: 'La mejor depilación que he tenido! Muy prolija, rápida y casi sin dolor. 100% recomendada.',
      date: 'Hace 1 mes',
    },
    {
      name: 'Valentina',
      rating: 5,
      text: 'Me encanta venir a atenderme con Pau. Siempre súper atenta, cuidadosa y el lugar es impecable. Definitivamente volveré.',
      date: 'Hace 3 semanas',
    },
  ];

  return (
    <section id="resenas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen mis <span className="text-pink-600">Clientas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Testimonios reales de clientas satisfechas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-pink-600 fill-pink-600" />
                  ))}
                </div>
                <Instagram className="w-5 h-5 text-pink-600" />
              </div>

              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

              <div className="flex items-center justify-between border-t border-pink-200 pt-4">
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Más reseñas en Instagram</p>
          <a
            href="https://instagram.com/paudepilacion.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-semibold transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>@paudepilacion.cl</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
