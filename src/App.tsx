
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundGlow from './components/BackgroundGlow';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-primary/30 selection:text-white relative overflow-hidden">
      <BackgroundGlow />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TechStack />
          <Services />
          <About />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
