import { motion } from 'motion/react';
import { TrendingUp, Crosshair, Hexagon, Users, Lightbulb, Scroll, ArrowUpCircle, Smartphone } from 'lucide-react';

const features = [
  { 
    icon: <Users className="w-8 h-8" />, 
    title: "Classes Únicas", 
    desc: "Guerreiros, Arqueiros e Magos com árvores de habilidades distintas e progressão profunda.",
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-void to-battle-dark/40"
  },
  { 
    icon: <Hexagon className="w-8 h-8" />, 
    title: "Combate em Hexágonos", 
    desc: "Posicionamento tático é a chave para a vitória.",
    colSpan: "md:col-span-1",
    bg: "bg-gradient-to-br from-void to-arcane/20"
  },
  { 
    icon: <TrendingUp className="w-8 h-8" />, 
    title: "Evolução por Tiers", 
    desc: "Ascenda de um mero mortal a um lorde lendário.",
    colSpan: "md:col-span-1",
    bg: "bg-gradient-to-br from-void to-gold-dark/20"
  },
  { 
    icon: <Lightbulb className="w-8 h-8" />, 
    title: "Artes Marciais e Magia", 
    desc: "Combine ataques físicos e feitiços arcanos devastadores.",
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-void to-battle-red/20"
  },
  { 
    icon: <Scroll className="w-8 h-8" />, 
    title: "Missões Épicas", 
    desc: "Explore um mundo rico em lore e recompensas.",
    colSpan: "md:col-span-1",
    bg: "bg-gradient-to-br from-void to-wine/40"
  },
  { 
    icon: <Smartphone className="w-8 h-8" />, 
    title: "RPG Mobile Premium", 
    desc: "Gráficos de ponta e jogabilidade fluida no seu bolso.",
    colSpan: "md:col-span-1",
    bg: "bg-gradient-to-br from-void to-silver/10"
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 relative bg-void overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/darkmagic/1920/1080')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-void" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold font-cinzel tracking-widest uppercase text-sm">Diferenciais</span>
            <div className="w-12 h-px bg-gold" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-cinzel text-white mb-6 text-shadow-epic">
            Forje Seu <span className="text-arcane-light">Destino</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Sistemas profundos e mecânicas imersivas projetadas para os verdadeiros fãs de RPG.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col p-8 rounded-xl border border-white/10 hover:border-gold/30 transition-all group ${feature.colSpan} ${feature.bg} relative overflow-hidden`}
            >
              {/* Hover Glow Effect */}
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite] -skew-x-12" />
              
              <div className="w-14 h-14 rounded-full bg-black/50 border border-white/10 text-gold flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-white group-hover:border-gold/50 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] relative z-10">
                {feature.icon}
              </div>
              <h4 className="text-xl font-cinzel font-bold text-white mb-3 relative z-10">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
