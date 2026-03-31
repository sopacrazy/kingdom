import { motion } from 'motion/react';
import { Layers, Hexagon, Wand2, TrendingUp, Compass, Swords } from 'lucide-react';

const features = [
  {
    title: "Evolução por Tiers",
    description: "Cada classe possui múltiplos estágios de maestria e caminhos de evolução exclusivos.",
    icon: <Layers className="w-8 h-8" />,
  },
  {
    title: "Combate em Hexágonos",
    description: "Sistema tático de alta profundidade técnica em campos de batalha hexaminais.",
    icon: <Hexagon className="w-8 h-8" />,
  },
  {
    title: "Artes de Guerra",
    description: "Habilidades únicas forjadas no grimório arcano e aperfeiçoadas em combate.",
    icon: <Wand2 className="w-8 h-8" />,
  },
  {
    title: "Progressão de Linhagem",
    description: "Sistema de herança que garante o legado de seu herói através das eras.",
    icon: <TrendingUp className="w-8 h-8" />,
  },
  {
    title: "Mural de Expedições",
    description: "Um mundo vivo com missões que mudam conforme o destino do reino.",
    icon: <Compass className="w-8 h-8" />,
  },
  {
    title: "Poder de Guilda",
    description: "Forme alianças nobres e conquiste territórios em batalhas massivas.",
    icon: <Swords className="w-8 h-8" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 relative bg-leather/10 overflow-hidden">
      {/* Decorative Wood Board Background */}
      <div className="absolute inset-x-0 top-0 bottom-0 z-0 texture-wood opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="title-ornate text-4xl md:text-5xl text-gold uppercase tracking-[0.2em] font-black">
              Pilares do Destino
            </h2>
            <p className="font-serif italic text-2xl text-parchment/60 max-w-2xl mx-auto mt-4">
              "Os alicerces de un império que jamais se curvará."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-10 parchment-container border-medieval h-full flex flex-col items-center text-center hover-shake transition-all duration-300">
                {/* Decorative Plate Background */}
                <div className="absolute inset-4 border border-gold-dark/10 pointer-events-none" />

                {/* Shield Icon Container */}
                <div className="mb-8 relative">
                   <div className="seal-gold relative z-10 group-hover:scale-110 transition-transform duration-500">
                      <div className="text-leather">{feature.icon}</div>
                   </div>
                   {/* Shadow/Glow effect beneath shield */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gold blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>

                <h3 className="font-cinzel text-2xl font-black text-ink uppercase tracking-tight mb-4 group-hover:text-gold-dark transition-colors font-cinzel">
                  {feature.title}
                </h3>
                
                <p className="text-ink/80 text-lg font-serif leading-relaxed italic">
                  "{feature.description}"
                </p>

                {/* Decorative divider at bottom of each feature */}
                <div className="mt-8 flex items-center justify-center gap-2">
                   <div className="w-8 h-px bg-gold-dark/30" />
                   <div className="w-1.5 h-1.5 rotate-45 bg-gold-dark/40" />
                   <div className="w-8 h-px bg-gold-dark/30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
