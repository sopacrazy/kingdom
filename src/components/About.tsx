import { motion } from 'motion/react';
import { Shield, Swords, Scroll, Hexagon } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-gold" />,
      title: "Evolução de Personagem",
      desc: "Progrida através de níveis e aprimore seus atributos base para enfrentar ameaças maiores."
    },
    {
      icon: <Swords className="w-8 h-8 text-battle-red" />,
      title: "Sistema de Classes",
      desc: "Avance por 3 Tiers de classes, desbloqueando especializações e poderes devastadores."
    },
    {
      icon: <Hexagon className="w-8 h-8 text-arcane" />,
      title: "Combate Tático em Hex",
      desc: "Posicionamento é tudo. Calcule distâncias, use o terreno e domine o tabuleiro hexagonal."
    },
    {
      icon: <Scroll className="w-8 h-8 text-blue-400" />,
      title: "Missões Épicas",
      desc: "De caçadas simples a masmorras mortais, sempre há um novo desafio aguardando."
    }
  ];

  return (
    <section className="py-24 bg-void-light relative border-y border-white/5">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/runes/1920/1080')] opacity-5 mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-cinzel text-gold mb-6">Forje Seu Destino</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Adentre um mundo onde a estratégia define a vitória. Em Kingdom of Glass and Blood, você não apenas luta; 
            você comanda. Evolua seu herói através de um sistema profundo de classes, domine habilidades 
            únicas e conquiste masmorras implacáveis em combates táticos baseados em hexágonos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-void p-6 rounded-lg border border-white/10 hover:border-gold/30 transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-cinzel text-white mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
