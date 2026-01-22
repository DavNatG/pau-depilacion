import { motion } from 'framer-motion';
import { Sparkles, Eye, Package } from 'lucide-react';

const Services = () => {
  const whatsappNumber = '56994117532';

  const services = [
    {
      icon: Sparkles,
      title: 'Depilación Corporal',
      description: 'Depilación con cera profesional de calidad para piernas, axilas, rebaje brasilero y más.',
      features: ['Axilas', 'Piernas completas', 'Rebaje brasilero', 'Media pierna', 'Brazos'],
      image: 'https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Eye,
      title: 'Lifting de Pestañas',
      description: 'Realza tu mirada con nuestro servicio de lifting y tinte de pestañas profesional.',
      features: ['Lifting profesional', 'Tinte incluido', 'Duración 4-5 semanas', 'Mirada natural'],
      image: 'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Package,
      title: 'Promociones',
      description: 'Packs especiales combinando servicios para un cuidado completo.',
      features: ['Pack Depilación', 'Promociones especiales', 'Pide tu descuento por tu Cumpleaños'],
      image: 'https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const handleConsultar = (serviceName: string) => {
    const message = encodeURIComponent(`Hola Pau, quiero consultar el precio de: ${serviceName}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-pink-600">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tratamientos profesionales de depilación y belleza para realzar tu confianza
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleConsultar(service.title)}
                  className="w-full bg-pink-600 text-white py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Consultar precio
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
