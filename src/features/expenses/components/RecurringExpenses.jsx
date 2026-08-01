"use client";
import { useState } from "react";
import { Plus, Edit2, Trash2, Check, X } from "lucide-react";

export default function RecurringExpenses({ subscriptions = [], onAdd, onUpdate, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [isAdding, setIsAdding] = useState(false);

  const handleEditClick = (sub) => {
    setEditingId(sub.id);
    setEditForm({ ...sub });
    setIsAdding(false);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({});
    setIsAdding(false);
  };

  const handleSave = async () => {
    if (isAdding) {
      if (onAdd) await onAdd(editForm);
    } else {
      if (onUpdate) await onUpdate(editForm);
    }
    setEditingId(null);
    setIsAdding(false);
  };

  const handleAddNewClick = () => {
    setIsAdding(true);
    setEditingId("new");
    setEditForm({
      title: "",
      amount: 0,
      frequency: "Monthly",
      nextDate: new Date().toISOString().split('T')[0],
      autoPay: true
    });
  };

  const handleDeleteClick = async (id) => {
    if (confirm("Are you sure you want to delete this subscription?")) {
      if (onDelete) await onDelete(id);
    }
  };

  const renderRow = (sub) => {
    const isEditing = editingId === sub.id;

    if (isEditing) {
      return (
        <tr key={sub.id || "new"} className="bg-white/5">
          <td className="p-4">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                value={editForm.title || ""}
                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                placeholder="Subscription Name"
              />
              <select
                value={editForm.frequency || "Monthly"}
                onChange={(e) => setEditForm({ ...editForm, frequency: e.target.value })}
                className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-1.5 text-xs text-white/70 focus:outline-none focus:border-indigo-500"
              >
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
                <option value="Weekly">Weekly</option>
              </select>
            </div>
          </td>
          <td className="p-4">
            <input
              type="number"
              value={editForm.amount || ""}
              onChange={(e) => setEditForm({ ...editForm, amount: Number(e.target.value) })}
              className="w-full max-w-[100px] bg-black/50 border border-white/10 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:border-indigo-500"
              placeholder="0"
            />
          </td>
          <td className="p-4">
            <input
              type="date"
              value={editForm.nextDate ? editForm.nextDate.split('T')[0] : ""}
              onChange={(e) => setEditForm({ ...editForm, nextDate: e.target.value })}
              className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </td>
          <td className="p-4">
            <select
              value={editForm.autoPay ? "true" : "false"}
              onChange={(e) => setEditForm({ ...editForm, autoPay: e.target.value === "true" })}
              className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="true">Active Auto-pay</option>
              <option value="false">Manual Payment</option>
            </select>
          </td>
          <td className="p-4">
            <div className="flex items-center gap-2">
              <button onClick={handleSave} className="p-1.5 rounded-md bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 transition-colors">
                <Check className="w-4 h-4" />
              </button>
              <button onClick={handleCancel} className="p-1.5 rounded-md bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </td>
        </tr>
      );
    }

    return (
      <tr key={sub.id} className="hover:bg-white/5 transition-colors group">
        <td className="p-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">{sub.title}</span>
            <span className="text-[10px] text-white/40 uppercase tracking-wide">{sub.frequency}</span>
          </div>
        </td>
        <td className="p-4 text-sm text-white">₹{sub.amount?.toLocaleString('en-IN') || 0}</td>
        <td className="p-4 text-sm text-white/70">{sub.nextDate ? new Date(sub.nextDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }) : "-"}</td>
        <td className="p-4">
          {sub.autoPay ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active Auto-pay
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Manual Payment
            </span>
          )}
        </td>
        <td className="p-4">
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => handleEditClick(sub)} className="p-1.5 rounded-md text-white/50 hover:text-white hover:bg-white/10 transition-colors">
              <Edit2 className="w-4 h-4" />
            </button>
            <button onClick={() => handleDeleteClick(sub.id)} className="p-1.5 rounded-md text-red-500/50 hover:text-red-400 hover:bg-red-500/10 transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
            Recurring Expenses
            <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-[10px] text-purple-400 uppercase tracking-wider font-bold">Autopilot</span>
          </h3>
          <p className="text-xs text-white/50 mt-1">Manage your subscriptions and recurring bills.</p>
        </div>
        <button 
          onClick={handleAddNewClick}
          disabled={isAdding}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="w-3.5 h-3.5" />
          Add New
        </button>
      </div>

      <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-4 text-xs font-semibold text-white/50 uppercase tracking-wider">Subscription</th>
                <th className="p-4 text-xs font-semibold text-white/50 uppercase tracking-wider">Amount</th>
                <th className="p-4 text-xs font-semibold text-white/50 uppercase tracking-wider">Next Billing</th>
                <th className="p-4 text-xs font-semibold text-white/50 uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-semibold text-white/50 uppercase tracking-wider w-24">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {isAdding && renderRow({ id: "new" })}
              {subscriptions.map(sub => renderRow(sub))}
              {subscriptions.length === 0 && !isAdding && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-white/40 text-sm">
                    No recurring expenses found. Click &quot;Add New&quot; to add one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
