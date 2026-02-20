
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundGlow from './components/BackgroundGlow';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-primary/30 selection:text-white relative overflow-hidden">
      <BackgroundGlow />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
