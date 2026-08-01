"use client";
import { useState } from "react";
import { Edit2, Trash2, Check, X } from "lucide-react";

export default function BudgetOverview({ budgets = [], onAddClick, onUpdate, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEditClick = (budget) => {
    setEditingId(budget.id);
    setEditForm({ ...budget });
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
    if (confirm("Are you sure you want to delete this budget?")) {
      if (onDelete) await onDelete(id);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
            Smart Budgets 
            <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-[10px] text-blue-400 uppercase tracking-wider font-bold">Auto-tracked</span>
          </h3>
          <p className="text-xs text-white/50 mt-1">AI monitors your spending velocity against your limits.</p>
        </div>
        <button onClick={onAddClick} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs hover:bg-white/10 transition-colors">
          + Add Budget
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {budgets.map(budget => {
          const isEditing = editingId === budget.id;
          const percent = Math.min((budget.spent / budget.limit) * 100, 100);
          const isOver = budget.spent > budget.limit;
          const isWarning = percent > 80 && !isOver;

          let barColor = 'bg-emerald-500';
          let textColor = 'text-emerald-400';
          let bgGlow = 'bg-emerald-500/5';
          if (isWarning) {
            barColor = 'bg-amber-500';
            textColor = 'text-amber-400';
            bgGlow = 'bg-amber-500/5';
          }
          if (isOver) {
            barColor = 'bg-red-500';
            textColor = 'text-red-400';
            bgGlow = 'bg-red-500/5';
          }

          if (isEditing) {
            return (
              <div key={budget.id} className="p-5 rounded-2xl border border-indigo-500/50 bg-[#0a0a0a] flex flex-col gap-3">
                <input
                  type="text"
                  value={editForm.category || ""}
                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                  placeholder="Category Name"
                />
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="text-[10px] text-white/50 mb-1 block">Spent</label>
                    <input
                      type="number"
                      value={editForm.spent || 0}
                      onChange={(e) => setEditForm({ ...editForm, spent: Number(e.target.value) })}
                      className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                      placeholder="0"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-[10px] text-white/50 mb-1 block">Limit</label>
                    <input
                      type="number"
                      value={editForm.limit || 0}
                      onChange={(e) => setEditForm({ ...editForm, limit: Number(e.target.value) })}
                      className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 mt-2">
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
            <div key={budget.id} className={`p-5 rounded-2xl border border-white/5 ${bgGlow} transition-colors flex flex-col gap-3 group relative`}>
              <div className="absolute top-3 right-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0a0a0a]/80 backdrop-blur-sm rounded-md p-1">
                <button onClick={() => handleEditClick(budget)} className="p-1 rounded text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => handleDeleteClick(budget.id)} className="p-1 rounded text-red-500/50 hover:text-red-400 hover:bg-red-500/10 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white">{budget.category}</span>
                <span className={`text-xs font-bold ${textColor}`}>
                  {isOver ? 'Over Budget' : `${percent.toFixed(0)}% Spent`}
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden relative">
                <div 
                  className={`absolute top-0 left-0 h-full rounded-full ${barColor} transition-all duration-1000`} 
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-xs text-white/50">
                <span>₹{budget.spent.toLocaleString('en-IN')} spent</span>
                <span>₹{budget.limit.toLocaleString('en-IN')} limit</span>
              </div>
            </div>
          );
        })}
        
        {budgets.length === 0 && (
          <div className="col-span-1 sm:col-span-2 p-8 text-center border border-white/10 rounded-2xl border-dashed">
            <p className="text-sm text-white/40">No budgets found. Create one to start tracking!</p>
          </div>
        )}
      </div>
    </div>
  );
}
