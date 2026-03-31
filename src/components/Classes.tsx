import { motion } from 'motion/react';
import { Sword, Crosshair, Wand2, ShieldAlert, Target, Flame, Crown, Ghost, Sparkles, Hexagon } from 'lucide-react';

const classesData = [
  {
    tier: 1,
    title: "Tier I: Despertar",
    classes: [
      { name: "Guerreiro", maxLevel: 10, str: 3, dex: 1, con: 5, int: 1, dist: 1, icon: <Sword />, theme: "warrior" },
      { name: "Arqueiro", maxLevel: 10, str: 2, dex: 3, con: 4, int: 1, dist: 3, icon: <Crosshair />, theme: "archer" },
      { name: "Mago", maxLevel: 10, str: 1, dex: 1, con: 4, int: 4, dist: 2, icon: <Wand2 />, theme: "mage" },
    ]
  },
  {
    tier: 2,
    title: "Tier II: Especialização",
    classes: [
      { name: "Gladiador", maxLevel: 20, str: 6, dex: 2, con: 10, int: 2, dist: 1, icon: <ShieldAlert />, theme: "warrior" },
      { name: "Atirador Sombrio", maxLevel: 20, str: 4, dex: 6, con: 8, int: 2, dist: 3, icon: <Target />, theme: "archer" },
      { name: "Feiticeiro", maxLevel: 20, str: 2, dex: 2, con: 8, int: 8, dist: 2, icon: <Flame />, theme: "mage" },
    ]
  },
  {
    tier: 3,
    title: "Tier III: Lendas",
    classes: [
      { name: "Senhor da Guerra", maxLevel: 30, str: 12, dex: 4, con: 20, int: 4, dist: 1, icon: <Crown />, theme: "warrior" },
      { name: "Caçador Fantasma", maxLevel: 30, str: 8, dex: 12, con: 16, int: 4, dist: 3, icon: <Ghost />, theme: "archer" },
      { name: "Arcanista Supremo", maxLevel: 30, str: 4, dex: 4, con: 16, int: 16, dist: 2, icon: <Sparkles />, theme: "mage" },
    ]
  }
];

const getThemeStyles = (theme: string) => {
  switch(theme) {
    case 'warrior':
      return {
        bg: "from-battle-dark/80 to-void",
        border: "border-battle-red/50",
        text: "text-red-400",
        glow: "group-hover:shadow-[0_0_30px_rgba(153,27,27,0.4)]",
        iconBg: "bg-battle-red/20 text-red-400"
      };
    case 'archer':
      return {
        bg: "from-emerald-900/60 to-void",
        border: "border-emerald-600/50",
        text: "text-emerald-400",
        glow: "group-hover:shadow-[0_0_30px_rgba(5,150,105,0.4)]",
        iconBg: "bg-emerald-600/20 text-emerald-400"
      };
    case 'mage':
      return {
        bg: "from-arcane-dark/80 to-void",
        border: "border-arcane/50",
        text: "text-blue-400",
        glow: "group-hover:shadow-[0_0_30px_rgba(76,29,149,0.4)]",
        iconBg: "bg-arcane/20 text-blue-400"
      };
    default:
      return { bg: "", border: "", text: "", glow: "", iconBg: "" };
  }
};

export default function Classes() {
  return (
    <section id="classes" className="py-24 bg-void relative">
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-cinzel text-gold mb-6 text-shadow-epic">Linhagens de Poder</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Escolha seu caminho e evolua através dos Tiers para alcançar o ápice da força no Reino de Vidro e Sangue.</p>
        </div>

        <div className="space-y-24">
          {classesData.map((tierGroup, tIdx) => (
            <div key={tIdx} className="relative">
              {/* Tier Header */}
              <div className="flex items-center justify-center mb-12 relative">
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <h3 className="relative px-8 py-2 bg-void border border-gold/40 text-2xl font-cinzel text-gold shadow-[0_0_15px_rgba(197,160,89,0.2)]">
                  {tierGroup.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tierGroup.classes.map((cls, cIdx) => {
                  const styles = getThemeStyles(cls.theme);
                  return (
                    <motion.div
                      key={cIdx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: cIdx * 0.15 }}
                      className={`relative bg-gradient-to-b ${styles.bg} border ${styles.border} p-1 rounded-sm group transition-all duration-500 ${styles.glow}`}
                    >
                      {/* Inner Card (Parchment/Stone feel) */}
                      <div className="bg-void-light h-full p-6 relative overflow-hidden">
                        {/* Background Icon Watermark */}
                        <div className={`absolute -right-8 -bottom-8 w-48 h-48 opacity-5 ${styles.text} group-hover:scale-110 group-hover:opacity-10 transition-all duration-700`}>
                          {cls.icon}
                        </div>

                        <div className="flex items-start justify-between mb-6 relative z-10">
                          <div className={`p-4 border border-white/10 ${styles.iconBg} shadow-inner`}>
                            {cls.icon}
                          </div>
                          <div className="text-right">
                            <span className="inline-block px-2 py-1 bg-black/50 border border-white/10 text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                              Max Lvl {cls.maxLevel}
                            </span>
                          </div>
                        </div>

                        <h4 className="text-2xl font-cinzel font-bold text-white mb-6 border-b border-white/10 pb-4 relative z-10">
                          {cls.name}
                        </h4>

                        <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm relative z-10 mb-6">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-500 font-cinzel uppercase text-xs tracking-wider">Força</span>
                            <span className="text-white font-bold">{cls.str}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-500 font-cinzel uppercase text-xs tracking-wider">Destreza</span>
                            <span className="text-white font-bold">{cls.dex}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-500 font-cinzel uppercase text-xs tracking-wider">Const.</span>
                            <span className="text-white font-bold">{cls.con}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-500 font-cinzel uppercase text-xs tracking-wider">Intel.</span>
                            <span className="text-white font-bold">{cls.int}</span>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10 bg-black/20 -mx-6 -mb-6 px-6 pb-6 mt-auto">
                          <span className="text-xs text-gray-500 uppercase tracking-widest">Alcance</span>
                          <div className={`flex items-center gap-1.5 font-bold ${styles.text}`}>
                            <Hexagon className="w-4 h-4" />
                            <span>{cls.dist} Hex</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
