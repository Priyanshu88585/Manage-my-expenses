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
    <section id="features" className="relative w-full py-32 bg-[#000]">
      
      {/* Background Video (blurred) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-20 pointer-events-none">
        <video 
          autoPlay muted loop playsInline 
          className="min-w-full min-h-full object-cover"
          src="https://www.gstatic.com/aitestkitchen/website/flow/landing_page/landing_hero__background_video__1440w.mp4"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mb-12">
        <h3 className="text-3xl md:text-5xl font-display font-medium text-white mb-4">Our Models</h3>
        <p className="text-xl text-white/70 max-w-2xl">
          ExpenseTracker collaborates with you at every stage, from budgeting to investing—all using advanced financial analysis models.
        </p>
      </div>

      <div className="relative z-10 w-full overflow-hidden pb-12">
        {/* Horizontal scroll container */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 scrollbar-hide pb-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
          {models.map((model) => (
            <div key={model.id} className="snap-center shrink-0 w-[85vw] md:w-[600px] flex flex-col bg-[#111] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-colors group">
              <div className="relative w-full h-[250px] md:h-[350px] bg-black overflow-hidden">
                <video 
                  src={model.videoUrl} 
                  autoPlay muted loop playsInline 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-medium text-white mb-3">{model.title}</h3>
                <p className="text-white/60 text-lg mb-8 flex-grow">{model.desc}</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <button className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/90 transition-colors">
                    Try Feature
                  </button>
                  <button className="bg-transparent border border-white/20 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* spacer for end padding */}
          <div className="shrink-0 w-6"></div>
        </div>
      </div>
    </section>
  );
}
