"use client";
import { Plus } from 'lucide-react';

export default function SavingsGoals({ goals = [], onAddClick }) {
  return (
    <div className="relative overflow-hidden p-6 rounded-3xl bg-[#0a0a0a] border border-white/10 flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-display font-medium text-white">Savings Goals</h3>
        <button onClick={onAddClick} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col gap-5">
        {goals.map(goal => {
          const percent = Math.min((goal.current / goal.target) * 100, 100);
          const isComplete = percent >= 100;

          return (
            <div key={goal.id} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <span>{goal.icon}</span> {goal.title}
                </div>
                <span className="text-xs font-mono text-white/60">
                  {isComplete ? '🎉 Done' : `${percent.toFixed(0)}%`}
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${isComplete ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-white/40'}`} 
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-[10px] text-white/40 font-mono uppercase tracking-wider">
                <span>₹{goal.current.toLocaleString('en-IN')}</span>
                <span>₹{goal.target.toLocaleString('en-IN')}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
