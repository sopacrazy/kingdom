import { Shield, Mail, Github, Globe, ScrollText, Map, Feather } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-[#0a0a05]">
      {/* Background Texture: Dark Leather */}
      <div className="absolute inset-0 z-0 texture-leather opacity-40 shadow-inner" />
      
      {/* Top Ornate Border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold-dark to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 border-medieval p-12 bg-leather/20 shadow-2xl overflow-hidden">
          
          {/* Brand Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="seal-gold">
                <Shield className="w-6 h-6 text-leather" />
              </div>
              <span className="font-cinzel text-3xl font-black text-parchment tracking-widest">KGB</span>
            </div>
            <p className="text-parchment/60 font-serif italic text-lg leading-relaxed mb-8">
              "Escrito nas estrelas, forjado no sangue e preservado nas crônicas de Aethelgard."
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-leather border border-gold-dark/30 text-gold-dark hover:text-gold-bright transition-colors rounded-none rotate-3 hover:rotate-0">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 bg-leather border border-gold-dark/30 text-gold-dark hover:text-gold-bright transition-colors rounded-none -rotate-3 hover:rotate-0">
                <Globe size={20} />
              </a>
              <a href="#" className="p-3 bg-leather border border-gold-dark/30 text-gold-dark hover:text-gold-bright transition-colors rounded-none rotate-6 hover:rotate-0">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Chronicles Links */}
          <div>
            <h4 className="font-cinzel text-xl font-bold text-gold uppercase tracking-widest mb-8 border-b border-gold-dark/20 pb-2">
               Crônicas
            </h4>
            <ul className="space-y-4">
              {['A Queda', 'O Despertar', 'Lendas do Vidro', 'Guia do Reino'].map(link => (
                <li key={link}>
                  <a href="#" className="font-serif text-lg text-parchment/70 hover:text-gold-bright flex items-center gap-2 group transition-colors">
                    <Feather size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Royal Archive Links */}
          <div>
            <h4 className="font-cinzel text-xl font-bold text-gold uppercase tracking-widest mb-8 border-b border-gold-dark/20 pb-2">
               Arquivo Real
            </h4>
            <ul className="space-y-4">
              {['Manual do Herói', 'Tomo de Artes', 'Bestiário', 'Leis da Coroa'].map(link => (
                <li key={link}>
                  <a href="#" className="font-serif text-lg text-parchment/70 hover:text-gold-bright flex items-center gap-2 group transition-colors">
                    <ScrollText size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Attribution */}
          <div>
            <h4 className="font-cinzel text-xl font-bold text-gold uppercase tracking-widest mb-8 border-b border-gold-dark/20 pb-2">
               Mapa da Guilda
            </h4>
            <div className="relative aspect-square border border-gold-dark/30 bg-leather/40 p-1 group cursor-pointer overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/300/300')] bg-cover bg-center grayscale mix-blend-luminosity opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <Map className="w-12 h-12 text-gold-dark opacity-30 group-hover:opacity-100 transition-opacity" />
               </div>
            </div>
            <p className="mt-4 text-xs font-cinzel text-parchment/40 text-center uppercase tracking-widest">Aethelgard v4.0</p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-gold-dark/10 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4 text-gold-dark/50 font-serif italic text-lg">
            <span>Forjado em 2026</span>
            <div className="w-2 h-2 bg-gold-dark/30 rotate-45" />
            <span>Kingdom of Glass and Blood</span>
          </div>
          
          <div className="text-center font-cinzel text-xs tracking-[0.4em] text-gold-dark">
            PROJETO DESIGNADO POR <span className="text-parchment">ESCRIBA REAL ADRIANO MARTINS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
