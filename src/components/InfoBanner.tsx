import { motion } from 'framer-motion';
import { Home, Users, CreditCard } from 'lucide-react';

const InfoBanner = () => {
  const features = [
    {
      icon: Home,
      title: 'Home Studio en Maipú',
      description: 'Ambiente cómodo y privado',
    },
    {
      icon: Users,
      title: 'Solo atención a Mujeres',
      description: 'Espacio exclusivo femenino',
    },
    {
      icon: CreditCard,
      title: 'Reserva con Abono previo',
      description: 'Asegura tu hora',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBanner;
