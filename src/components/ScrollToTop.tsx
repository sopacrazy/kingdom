import { motion, useScroll, useTransform } from 'motion/react';
import { Crown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const unsub = scrollY.on("change", (latest) => {
      setIsVisible(latest > 600);
    });
    return () => unsub();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-wine border-4 border-gold rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-wine-dark transition-colors group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gold-dark/10 group-hover:bg-gold-dark/30 transition-colors" />
      <Crown className="w-6 h-6 text-gold relative z-10 group-hover:-translate-y-1 transition-transform" />
    </motion.button>
  );
}
