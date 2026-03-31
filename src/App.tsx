import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lore from './components/Lore';
import Classes from './components/Classes';
import Skills from './components/Skills';
import Quests from './components/Quests';
import Features from './components/Features';
import About from './components/About';
import Cta from './components/Cta';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a05] text-parchment selection:bg-gold-dark/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <Lore />
        <Classes />
        <Skills />
        <Quests />
        <Features />
        <About />
        <Cta />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
