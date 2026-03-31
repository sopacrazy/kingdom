import { motion } from 'motion/react';
import { Download, Swords, ScrollText } from 'lucide-react';

export default function Cta() {
  return (
    <section className="py-24 relative overflow-hidden bg-leather/20">
      {/* Background Texture: Wood & Dust */}
      <div className="absolute inset-0 z-0 texture-wood opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-leather/30 via-transparent to-leather/30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="parchment-container max-w-4xl mx-auto p-12 md:p-20 border-medieval bg-gold shadow-[0_30px_60px_rgba(0,0,0,0.7)] text-center relative overflow-hidden"
        >
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-0 right-0 p-4">
             <div className="w-16 h-16 border-t-2 border-r-2 border-gold-dark/40" />
          </div>

          <div className="flex justify-center mb-8">
             <div className="seal-gold-large relative flex items-center justify-center bg-leather">
                <Swords className="w-10 h-10 text-gold-bright" />
             </div>
          </div>

          <h2 className="font-cinzel text-4xl md:text-6xl font-black text-leather uppercase tracking-widest mb-6">
             Atenda ao Chamado!
          </h2>
          
          <p className="font-serif italic text-2xl text-leather/80 mb-12 max-w-2xl mx-auto">
             "O destino do reino de vidro está em suas mãos. Reivindique sua herança agora ou deixe seu nome ser esquecido pelas areias do tempo."
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <button className="btn-medieval !bg-leather !text-gold !border-gold flex items-center gap-3 px-10 py-5 text-xl">
                <Download className="w-6 h-6" />
                Baixar Grimório
             </button>
             <button className="bg-transparent border-2 border-leather text-leather hover:bg-leather hover:text-gold font-cinzel font-bold px-10 py-5 transition-all text-xl uppercase tracking-widest flex items-center gap-3">
                <ScrollText className="w-6 h-6" />
                Regras da Coroa
             </button>
          </div>

          {/* Bottom Wax Seal Accent */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-wine/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
