import { motion } from 'motion/react';
import { Sparkles, FlameIcon, ShieldAlert } from 'lucide-react';

const skills = [
  {
    class: 'Guerreiro',
    name: 'Impacto Devastador',
    description: 'Um golpe de cima para baixo que racha o próprio vidro do solo, atordoando inimigos.',
    cooldown: '8s',
    mana: '45',
    range: '1',
    type: 'Físico / Stun',
    icon: <ShieldAlert className="w-6 h-6" />,
    color: 'var(--color-battle-red)'
  },
  {
    class: 'Arqueiro',
    name: 'Chuva de Vidro',
    description: 'Dispara uma salva de flechas encantadas que se fragmentam em estilhaços fatais.',
    cooldown: '12s',
    mana: '60',
    range: '5',
    type: 'Mágico / Dano',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'var(--color-moss)'
  },
  {
    class: 'Mago',
    name: 'Vórtice de Sangue',
    description: 'Conjura um redemoinho de energia vital que drena a vida dos adversários para curar o conjurador.',
    cooldown: '15s',
    mana: '90',
    range: '4',
    type: 'Arcano / Dreno',
    icon: <FlameIcon className="w-6 h-6" />,
    color: 'var(--color-wine)'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-[#1a120b] overflow-hidden">
      {/* Magical Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-wine/5 blur-[150px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="title-ornate text-4xl md:text-6xl text-gold uppercase tracking-[0.2em] font-black font-cinzel">
              Artes de Combate
            </h2>
            <p className="font-serif italic text-2xl text-parchment/60 max-w-2xl mx-auto mt-4">
              "Técnicas ancestrais e feitiços proibidos registrados no Grande Grimório."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              {/* Scroll of Arts Appearance */}
              <div className="parchment-container p-1 border-medieval h-full shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                <div className="bg-parchment h-full p-8 flex flex-col items-center text-center relative overflow-hidden">
                   
                   {/* Glowing Rune Watermark */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl text-gold-dark/5 pointer-events-none select-none font-medieval group-hover:scale-125 group-hover:text-gold-dark/10 transition-all duration-1000">
                      ᚱᚢᚾᛖ
                   </div>

                   {/* Class Badge */}
                   <span className="font-cinzel text-xs font-bold text-gold-dark uppercase tracking-widest mb-6 border-b border-gold-dark/30 pb-2">
                     {skill.class}
                   </span>

                   {/* Skill Icon with Magical Glow */}
                   <div className="relative mb-8">
                      <div className="seal-gold !w-16 !h-16 group-hover:rotate-[360deg] transition-transform duration-1000 flex items-center justify-center">
                         <div style={{ color: skill.color }}>{skill.icon}</div>
                      </div>
                      <div className="absolute inset-0 bg-gold blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                   </div>

                   <h3 className="font-cinzel text-2xl font-black text-ink mb-4 uppercase tracking-tighter">
                     {skill.name}
                   </h3>

                   <p className="text-ink/80 text-xl font-serif italic leading-relaxed mb-8 min-h-[5rem]">
                     "{skill.description}"
                   </p>

                   {/* Skill Specs - Styled like Manuscript notes */}
                   <div className="w-full grid grid-cols-2 gap-4 py-6 border-t border-gold-dark/10 mt-auto">
                      <div className="flex flex-col">
                         <span className="font-cinzel text-[10px] text-gold-dark font-bold uppercase tracking-widest">Tempo</span>
                         <span className="font-medieval text-2xl text-ink">{skill.cooldown}</span>
                      </div>
                      <div className="flex flex-col">
                         <span className="font-cinzel text-[10px] text-gold-dark font-bold uppercase tracking-widest">Mana</span>
                         <span className="font-medieval text-2xl text-ink">{skill.mana}</span>
                      </div>
                   </div>

                   {/* Status / Type Tag */}
                   <div className="mt-6 flex justify-center">
                      <span className="px-4 py-2 bg-leather text-parchment font-cinzel text-[10px] font-bold tracking-widest rounded-none border border-gold-dark rotate-1 group-hover:rotate-0 transition-transform">
                        {skill.type}
                      </span>
                   </div>

                   {/* Ink Stains */}
                   <div className="absolute -top-10 -left-10 w-24 h-24 bg-ink/10 rounded-full blur-xl pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements at bottom of section */}
        <div className="mt-24 text-center">
           <button className="btn-gold !px-12">
              Folhear Grimório Completo
           </button>
        </div>
      </div>
    </section>
  );
}
