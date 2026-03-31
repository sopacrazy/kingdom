import { motion } from 'motion/react';

export default function Lore() {
  return (
    <section id="lore" className="py-32 relative bg-void overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/darkcastle/1920/1080')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold font-cinzel tracking-widest uppercase text-sm">O Universo</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-cinzel text-white mb-8 text-shadow-epic leading-tight">
              Um Mundo em <span className="text-battle-red">Guerra</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 font-inter leading-relaxed drop-shadow-md">
              <p>
                Há eras, o Reino de Vidro e Sangue foi despedaçado pela ambição de magos antigos e a fúria de demônios abissais. Hoje, o que resta são ruínas majestosas, castelos de pedra escura e campos de batalha banhados em magia arcana e sangue.
              </p>
              <p>
                Neste mundo implacável, a sobrevivência não é um direito, é uma conquista. Guerreiros forjados no aço, arqueiros de precisão letal e arcanistas manipuladores do caos erguem-se das cinzas para reivindicar o poder perdido.
              </p>
              <p className="text-gold font-cinzel text-xl pt-4">
                A ascensão de um novo lorde é iminente. Você será o salvador ou o conquistador?
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
