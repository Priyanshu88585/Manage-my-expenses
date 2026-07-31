"use client";
import { useState } from 'react';

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
    <section id="capabilities" className="relative w-full py-32 bg-black border-t border-white/10">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h3 className="text-3xl md:text-5xl font-display font-medium text-white mb-4">Capabilities</h3>
          <p className="text-xl text-white/70 max-w-2xl">
            Everything you need to master your finances, designed for speed and clarity.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id 
                  ? 'bg-white text-black' 
                  : 'bg-[#111] text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#0a0a0a] rounded-3xl p-6 md:p-12 border border-white/5">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <h4 className="text-3xl font-display font-medium text-white mb-4 animate-fade-in-up" key={`${activeTab}-title`}>
              {content[activeTab].title}
            </h4>
            <p className="text-lg text-white/60 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }} key={`${activeTab}-desc`}>
              {content[activeTab].desc}
            </p>
            <div>
              <button className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-white/10 transition-colors">
                Explore feature
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-white/10 relative">
            <video 
              key={activeTab} // Force re-render on tab change to replay video
              src={content[activeTab].videoUrl} 
              autoPlay muted loop playsInline 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
