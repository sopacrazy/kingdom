import { motion } from 'motion/react';
import { Play, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Layer: Dark Leather */}
      <div className="absolute inset-0 z-0 texture-leather opacity-40" />
      
      {/* Ancient Book / Parchment Overlay */}
      <div className="container mx-auto px-4 z-10 relative flex justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="parchment-container max-w-5xl w-full aspect-[4/3] md:aspect-video flex flex-col items-center justify-center text-center p-8 md:p-20 border-medieval shadow-2xl overflow-visible"
        >
          {/* Ornate Corners */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-gold z-20" />
          <div className="absolute -top-4 -right-4 w-16 h-16 border-t-4 border-r-4 border-gold z-20" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-4 border-l-4 border-gold z-20" />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-gold z-20" />

          {/* Golden Seal */}
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 z-30 seal-gold"
          >
            <span className="font-medieval text-leather font-bold text-xl">KGB</span>
          </motion.div>

          {/* Heading Section */}
          <div className="relative mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <h1 className="font-cinzel font-black flex flex-col leading-[0.85] text-ink">
                <span className="text-5xl md:text-8xl tracking-widest mb-2">KINGDOM</span>
                <span className="text-2xl md:text-4xl my-4 text-gold-dark italic">OF</span>
                <span className="text-4xl md:text-7xl tracking-wider">GLASS AND BLOOD</span>
              </h1>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-dark to-transparent mt-6" />
            </motion.div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-2xl text-ink/80 mb-12 max-w-2xl leading-relaxed font-serif italic border-x-2 border-gold-dark px-8"
          >
            "Onde o destino é forjado em lâminas e o legado é escrito em sangue."
          </motion.p>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <button className="btn-gold group">
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                Entrar na Jornada
              </span>
            </button>
            
            <button className="btn-medieval group">
              <span className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Ver Crônicas
              </span>
            </button>
          </motion.div>

          {/* Ink Stains */}
          <div className="ink-stain -bottom-10 -right-10 w-40 h-40 bg-ink rounded-full" />
          <div className="ink-stain top-20 left-10 w-20 h-20 bg-ink/50 rounded-full" />
        </motion.div>
      </div>

      {/* Atmospheric Particles Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </section>
  );
}
