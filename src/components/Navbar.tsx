import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-md border-b border-battle-dark/50 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-battle-red to-void border border-gold rounded-sm rotate-45 flex items-center justify-center shadow-[0_0_10px_rgba(197,160,89,0.3)]">
            <div className="w-4 h-4 bg-void border border-gold/50" />
          </div>
          <span className="font-cinzel font-bold text-xl text-gold tracking-widest ml-2">KGB</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#hero" className="text-sm font-cinzel text-gray-300 hover:text-gold transition-colors uppercase tracking-widest">Início</a>
          <a href="#lore" className="text-sm font-cinzel text-gray-300 hover:text-gold transition-colors uppercase tracking-widest">Mundo</a>
          <a href="#classes" className="text-sm font-cinzel text-gray-300 hover:text-gold transition-colors uppercase tracking-widest">Classes</a>
          <a href="#skills" className="text-sm font-cinzel text-gray-300 hover:text-gold transition-colors uppercase tracking-widest">Artes</a>
          <a href="#quests" className="text-sm font-cinzel text-gray-300 hover:text-gold transition-colors uppercase tracking-widest">Missões</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="px-6 py-2 bg-gradient-to-r from-battle-dark to-battle-red hover:from-battle-red hover:to-red-600 text-white font-cinzel font-bold text-sm rounded-sm border border-red-500/50 shadow-[0_0_15px_rgba(153,27,27,0.6)] transition-all">
            Jogar Agora
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gold">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
