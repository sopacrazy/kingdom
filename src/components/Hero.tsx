import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 bg-void">
        {/* Main Art - Simulating the game cover (Castle, Demon, Heroes) */}
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-50 mix-blend-luminosity" />
        
        {/* Overlays for depth and text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-transparent w-full md:w-2/3" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/30" />
        
        {/* Atmospheric Fog & Glows */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-screen" />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-battle-red/20 to-transparent mix-blend-overlay" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-arcane/10 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <h1 className="font-cinzel font-black flex flex-col leading-[0.85] text-shadow-epic">
                  <span className="text-6xl md:text-8xl logo-text tracking-widest">KINGDOM</span>
                  <span className="text-3xl md:text-5xl logo-text my-2 ml-2">OF</span>
                  <span className="text-5xl md:text-7xl logo-text tracking-wider">GLASS AND BLOOD</span>
                </h1>
              </motion.div>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed font-medium drop-shadow-lg border-l-2 border-gold pl-4"
            >
              Um RPG mobile estratégico com evolução por classes, habilidades únicas, missões progressivas e combates intensos em um mundo de fantasia sombria.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-5"
            >
              <button className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-battle-dark via-battle-red to-battle-dark hover:from-red-700 hover:to-red-900 text-white font-cinzel font-bold text-lg rounded-sm border border-red-500/50 shadow-[0_0_30px_rgba(153,27,27,0.6)] transition-all flex items-center justify-center gap-3 group relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="w-5 h-5 fill-current" />
                  Jogar Agora
                </span>
              </button>
              
              <button className="w-full sm:w-auto px-8 py-4 bg-void/80 backdrop-blur-sm hover:bg-void text-gold font-cinzel font-bold text-lg rounded-sm border border-gold/30 hover:border-gold shadow-[0_0_15px_rgba(197,160,89,0.1)] transition-all">
                Ver Classes
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent z-10" />
    </section>
  );
}
