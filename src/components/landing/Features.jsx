"use client";
import { motion } from 'framer-motion';
import { TextReveal } from '@/components/animations/TextReveal';

export default function Features() {
  const models = [
    {
      id: 1,
      title: "Expense AI",
      desc: "Automatically categorize and tag your transactions with near-perfect accuracy using our custom ML models.",
      videoUrl: "https://www.gstatic.com/aitestkitchen/website/flow/landing_page/landing_models__card_video__veo.mp4"
    },
    {
      id: 2,
      title: "Predictive Analytics",
      desc: "Forecast your future spending habits and get proactive alerts before you exceed your budget.",
      videoUrl: "https://www.gstatic.com/aitestkitchen/website/flow/landing_page/landing_models__card_video__omni.mp4"
    },
    {
      id: 3,
      title: "Smart Insights",
      desc: "Generate comprehensive reports and visualizations that actually make sense of your financial data.",
      videoUrl: "https://www.gstatic.com/aitestkitchen/website/flow/landing_page/landing_models__card_video__veo.mp4"
    }
  ];

  return (
    <section id="features" className="relative w-full py-32">
      
      
      <div className="relative z-10 w-full max-w-8xl mx-auto px-6 mb-12 flex flex-col items-center text-center">
        <TextReveal as="h3" className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
          Our Models
        </TextReveal>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-white/70 max-w-2xl font-light text-balance"
        >
          Manage My Expense collaborates with you at every stage, from budgeting to investing—all using advanced financial analysis models.
        </motion.p>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, idx) => (
            <motion.div 
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col bg-[#111] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-colors group shadow-2xl"
            >
              <div className="relative w-full h-[250px] bg-black overflow-hidden">
                <video 
                  src={model.videoUrl} 
                  autoPlay muted loop playsInline 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-medium text-white mb-3 tracking-tight">{model.title}</h3>
                <p className="text-white/60 text-lg mb-8 flex-grow font-light">{model.desc}</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <button className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Try Feature
                  </button>
                  <button className="bg-transparent border border-white/20 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
