import { motion } from 'motion/react';
import { Scroll, Quote, History } from 'lucide-react';

export default function Lore() {
  return (
    <section id="lore" className="py-32 relative bg-[#1a120b] overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 texture-leather opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="parchment-container max-w-6xl mx-auto p-12 md:p-24 border-medieval shadow-2xl relative"
        >
          {/* Header */}
          <div className="text-center mb-16 relative">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Scroll className="w-8 h-8 text-gold-dark" />
              <h2 className="font-cinzel text-4xl md:text-6xl font-black text-ink uppercase tracking-widest">
                Crônicas do Reino
              </h2>
              <Scroll className="w-8 h-8 text-gold-dark" />
            </div>
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-gold-dark to-transparent mx-auto" />
          </div>

          {/* Book-like Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="relative">
                <span className="float-left text-9xl font-medieval text-wine font-bold leading-none mr-4 mt-2 select-none">
                  O
                </span>
                <p className="text-2xl text-ink/90 font-serif leading-relaxed first-line:uppercase first-line:tracking-widest first-line:font-bold">
                  Reino foi forjado no silêncio do vidro e no calor do sangue. Por milênios, as torres de obsidiana guardaram os segredos da magia arcana, até que a Grande Fratura rasgou o céu.
                </p>
              </div>
              
              <p className="text-xl text-ink/80 font-serif leading-relaxed italic">
                "Não restou nada além do eco das espadas e do brilho sinistro das runas em chamas. Os heróis de outrora tornaram-se lendas, e as lendas, poeira."
              </p>

              <div className="flex items-center gap-6 p-8 bg-leather/5 border-l-4 border-gold-dark italic">
                <Quote className="w-10 h-10 text-gold-dark opacity-40 shrink-0" />
                <p className="text-lg text-ink font-serif">
                  A queda não foi o fim, mas o início de uma era onde apenas os de coração de vidro e mãos de sangue podem governar.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-ink/80 font-serif leading-relaxed">
                Agora, as facções lutam por cada polegada de terra tintentada. Os Gladiadores buscam a glória eterna na arena de sangue, os Caçadores Fantasmas vigiam das sombras, e os Arcanistas Supremos tentam costurar a realidade que outrora prometeram proteger.
              </p>

              <div className="relative aspect-video border-2 border-gold-dark/30 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/medieval/800/600')] bg-cover bg-center mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-leather/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-parchment font-cinzel text-xs tracking-widest bg-leather/80 px-4 py-2">
                  <History className="w-4 h-4" />
                  Pintura do Velho Mundo
                </div>
              </div>

              <div className="pt-8 flex justify-center">
                <div className="seal-gold-large relative w-32 h-32 flex items-center justify-center opacity-80 rotate-12">
                   {/* Ancient Seal Representation */}
                   <div className="absolute inset-0 border-8 border-gold-dark rounded-full border-double" />
                   <div className="absolute inset-2 border-2 border-gold-dark rounded-full" />
                   <span className="font-medieval text-gold-dark font-bold text-3xl">REGIS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Corner Ornaments */}
          <div className="absolute top-0 right-0 p-4">
             <div className="w-20 h-20 border-t-2 border-r-2 border-gold-dark/20" />
          </div>
          <div className="absolute bottom-0 left-0 p-4">
             <div className="w-20 h-20 border-b-2 border-l-2 border-gold-dark/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
