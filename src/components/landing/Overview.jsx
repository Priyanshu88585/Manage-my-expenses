"use client";
import { motion } from 'framer-motion';
import { TextReveal } from '@/components/animations/TextReveal';

export default function Overview() {
  return (
    <section id="overview" className="relative w-full py-32 flex flex-col items-center justify-center overflow-hidden">
      
      <div className="text-center mb-16 z-10 px-4">
        <TextReveal as="h2" className="text-[clamp(2.5rem,6vw,5rem)] font-display font-bold leading-[1.1] tracking-tight text-white flex flex-col" animation="blur-in">
          <span className="text-white/80">Unlock your</span>
          <span>best financial clarity</span>
        </TextReveal>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-7xl px-4 z-10 group cursor-pointer"
      >
        <figure className="relative w-full aspect-video rounded-3xl overflow-hidden bg-[#111] border border-white/10 shadow-[0_0_50px_rgba(0,204,255,0.1)] transition-transform duration-500 group-hover:scale-[1.02]">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" 
            alt="Dashboard Preview" 
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
        </figure>
      </motion.div>

      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
    </section>
  );
}
