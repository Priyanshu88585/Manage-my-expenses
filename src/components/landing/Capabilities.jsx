"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextReveal } from '@/components/animations/TextReveal';

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState('plan');

  const tabs = [
    { id: 'plan', label: 'Plan & Budget' },
    { id: 'track', label: 'Track Real-time' },
    { id: 'analyze', label: 'Analyze & Refine' },
  ];

  const content = {
    plan: {
      title: "Set Your Financial Goals",
      desc: "Define custom budgets for different categories, set savings targets, and let our system automatically calculate your daily allowances.",
      videoUrl: "https://www.gstatic.com/aitestkitchen/website/flow/landing_page/landing_models__card_video__omni.mp4"
    },
    track: {
      title: "Seamless Expense Entry",
      desc: "Log expenses instantly via our mobile-friendly interface or connect your accounts for automated importing and AI categorization.",
      videoUrl: "https://www.gstatic.com/aitestkitchen/website/flow/landing_page/landing_models__card_video__veo.mp4"
    },
    analyze: {
      title: "Actionable Insights",
      desc: "Visualize your spending patterns across time and categories. Identify where you can save money with AI-generated recommendations.",
      videoUrl: "https://www.gstatic.com/aitestkitchen/website/flow/landing_page/landing_hero__background_video__1440w.mp4"
    }
  };

  return (
    <section id="capabilities" className="relative w-full py-32">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <TextReveal as="h3" className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            Capabilities
          </TextReveal>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl font-light text-balance"
          >
            Everything you need to master your finances, designed for speed and clarity.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id 
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                  : 'bg-[#111] text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#0a0a0a] rounded-3xl p-6 md:p-12 border border-white/5 shadow-2xl"
        >
          <div className="order-2 lg:order-1 flex flex-col justify-center min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                transition={{ duration: 0.4 }}
              >
                <h4 className="text-3xl font-display font-medium text-white mb-4 tracking-tight">
                  {content[activeTab].title}
                </h4>
                <p className="text-lg text-white/60 leading-relaxed mb-8 font-light text-balance">
                  {content[activeTab].desc}
                </p>
                <div>
                  <button className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-white/10 transition-colors">
                    Explore feature
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="order-1 lg:order-2 w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-white/10 relative">
            <AnimatePresence mode="wait">
              <motion.video 
                key={activeTab} // Force re-render on tab change to replay video
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.9, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                src={content[activeTab].videoUrl} 
                autoPlay muted loop playsInline 
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
