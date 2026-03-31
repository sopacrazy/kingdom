import { motion } from 'motion/react';
import { ScrollText, Skull, PackageSearch, Key, Flame } from 'lucide-react';

const quests = [
  {
    category: "Caçadas de Elite",
    icon: <Skull className="w-6 h-6 text-battle-red" />,
    theme: "border-battle-red/30 shadow-[inset_0_0_40px_rgba(153,27,27,0.15)]",
    titleColor: "text-battle-red",
    items: [
      { title: "A Besta do Pântano", desc: "Abater 5 Aranhas Tecelãs e 1 Rainha Aranha.", reward: "10% XP, Ouro" },
      { title: "Matilha Sanguinária", desc: "Eliminar 10 Lobos Sombrios nos arredores do castelo.", reward: "15% XP, Prata" },
      { title: "O Ogro da Ponte", desc: "Derrotar o Ogro Esmagador antes do amanhecer.", reward: "20% XP, Arma Rara" },
    ]
  },
  {
    category: "Coleta Arcana",
    icon: <PackageSearch className="w-6 h-6 text-arcane" />,
    theme: "border-arcane/30 shadow-[inset_0_0_40px_rgba(139,92,246,0.15)]",
    titleColor: "text-arcane-light",
    items: [
      { title: "Ervas do Abismo", desc: "Coletar 10x Raiz Negra e 5x Flor de Sangue.", reward: "Poção de Vida" },
      { title: "Cristais de Mana", desc: "Extrair 5x Cristais Brutos das cavernas uivantes.", reward: "15% XP, Poção de Mana" },
      { title: "Relíquias Perdidas", desc: "Encontrar o Amuleto do Rei Caído nas ruínas.", reward: "20% XP, Amuleto" },
    ]
  },
  {
    category: "Contratos de Masmorra",
    icon: <Key className="w-6 h-6 text-gold" />,
    theme: "border-gold/30 shadow-[inset_0_0_40px_rgba(251,191,36,0.15)]",
    titleColor: "text-gold",
    items: [
      { 
        title: "O Desafio do Abismo", 
        desc: "Sobreviva a 10 ondas de inimigos e derrote o Golem de Pedra e o Minotauro.", 
        reward: "1x Chave da Masmorra, Baú Épico",
        highlight: true
      }
    ]
  }
];

export default function Quests() {
  return (
    <section id="quests" className="py-32 relative bg-void overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/darktavern/1920/1080')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void/90 to-void" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-3 mb-4"
          >
            <Flame className="w-6 h-6 text-battle-red animate-pulse" />
            <span className="text-gold font-cinzel tracking-widest uppercase text-sm">Contratos</span>
            <Flame className="w-6 h-6 text-battle-red animate-pulse" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-cinzel text-white mb-6 text-shadow-epic">Quadro de Missões</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Aceite contratos perigosos, cace feras terríveis e colete recursos valiosos para forjar sua lenda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {quests.map((section, sIdx) => (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sIdx * 0.2 }}
              className={`bg-void-light/80 backdrop-blur-sm rounded-lg border ${section.theme} p-6 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300`}
            >
              {/* Scroll paper texture effect */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] mix-blend-overlay pointer-events-none" />
              
              <div className={`flex items-center gap-3 mb-6 border-b border-white/10 pb-4 relative z-10`}>
                {section.icon}
                <h3 className={`text-2xl font-cinzel ${section.titleColor}`}>{section.category}</h3>
              </div>

              <div className="space-y-4 relative z-10">
                {section.items.map((item, iIdx) => (
                  <div 
                    key={iIdx} 
                    className={`p-4 rounded bg-black/60 border backdrop-blur-md transition-colors ${item.highlight ? 'border-gold/50 shadow-[0_0_15px_rgba(251,191,36,0.2)]' : 'border-white/5 hover:border-white/20'}`}
                  >
                    <div className="flex items-start gap-3">
                      <ScrollText className={`w-5 h-5 shrink-0 mt-0.5 ${item.highlight ? 'text-gold' : 'text-gray-500'}`} />
                      <div>
                        <h4 className={`font-bold mb-1 font-cinzel tracking-wide ${item.highlight ? 'text-gold' : 'text-gray-200'}`}>{item.title}</h4>
                        <p className="text-sm text-gray-400 mb-4 leading-relaxed">{item.desc}</p>
                        <div className={`inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border ${item.highlight ? 'bg-gold/10 text-gold border-gold/30' : 'bg-void border-white/10 text-gray-300'}`}>
                          Recompensa: {item.reward}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
