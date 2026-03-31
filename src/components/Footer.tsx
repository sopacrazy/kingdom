import { Facebook, Twitter, Instagram, Youtube, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-void pt-20 pb-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-gold" />
              <h2 className="text-3xl font-cinzel font-bold text-white text-shadow-epic">
                Kingdom of <span className="text-battle-red">Glass and Blood</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed font-inter">
              Um RPG mobile estratégico com evolução por classes, habilidades únicas, missões progressivas e combates intensos em um mundo de fantasia sombria. Forje seu destino e conquiste o abismo.
            </p>
          </div>
          
          <div>
            <h4 className="text-gold font-cinzel font-bold mb-6 uppercase tracking-widest text-sm">Navegação</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-inter">
              <li><a href="#lore" className="hover:text-white hover:translate-x-1 inline-block transition-all">O Mundo</a></li>
              <li><a href="#classes" className="hover:text-white hover:translate-x-1 inline-block transition-all">Classes</a></li>
              <li><a href="#skills" className="hover:text-white hover:translate-x-1 inline-block transition-all">Artes Marciais</a></li>
              <li><a href="#quests" className="hover:text-white hover:translate-x-1 inline-block transition-all">Contratos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-cinzel font-bold mb-6 uppercase tracking-widest text-sm">Comunidade</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-sm bg-void-light border border-white/10 flex items-center justify-center text-gray-400 hover:bg-arcane/20 hover:border-arcane hover:text-white transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-void-light border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-500/20 hover:border-blue-500 hover:text-white transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-void-light border border-white/10 flex items-center justify-center text-gray-400 hover:bg-pink-600/20 hover:border-pink-600 hover:text-white transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-void-light border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600/20 hover:border-red-600 hover:text-white transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-inter">
          <p>&copy; 2026 Kingdom of Glass and Blood Studios. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Termos de Serviço</a>
            <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-gold transition-colors">Suporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
