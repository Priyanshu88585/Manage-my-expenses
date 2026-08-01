import { DollarSign } from 'lucide-react';

export default function Workflow() {
  return (
    <section id="tools" className="relative w-full py-32 bg-black">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h3 className="text-3xl md:text-5xl font-display font-medium text-white mb-4">Tools</h3>
          <p className="text-xl text-white/70 max-w-2xl">
            A comprehensive suite of financial tools built directly into your workflow.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Card 1: Large Feature */}
          <div className="lg:col-span-2 lg:row-span-2 rounded-3xl bg-[#111] border border-white/10 overflow-hidden relative group p-8 flex flex-col justify-end transition-all hover:border-white/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent z-0 pointer-events-none"></div>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Analytics" className="absolute top-0 right-0 w-2/3 h-2/3 object-cover opacity-30 mix-blend-screen group-hover:scale-105 transition-transform duration-700 rounded-bl-[100px] mask-image:linear-gradient(to_bottom_left,black,transparent)" style={{ WebkitMaskImage: 'linear-gradient(to bottom left, black 40%, transparent 100%)' }} />
            
            <div className="relative z-10 w-full md:w-1/2">
              <h4 className="text-2xl font-display font-medium text-white mb-2">Deep Analytics</h4>
              <p className="text-white/60 mb-6">Interactive charts and granular breakdowns of your spending across any time period.</p>
              <button className="text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full backdrop-blur-sm transition-colors border border-white/5">
                Explore Dashboard
              </button>
            </div>
          </div>

          {/* Card 2: Medium Feature */}
          <div className="rounded-3xl bg-zinc-900 border border-white/10 overflow-hidden relative group p-8 flex flex-col transition-all hover:border-white/20">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <DollarSign className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-display font-medium text-white mb-2">Smart Budgets</h4>
              <p className="text-white/60 text-sm">Set dynamic budgets that adapt to your monthly income fluctuations.</p>
            </div>
          </div>

          {/* Card 3: Medium Feature */}
          <div className="rounded-3xl bg-zinc-900 border border-white/10 overflow-hidden relative group p-8 flex flex-col transition-all hover:border-white/20">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,100,100,0.15),transparent_60%)] pointer-events-none"></div>
            <div className="relative z-10">
              <h4 className="text-xl font-display font-medium text-white mb-2">Custom Categories</h4>
              <p className="text-white/60 text-sm">Organize your expenses exactly how you want them with unlimited custom tags and icons.</p>
            </div>
          </div>

          {/* Card 4: Horizontal Feature */}
          <div className="md:col-span-2 rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden relative group flex flex-col md:flex-row items-center transition-all hover:border-white/20">
             <div className="p-8 w-full md:w-1/2 z-10">
                <h4 className="text-2xl font-display font-medium text-white mb-2">Data Export</h4>
                <p className="text-white/60 mb-6 text-sm">Export your financial data to CSV, PDF, or directly to your accountant in one click.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/50">CSV</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/50">PDF</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/50">API</span>
                </div>
             </div>
             <div className="w-full md:w-1/2 h-full bg-[#111] relative overflow-hidden flex items-center justify-center p-8">
               {/* Mock UI Element */}
               <div className="w-full max-w-[250px] bg-black border border-white/10 rounded-xl p-4 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <div className="h-4 w-1/2 bg-white/20 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-white/10 rounded"></div>
                    <div className="h-3 w-4/5 bg-white/10 rounded"></div>
                    <div className="h-3 w-full bg-white/10 rounded"></div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <div className="h-6 w-20 bg-blue-500 rounded text-[10px] text-white flex items-center justify-center font-medium">Download</div>
                  </div>
               </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
