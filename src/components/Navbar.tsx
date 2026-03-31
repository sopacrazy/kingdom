import { useState, useEffect } from 'react';
import { Shield, Menu, X, ScrollText } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Mundo', href: '#lore' },
    { name: 'Classes', href: '#classes' },
    { name: 'Artes', href: '#skills' },
    { name: 'Missões', href: '#quests' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-2 shadow-2xl' : 'py-6'
    }`}>
      {/* Background: Wood/Leather Texture */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      } texture-wood border-b-2 border-gold-dark shadow-2xl`} />

      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="seal-gold group-hover:rotate-12 transition-transform duration-500">
              <Shield className="w-6 h-6 text-leather" />
            </div>
            <span className="font-cinzel text-2xl font-black tracking-widest text-parchment transition-colors group-hover:text-gold-bright">
              KGB
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-cinzel text-sm font-bold tracking-widest text-parchment/70 hover:text-gold-bright transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-dark group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            
            <button className="btn-gold !py-2 !px-6 !text-base scale-90 hover:scale-100">
              Explorar o Reino
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-parchment hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 texture-leather border-t border-gold-dark shadow-2xl transition-all duration-500 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-cinzel text-xl font-bold tracking-widest text-parchment hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="btn-gold mt-4">
            Explorar o Reino
          </button>
        </div>
      </div>
    </nav>
  );
}
