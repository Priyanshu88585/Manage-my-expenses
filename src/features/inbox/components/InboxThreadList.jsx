"use client";
import { useState } from 'react';

const THREADS = [
  { id: '1', sender: 'Vikram Sharma', subject: 'Re: Enterprise License Contract Approval', preview: 'We have reviewed the terms and signed the agreement...', time: '10:42 AM', unread: true },
  { id: '2', sender: 'Billing Alert', subject: 'Invoice #1092 Payment Received', preview: 'Your payment of ₹1,80,000 has been successfully processed.', time: 'Yesterday', unread: false },
  { id: '3', sender: 'Ananya Roy', subject: 'Question regarding Q3 pricing tier', preview: 'Can we schedule a quick call tomorrow to clarify the API limit?', time: 'Jul 28', unread: false },
];

export default function InboxThreadList() {
  const [selectedThread, setSelectedThread] = useState(THREADS[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full h-[600px] rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden">
      {/* Sidebar Threads List */}
      <div className="border-r border-white/10 flex flex-col divide-y divide-white/5 overflow-y-auto">
        {THREADS.map(t => (
          <button
            key={t.id}
            onClick={() => setSelectedThread(t)}
            className={`p-5 text-left transition-all flex flex-col gap-1 ${selectedThread.id === t.id ? 'bg-white/10' : 'hover:bg-white/5'}`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-sm font-medium ${t.unread ? 'text-white font-semibold' : 'text-white/80'}`}>{t.sender}</span>
              <span className="text-xs text-white/40">{t.time}</span>
            </div>
            <div className="text-xs text-white/90 font-medium truncate">{t.subject}</div>
            <div className="text-xs text-white/50 truncate">{t.preview}</div>
          </button>
        ))}
      </div>

      {/* Main Message View */}
      <div className="lg:col-span-2 p-8 flex flex-col justify-between h-full bg-[#111]/40">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div>
              <h3 className="text-lg font-display font-medium text-white">{selectedThread.subject}</h3>
              <span className="text-xs text-white/50">From: {selectedThread.sender}</span>
            </div>
            <span className="text-xs text-white/40">{selectedThread.time}</span>
          </div>

          <div className="py-6 text-sm text-white/80 leading-relaxed">
            {selectedThread.preview}
            <br /><br />
            Please let me know if you need any additional documentation or purchase order references.
          </div>
        </div>

        {/* Reply Bar */}
        <div className="flex gap-3 pt-4 border-t border-white/10">
          <input 
            type="text" 
            placeholder="Type your reply..." 
            className="flex-grow bg-[#0a0a0a] border border-white/10 rounded-full px-5 py-3 text-sm text-white outline-none focus:border-white/30"
          />
          <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
