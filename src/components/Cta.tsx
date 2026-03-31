import { motion } from 'motion/react';
import { Sword, ShieldAlert } from 'lucide-react';

export default function Cta() {
  return (
    <section className="relative py-40 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/epicbattle/1920/1080')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-transparent" />
        
        {/* Glowing Portal Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-battle-red/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <ShieldAlert className="w-8 h-8 text-battle-red" />
          </div>
          <h2 className="text-5xl md:text-7xl font-cinzel font-bold text-white mb-6 text-shadow-epic">
            O Reino <span className="text-battle-red">Aguarda</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-inter drop-shadow-md">
            Sua lenda começa agora. Reúna sua coragem, escolha sua classe e prepare-se para a batalha final contra as forças do abismo.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-battle-dark to-battle-red hover:from-battle-red hover:to-red-600 text-white font-cinzel font-bold text-xl rounded-sm border border-red-500/50 shadow-[0_0_30px_rgba(153,27,27,0.6)] transition-all hover:scale-105 flex items-center justify-center gap-3 overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <Sword className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10 tracking-wider">Pré-Registro Grátis</span>
            </button>
            
            <button className="w-full sm:w-auto px-8 py-5 bg-transparent hover:bg-white/5 text-gray-300 hover:text-white font-cinzel font-bold text-lg rounded-sm border border-white/20 hover:border-white/50 transition-all flex items-center justify-center gap-2">
              Ver Trailer
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
