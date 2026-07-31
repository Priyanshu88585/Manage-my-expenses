"use client";
import { useState } from 'react';

const INITIAL_TASKS = [
  { id: '1', title: 'Prepare Q3 Budget Proposal', priority: 'high', dueDate: '2026-08-05', completed: false },
  { id: '2', title: 'Follow up with Acme Corp CFO', priority: 'medium', dueDate: '2026-08-02', completed: true },
  { id: '3', title: 'Review recurring server subscriptions', priority: 'low', dueDate: '2026-08-10', completed: false },
  { id: '4', title: 'Audit monthly GST invoices', priority: 'high', dueDate: '2026-08-01', completed: false },
];

export default function TaskList() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [priority, setPriority] = useState('medium');

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    setTasks(prev => [
      ...prev,
      {
        id: String(Date.now()),
        title: newTaskTitle.trim(),
        priority,
        dueDate: new Date().toISOString().split('T')[0],
        completed: false,
      }
    ]);
    setNewTaskTitle('');
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">
      <form onSubmit={handleAddTask} className="flex gap-4 p-4 rounded-3xl bg-[#0a0a0a] border border-white/10">
        <input 
          type="text" 
          placeholder="Add a new task..." 
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          className="flex-grow bg-transparent px-4 text-white text-sm outline-none placeholder-white/40"
        />
        <select 
          value={priority} 
          onChange={(e) => setPriority(e.target.value)}
          className="bg-[#111] text-white text-xs px-3 py-2 rounded-full border border-white/10 outline-none"
        >
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
        <button type="submit" className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90">
          Add Task
        </button>
      </form>

      <div className="flex flex-col gap-3">
        {tasks.map(task => (
          <div key={task.id} className={`p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 ${task.completed ? 'bg-[#0a0a0a]/50 border-white/5 opacity-50' : 'bg-[#0a0a0a] border-white/10 hover:border-white/20'}`}>
            <div className="flex items-center gap-4">
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 rounded border-white/20 bg-black checked:bg-white cursor-pointer"
              />
              <span className={`text-sm text-white ${task.completed ? 'line-through text-white/40' : ''}`}>
                {task.title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                task.priority === 'high' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                task.priority === 'medium' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                'bg-blue-500/10 text-blue-400 border-blue-500/20'
              }`}>
                {task.priority}
              </span>
              <span className="text-xs text-white/40 font-mono">{task.dueDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
