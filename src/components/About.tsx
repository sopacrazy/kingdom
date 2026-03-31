import { motion } from 'motion/react';
import { Crown, PenTool, ShieldCheck, Feather } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 relative bg-leather/10 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute inset-x-0 bottom-0 top-0 z-0 texture-wood opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="parchment-container p-12 md:p-20 border-medieval shadow-2xl relative"
          >
            {/* Header: Divine Decree Style */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="seal-gold-large relative flex items-center justify-center">
                  <Crown className="w-12 h-12 text-leather" />
                  <div className="absolute -inset-2 border-2 border-gold-dark rounded-full animate-pulse opacity-20" />
                </div>
              </div>
              <h2 className="font-cinzel text-4xl md:text-5xl font-black text-ink uppercase tracking-widest mb-4">
                Decreto Real
              </h2>
              <div className="w-24 h-1 bg-gold-dark/40 mx-auto" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h3 className="font-cinzel text-2xl font-bold text-gold-dark uppercase tracking-tight flex items-center gap-3 font-cinzel">
                  <Feather className="w-6 h-6" />
                  Nossa Missão
                </h3>
                <p className="text-2xl text-ink/80 font-serif leading-relaxed italic">
                  "Preservar a chama da virtude em um mundo de vidro quebrado. Somos os guardiões das histórias que ainda não foram escritas, os arquitetos de reinos que desafiam o tempo."
                </p>
                <p className="text-xl text-ink font-serif leading-relaxed">
                  O projeto **Kingdom of Glass and Blood** nasceu do desejo de criar uma experiência de RPG que transcende o digital, tornando-se um artefato de imersão total para cada aventureiro.
                </p>
              </div>

              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <div className="p-4 bg-leather text-gold border border-gold-dark/40 shadow-xl">
                    <PenTool className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xl font-bold text-ink uppercase tracking-tight font-cinzel">Escritura Manual</h4>
                    <p className="text-ink/70 font-serif text-lg leading-relaxed">Cada linha de código é uma pincelada de nanquim no pergaminho do destino.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="p-4 bg-leather text-gold border border-gold-dark/40 shadow-xl">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xl font-bold text-ink uppercase tracking-tight font-cinzel">Honra e Glória</h4>
                    <p className="text-ink/70 font-serif text-lg leading-relaxed">Comprometidos com a excelência técnica e a fidelidade às tradições do RPG.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature Area */}
            <div className="mt-20 pt-12 border-t border-gold-dark/10 flex flex-col items-center">
               <div className="font-medieval text-5xl text-ink/60 mb-2 select-none">
                  Adriano Martins
               </div>
               <div className="font-cinzel text-[10px] text-gold-dark font-bold uppercase tracking-[0.4em]">
                  GRÃO-ESCRIBA DA CORTE
               </div>
            </div>

            {/* Corner Decorative Elements */}
            <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none opacity-20">
               <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold-dark" />
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none opacity-20">
               <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold-dark" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
