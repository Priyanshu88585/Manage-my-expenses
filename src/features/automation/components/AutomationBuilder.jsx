"use client";
import { useState } from 'react';

const WORKFLOWS = [
  { id: '1', name: 'Auto-categorize Cloud Software', trigger: 'Expense > ₹10,000 with "AWS"', action: 'Assign Category "Infrastructure"', active: true },
  { id: '2', name: 'High Expense Alert', trigger: 'Single transaction > ₹50,000', action: 'Send Email Notification to Manager', active: true },
  { id: '3', name: 'Deal Closed Celebration', trigger: 'Deal moved to "Closed Won"', action: 'Log Activity & Notify Slack Channel', active: false },
];

export default function AutomationBuilder() {
  const [workflows, setWorkflows] = useState(WORKFLOWS);

  const toggleWorkflow = (id) => {
    setWorkflows(prev => prev.map(w => w.id === id ? { ...w, active: !w.active } : w));
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-display font-medium text-white">Active Workflows</h2>
        <button className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90">
          + New Automation
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {workflows.map(w => (
          <div key={w.id} className="p-6 rounded-3xl bg-[#0a0a0a] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white/20 transition-all">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium text-white">{w.name}</h3>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">IF: {w.trigger}</span>
                <span className="text-white/30">&rarr;</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">THEN: {w.action}</span>
              </div>
            </div>

            <button 
              onClick={() => toggleWorkflow(w.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${w.active ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-white/5 text-white/40 border-white/10'}`}
            >
              {w.active ? 'Active' : 'Disabled'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
