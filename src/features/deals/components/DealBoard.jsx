"use client";
import { useState } from 'react';

const INITIAL_DEALS = [
  { id: '1', title: 'Enterprise Cloud License', client: 'Acme Corp', value: 450000, stage: 'qualified', probability: 40 },
  { id: '2', title: 'SaaS Renewal 2026', client: 'Stark Industries', value: 180000, stage: 'proposal', probability: 70 },
  { id: '3', title: 'Consulting Retainer', client: 'Wayne Enterprises', value: 95000, stage: 'won', probability: 100 },
  { id: '4', title: 'API Integration Project', client: 'Cyberdyne Systems', value: 320000, stage: 'negotiation', probability: 85 },
  { id: '5', title: 'Custom Analytics Module', client: 'Umbrella Corp', value: 120000, stage: 'qualified', probability: 30 },
];

const STAGES = [
  { id: 'qualified', label: 'Qualified Lead', color: 'from-blue-500/20 to-blue-500/5' },
  { id: 'proposal', label: 'Proposal Sent', color: 'from-amber-500/20 to-amber-500/5' },
  { id: 'negotiation', label: 'Negotiation', color: 'from-purple-500/20 to-purple-500/5' },
  { id: 'won', label: 'Closed Won', color: 'from-emerald-500/20 to-emerald-500/5' },
];

export default function DealBoard() {
  const [deals, setDeals] = useState(INITIAL_DEALS);
  const [newDealTitle, setNewDealTitle] = useState('');
  const [newDealValue, setNewDealValue] = useState('');
  const [newDealClient, setNewDealClient] = useState('');
  const [showModal, setShowModal] = useState(false);

  const moveDeal = (dealId, nextStage) => {
    setDeals(prev => prev.map(d => d.id === dealId ? { ...d, stage: nextStage } : d));
  };

  const handleCreateDeal = (e) => {
    e.preventDefault();
    if (!newDealTitle.trim() || !newDealValue) return;
    const newDeal = {
      id: String(Date.now()),
      title: newDealTitle.trim(),
      client: newDealClient.trim() || 'General Lead',
      value: Number(newDealValue),
      stage: 'qualified',
      probability: 40,
    };
    setDeals(prev => [...prev, newDeal]);
    setNewDealTitle('');
    setNewDealValue('');
    setNewDealClient('');
    setShowModal(false);
  };

  const totalPipelineValue = deals.reduce((acc, d) => acc + d.value, 0);

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Metrics Header */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-[#0a0a0a] border border-white/10 flex flex-col justify-between">
          <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Total Deals Value</span>
          <span className="text-3xl font-display font-medium text-white mt-2">₹{totalPipelineValue.toLocaleString('en-IN')}</span>
        </div>
        <div className="p-6 rounded-3xl bg-[#0a0a0a] border border-white/10 flex flex-col justify-between">
          <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Active Deals</span>
          <span className="text-3xl font-display font-medium text-white mt-2">{deals.length}</span>
        </div>
        <div className="p-6 rounded-3xl bg-[#0a0a0a] border border-white/10 flex items-center justify-between">
          <button 
            onClick={() => setShowModal(true)}
            className="w-full py-4 px-6 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all text-sm shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            + Create New Deal
          </button>
        </div>
      </div>

      {/* Kanban Board Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {STAGES.map(stage => {
          const stageDeals = deals.filter(d => d.stage === stage.id);
          const stageValue = stageDeals.reduce((sum, d) => sum + d.value, 0);

          return (
            <div key={stage.id} className="flex flex-col gap-4 rounded-3xl bg-[#0a0a0a] border border-white/10 p-5 min-h-[450px]">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-medium text-white text-base">{stage.label}</h3>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/70 text-xs font-mono">{stageDeals.length}</span>
                </div>
                <span className="text-xs text-white/40 font-mono">₹{stageValue.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex flex-col gap-3 flex-grow">
                {stageDeals.map(deal => (
                  <div key={deal.id} className="p-4 rounded-2xl bg-[#111] border border-white/10 hover:border-white/20 transition-all group flex flex-col gap-3">
                    <div>
                      <h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">{deal.title}</h4>
                      <p className="text-xs text-white/50">{deal.client}</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <span className="text-sm font-medium text-white">₹{deal.value.toLocaleString('en-IN')}</span>
                      <div className="flex gap-1">
                        {STAGES.filter(s => s.id !== deal.stage).map(s => (
                          <button
                            key={s.id}
                            onClick={() => moveDeal(deal.id, s.id)}
                            className="px-2 py-1 text-[10px] rounded-md bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition-colors"
                            title={`Move to ${s.label}`}
                          >
                            {s.label[0]}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* New Deal Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#0a0a0a] border border-white/15 rounded-3xl p-8 shadow-2xl animate-fade-in-scale">
            <h3 className="text-2xl font-display font-medium text-white mb-6">Create New Deal</h3>
            <form onSubmit={handleCreateDeal} className="flex flex-col gap-4">
              <div>
                <label className="text-xs text-white/60 mb-1 block">Deal Title</label>
                <input
                  type="text"
                  placeholder="e.g. Enterprise License"
                  value={newDealTitle}
                  onChange={(e) => setNewDealTitle(e.target.value)}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-white/30"
                  required
                />
              </div>
              <div>
                <label className="text-xs text-white/60 mb-1 block">Client Name</label>
                <input
                  type="text"
                  placeholder="e.g. Acme Corp"
                  value={newDealClient}
                  onChange={(e) => setNewDealClient(e.target.value)}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-white/30"
                />
              </div>
              <div>
                <label className="text-xs text-white/60 mb-1 block">Value (₹)</label>
                <input
                  type="number"
                  placeholder="50000"
                  value={newDealValue}
                  onChange={(e) => setNewDealValue(e.target.value)}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-white/30"
                  required
                />
              </div>
              <div className="flex items-center justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 rounded-full text-sm text-white/70 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90"
                >
                  Create Deal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
