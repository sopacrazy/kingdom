import { motion } from 'motion/react';
import { Sword, Target, Wand2, Shield, Zap, Skull } from 'lucide-react';

const classes = [
  {
    title: 'Guerreiro',
    subtitle: 'Senhor da Guerra',
    description: 'Mestres do aço e da força bruta, lideram a vanguarda com coragem inabalável.',
    icon: <Sword className="w-8 h-8" />,
    color: 'var(--color-battle-red)',
    tier: 'I',
    level: '90',
    range: '1',
    stats: [
      { name: 'Força', value: 95 },
      { name: 'Defesa', value: 85 },
      { name: 'Mana', value: 20 },
    ],
    symbol: '⚔️'
  },
  {
    title: 'Arqueiro',
    subtitle: 'Caçador Fantasma',
    description: 'Precisão letal das sombras. Suas flechas encontram o coração antes do inimigo ouvir a corda.',
    icon: <Target className="w-8 h-8" />,
    color: 'var(--color-moss)',
    tier: 'I',
    level: '85',
    range: '5',
    stats: [
      { name: 'Agilidade', value: 92 },
      { name: 'Precisão', value: 98 },
      { name: 'Sorte', value: 75 },
    ],
    symbol: '🏹'
  },
  {
    title: 'Mago',
    subtitle: 'Arcanista Supremo',
    description: 'Manipuladores da energia primordial. Capazes de dobrar a realidade e convocar o vazio.',
    icon: <Wand2 className="w-8 h-8" />,
    color: 'var(--color-wine)',
    tier: 'I',
    level: '92',
    range: '4',
    stats: [
      { name: 'Inteligência', value: 99 },
      { name: 'Mana', value: 95 },
      { name: 'Vigor', value: 45 },
    ],
    symbol: '🔮'
  },
];

export default function Classes() {
  return (
    <section id="classes" className="py-32 relative overflow-hidden bg-leather/30">
      {/* Decorative Wood Background */}
      <div className="absolute inset-0 z-0 texture-wood opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="title-ornate text-4xl md:text-6xl text-gold uppercase tracking-[0.2em] font-black">
              Tomo de Heróis
            </h2>
            <p className="font-serif italic text-2xl text-parchment/60 max-w-2xl mx-auto mt-4">
              "Escolha sua linhagem e escreva seu nome nas páginas da história."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {classes.map((cls, index) => (
            <motion.div
              key={cls.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="parchment-container h-full p-1 border-medieval hover-shake transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                {/* Inner Card Content */}
                <div className="h-full bg-parchment p-8 flex flex-col border border-gold-dark/20 relative">
                  
                  {/* Class Badge / Seal */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-leather rotate-12 border-2 border-gold flex items-center justify-center shadow-xl group-hover:rotate-0 transition-transform z-20">
                    <span className="font-medieval text-gold-bright text-4xl">{cls.tier}</span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="p-4 bg-leather text-gold border border-gold-dark/40 shadow-inner">
                      {cls.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-ink uppercase tracking-tight font-cinzel">{cls.title}</h3>
                      <p className="font-serif italic text-gold-dark text-lg">{cls.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-ink/80 text-xl mb-8 leading-relaxed font-medium min-h-[5rem] relative z-10">
                    {cls.description}
                  </p>

                  {/* Registry Details */}
                  <div className="grid grid-cols-2 gap-4 mb-10 py-6 border-y border-gold-dark/10 relative z-10">
                    <div className="flex flex-col">
                      <span className="font-cinzel text-xs text-gold-dark font-bold uppercase tracking-widest">Nível Máx</span>
                      <span className="font-medieval text-3xl text-ink">{cls.level}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-cinzel text-xs text-gold-dark font-bold uppercase tracking-widest">Alcance</span>
                      <span className="font-medieval text-3xl text-ink">{cls.range}</span>
                    </div>
                  </div>

                  {/* Attributes / Stats */}
                  <div className="space-y-6 mt-auto relative z-10">
                    {cls.stats.map(stat => (
                      <div key={stat.name} className="space-y-2">
                        <div className="flex justify-between items-end">
                          <span className="font-cinzel text-sm font-bold text-ink/70 uppercase tracking-tighter">{stat.name}</span>
                          <span className="font-medieval text-xl text-gold-dark">{stat.value}</span>
                        </div>
                        <div className="h-3 w-full bg-leather/10 rounded-none overflow-hidden border border-gold-dark/10 shadow-inner">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${stat.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-gold-dark to-gold shadow-[0_0_10px_rgba(142,109,42,0.3)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Background Watermark Symbol */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] opacity-[0.04] pointer-events-none select-none font-serif z-0">
                    {cls.symbol}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-ink/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ink/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
