import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';
import { CalendarCheck, Clock3, BellRing, Wallet } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/plfuentes-v/30min';

const Agenda = () => {
  const whatsappNumber = '56994117532';
  const whatsappMessage = encodeURIComponent('Hola Pau, quiero agendar una hora');

  const pasos = [
    {
      icon: CalendarCheck,
      title: 'Elige día y hora',
      description: 'Ve la disponibilidad real en el calendario y escoge el horario que más te acomode.',
    },
    {
      icon: BellRing,
      title: 'Confirma tus datos',
      description: 'Deja tu nombre y correo. Recibirás la confirmación y un recordatorio antes de tu cita.',
    },
    {
      icon: Clock3,
      title: 'Llega y relájate',
      description: 'Te espero en el Home Studio en Maipú. Recuerda avisar con anticipación si necesitas reagendar.',
    },
  ];

  return (
    <section id="agenda" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Agenda tu <span className="text-pink-600">Cita Online</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reserva tu hora en segundos, sin esperar respuesta. Disponible las 24 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Se requiere abono previo</h3>
                  <p className="text-pink-100">
                    Todas las horas agendadas necesitan un abono para quedar confirmadas. Una vez que
                    reserves, te escribiré por WhatsApp con los datos para realizarlo.
                  </p>
                </div>
              </div>
            </div>

            {pasos.map((paso, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-pink-100"
              >
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <paso.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{paso.title}</h3>
                  <p className="text-gray-600">{paso.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
              <p className="text-gray-600 mb-4">
                ¿Prefieres coordinar por mensaje o necesitas un horario especial?
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-all shadow-lg hover:scale-105 duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Escríbeme por WhatsApp</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-3xl shadow-2xl border border-pink-100 overflow-hidden"
          >
            <div className="h-[1050px] lg:h-full lg:min-h-[650px]">
              <InlineWidget
                url={CALENDLY_URL}
                styles={{ height: '100%', width: '100%' }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  primaryColor: 'db2777',
                  textColor: '374151',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  hideGdprBanner: true,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
