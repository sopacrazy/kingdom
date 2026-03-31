import { motion } from 'motion/react';
import { Zap, Droplets, Hexagon, Skull, ShieldAlert, Wind } from 'lucide-react';

const skills = [
  { class: "Guerreiro", name: "Golpe Brutal", desc: "Executa um ataque com 100% do dano físico e stuna o inimigo por 1 turno.", cd: 4, mana: 3, dist: 1, type: "physical", tags: ["Burst", "Stun"] },
  { class: "Arqueiro", name: "Rajada Precisa", desc: "Dispara uma flecha causando 200% com base na sua Destreza.", cd: 3, mana: 3, dist: 10, type: "ranged", tags: ["Burst", "Precisão"] },
  { class: "Mago", name: "Chuva Etérea", desc: "Causa 100% de dano mágico e aplica veneno (Dano mágico) por 3 turnos, causando 50% do dano mágico por turno.", cd: 4, mana: 5, dist: 3, type: "magic", tags: ["AoE", "Veneno"] },
  { class: "Gladiador", name: "Corte Rasgante", desc: "Causa 150% do dano físico e aplica veneno (Dano físico) por 3 turnos, causando 30% do dano físico por turno.", cd: 5, mana: 5, dist: 1, type: "physical", tags: ["Sangramento", "Sustentado"] },
  { class: "Atirador Sombrio", name: "Flecha Enredante", desc: "Ataca com 150% do dano baseado na sua destreza e prende o inimigo por 1 turnos (sem mover).", cd: 5, mana: 8, dist: 10, type: "ranged", tags: ["Controle", "Debuff"] },
  { class: "Feiticeiro", name: "Orbe Arcano", desc: "Lança uma esfera de energia que causa 200% de dano mágico.", cd: 6, mana: 12, dist: 10, type: "magic", tags: ["Burst", "Mágico"] },
  { class: "Senhor da Guerra", name: "Investida Imparável", desc: "Avança até o oponente, causando 150% do dano físico.", cd: 6, mana: 8, dist: 10, type: "physical", tags: ["Mobilidade", "Engage"] },
  { class: "Caçador Fantasma", name: "Disparo Fantasma", desc: "100% chance de causar 50% do dano (Destreza) que decai 20% a cada repetição.", cd: 2, mana: 5, dist: 10, type: "ranged", tags: ["Multi-hit", "Execução"] },
  { class: "Arcanista Supremo", name: "Explosão da Alma", desc: "Libera energia arcana, causando 100% de dano mágico e stuna por 1 turno.", cd: 8, mana: 25, dist: 1, type: "magic", tags: ["Ultimate", "Stun"] },
];

const getTypeIcon = (type: string) => {
  if (type === 'physical') return <SwordIcon className="w-5 h-5" />;
  if (type === 'magic') return <Zap className="w-5 h-5" />;
  return <Wind className="w-5 h-5" />;
};

const SwordIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
    <line x1="13" y1="19" x2="19" y2="13" />
    <line x1="16" y1="16" x2="20" y2="20" />
    <line x1="19" y1="21" x2="21" y2="19" />
  </svg>
);

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-void-light relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-arcane/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-cinzel text-white mb-6 text-shadow-epic">Artes de Combate</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">O grimório de habilidades lendárias. Domine o campo de batalha com poderes devastadores e controle tático.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-void border border-wine/40 p-1 group hover:border-gold/50 transition-colors duration-500"
            >
              <div className="bg-[#110e0d] h-full p-6 relative overflow-hidden">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/30" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/30" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/30" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/30" />

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div>
                    <span className="text-[10px] text-gold uppercase tracking-widest font-bold bg-gold/10 px-2 py-1 border border-gold/20">{skill.class}</span>
                    <h4 className="text-xl font-cinzel text-white mt-3">{skill.name}</h4>
                  </div>
                  <div className={`w-12 h-12 rounded-sm bg-void border flex items-center justify-center shadow-inner
                    ${skill.type === 'physical' ? 'border-battle-red/50 text-battle-red shadow-battle-red/20' : 
                      skill.type === 'magic' ? 'border-arcane/50 text-blue-400 shadow-arcane/20' : 'border-emerald-500/50 text-emerald-400 shadow-emerald-500/20'}`}
                  >
                    {getTypeIcon(skill.type)}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-400 border border-gray-700 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-300 mb-8 h-16 leading-relaxed font-inter">{skill.desc}</p>

                <div className="flex items-center justify-between text-xs bg-void-light border border-white/5 p-3">
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <span className="text-gray-500 font-cinzel">CD</span>
                    <span className="font-bold">{skill.cd}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-blue-400">
                    <Droplets className="w-3.5 h-3.5" />
                    <span className="font-bold">{skill.mana}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-arcane-light">
                    <Hexagon className="w-3.5 h-3.5" />
                    <span className="font-bold">{skill.dist}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
