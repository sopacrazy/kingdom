import { motion } from 'motion/react';
import { Shield, Coins, Star, Swords, Scroll, Map, Compass } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Todos os Decretos', icon: <Scroll className="w-5 h-5"/> },
  { id: 'bounty', name: 'Caçadas Reais', icon: <Swords className="w-5 h-5"/> },
  { id: 'gather', name: 'Ordens de Coleta', icon: <Map className="w-5 h-5"/> },
  { id: 'dungeon', name: 'Incursões Épicas', icon: <Compass className="w-5 h-5"/> },
];

const quests = [
  {
    title: "O Despertar do Vazio",
    subtitle: "Incursão Lendária",
    description: "Um portal se abriu nas ruínas de Aethelgard. Criaturas de vidro estão dizimando as patrulhas. Feche o portal antes que o reino caia.",
    gold: "15,000",
    exp: "25k",
    level: "Lv. 45+",
    category: "dungeon",
    status: "legendary"
  },
  {
    title: "O Tesouro dos Goblins",
    subtitle: "Caçada de Guilda",
    description: "Goblins roubaram o carregamento de ouro do Rei. Recupere o tesouro e elimine o líder da tribo na Caverna Sombria.",
    gold: "2,500",
    exp: "8k",
    level: "Lv. 15+",
    category: "bounty",
    status: "rare"
  },
  {
    title: "Essência de Mana",
    subtitle: "Ordem de Coleta",
    description: "O Mago Real precisa de 10 cristais de mana azul das Montanhas de Gelo para carregar os escudos do castelo.",
    gold: "4,000",
    exp: "5k",
    level: "Lv. 20+",
    category: "gather",
    status: "common"
  }
];

export default function Quests() {
  return (
    <section id="quests" className="py-32 relative bg-leather/20 overflow-hidden">
      {/* Wooden Board Background Effect */}
      <div className="absolute inset-0 z-0 texture-wood opacity-30 shadow-inner" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="title-ornate text-4xl md:text-6xl text-gold uppercase tracking-[0.2em] font-black">
              Mural de Missões
            </h2>
            <p className="font-serif italic text-2xl text-parchment/60 max-w-2xl mx-auto mt-4">
              "Decretos reais e contratos de guilda aguardam pelos bravos."
            </p>
          </motion.div>
        </div>

        {/* Category Filters - Styled like a Journal Index */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="group relative px-6 py-3 font-cinzel text-sm font-bold tracking-widest text-parchment transition-all"
            >
              <div className="absolute inset-0 bg-leather border-2 border-gold-dark/40 rotate-1 group-hover:rotate-0 transition-transform shadow-lg" />
              <div className="relative z-10 flex items-center gap-3">
                <span className="text-gold-dark group-hover:text-gold transition-colors">{cat.icon}</span>
                <span className="uppercase">{cat.name}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {quests.map((quest, index) => (
            <motion.div
              key={quest.title}
              initial={{ opacity: 0, rotate: -2 }}
              whileInView={{ opacity: 1, rotate: index % 2 === 0 ? 1 : -1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pt-12"
            >
              {/* Mission Scroll Appearance */}
              <div className="parchment-container p-10 h-full border-medieval shadow-[10px_20px_40px_rgba(0,0,0,0.5)] flex flex-col hover:-translate-y-2 transition-transform duration-500">
                
                {/* Burnt/Tattered Edge effect */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-[#1a120b] opacity-10 blur-[2px]" />
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#1a120b] opacity-10 blur-[3px]" />

                {/* Wax Seal */}
                <div className={`absolute top-4 -right-2 w-14 h-14 rounded-full border-4 flex items-center justify-center shadow-lg transition-transform duration-500 hover:scale-110 ${
                  quest.status === 'legendary' ? 'bg-wine border-gold rotate-12' : 
                  quest.status === 'rare' ? 'bg-royal-blue border-silver rotate-[-8deg]' : 'bg-moss border-leather rotate-6'
                }`}>
                  <span className="font-medieval text-parchment text-lg">
                    {quest.status === 'legendary' ? 'L' : quest.status === 'rare' ? 'R' : 'C'}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-cinzel text-2xl font-black text-ink mb-2 uppercase leading-tight">
                  {quest.title}
                </h3>
                <p className="font-serif italic text-gold-dark font-semibold text-lg mb-6 border-b border-gold-dark/20 pb-4">
                  {quest.subtitle}
                </p>
                
                <p className="text-ink/80 text-xl leading-relaxed italic mb-10 font-medium font-serif flex-grow">
                  "{quest.description}"
                </p>

                {/* Rewards / Requirements */}
                <div className="grid grid-cols-3 gap-2 py-6 border-t-2 border-dashed border-gold-dark/20 text-center">
                  <div className="flex flex-col items-center">
                    <Coins className="w-5 h-5 text-gold-dark mb-1" />
                    <span className="font-medieval text-lg text-ink font-bold">{quest.gold}</span>
                    <span className="font-cinzel text-[10px] text-gold-dark font-bold uppercase tracking-tighter">Ouro</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Star className="w-5 h-5 text-wine mb-1" />
                    <span className="font-medieval text-lg text-ink font-bold">{quest.exp}</span>
                    <span className="font-cinzel text-[10px] text-gold-dark font-bold uppercase tracking-tighter">EXP</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Shield className="w-5 h-5 text-royal-blue mb-1" />
                    <span className="font-medieval text-lg text-ink font-bold">{quest.level}</span>
                    <span className="font-cinzel text-[10px] text-gold-dark font-bold uppercase tracking-tighter">Nível</span>
                  </div>
                </div>

                {/* Accept Button */}
                <button className="btn-medieval w-full mt-8 !py-4 shadow-xl">
                  Aceitar Contrato
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
