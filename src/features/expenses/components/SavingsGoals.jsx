"use client";
import { useState } from 'react';
import { Plus, Edit2, Trash2, Check, X } from 'lucide-react';

export default function SavingsGoals({ goals = [], onAddClick, onUpdate, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEditClick = (goal) => {
    setEditingId(goal.id);
    setEditForm({ ...goal });
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleSave = async () => {
    if (onUpdate) await onUpdate(editForm);
    setEditingId(null);
  };

  const handleDeleteClick = async (id) => {
    if (confirm("Are you sure you want to delete this goal?")) {
      if (onDelete) await onDelete(id);
    }
  };

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
          const isEditing = editingId === goal.id;
          const percent = Math.min((goal.current / goal.target) * 100, 100);
          const isComplete = percent >= 100;

          if (isEditing) {
            return (
              <div key={goal.id} className="flex flex-col gap-3 p-3 rounded-xl border border-indigo-500/50 bg-black/30">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={editForm.icon || ""}
                    onChange={(e) => setEditForm({ ...editForm, icon: e.target.value })}
                    className="w-12 text-center bg-black/50 border border-white/10 rounded-md px-2 py-1.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                    placeholder="Icon"
                  />
                  <input
                    type="text"
                    value={editForm.title || ""}
                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                    className="flex-1 bg-black/50 border border-white/10 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                    placeholder="Goal Name"
                  />
                </div>
                
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="text-[10px] text-white/50 mb-1 block">Current (₹)</label>
                    <input
                      type="number"
                      value={editForm.current || 0}
                      onChange={(e) => setEditForm({ ...editForm, current: Number(e.target.value) })}
                      className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                      placeholder="0"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-[10px] text-white/50 mb-1 block">Target (₹)</label>
                    <input
                      type="number"
                      value={editForm.target || 0}
                      onChange={(e) => setEditForm({ ...editForm, target: Number(e.target.value) })}
                      className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                      placeholder="0"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 mt-1">
                  <button onClick={handleSave} className="p-1.5 rounded-md bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 transition-colors">
                    <Check className="w-4 h-4" />
                  </button>
                  <button onClick={handleCancel} className="p-1.5 rounded-md bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          }

          return (
            <div key={goal.id} className="flex flex-col gap-2 group relative p-2 -mx-2 rounded-xl hover:bg-white/5 transition-colors">
              <div className="absolute -top-1 -right-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0a0a0a]/90 backdrop-blur-sm rounded-md p-1 border border-white/10 shadow-lg z-10">
                <button onClick={() => handleEditClick(goal)} className="p-1 rounded text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                  <Edit2 className="w-3 h-3" />
                </button>
                <button onClick={() => handleDeleteClick(goal.id)} className="p-1 rounded text-red-500/50 hover:text-red-400 hover:bg-red-500/10 transition-colors">
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>

              <div className="flex items-center justify-between pr-2">
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

        {goals.length === 0 && (
          <div className="p-6 text-center border border-white/10 rounded-xl border-dashed">
            <p className="text-xs text-white/40">No savings goals yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
