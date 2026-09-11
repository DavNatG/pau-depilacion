import Header from './components/Header';
import Hero from './components/Hero';
import InfoBanner from './components/InfoBanner';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactFooter from './components/ContactFooter';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <InfoBanner />
      <Services />
      <Testimonials />
      <ContactFooter />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
