"use client";
import { useState } from 'react';

const PLANS = [
  { id: 'starter', name: 'Starter', price: '₹0', period: 'forever', features: ['Up to 50 expenses/mo', 'Single user', 'Basic export'], active: false },
  { id: 'pro', name: 'Pro Business', price: '₹2,499', period: 'per month', features: ['Unlimited expenses', 'Up to 5 team members', 'Deals & CRM pipeline', 'Custom reports'], active: true },
  { id: 'enterprise', name: 'Enterprise', price: '₹7,999', period: 'per month', features: ['Unlimited team members', 'Dedicated account manager', 'Custom AI workflows', '24/7 SLA Support'], active: false },
];

export default function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {PLANS.map(plan => (
        <div 
          key={plan.id} 
          className={`p-8 rounded-3xl border transition-all flex flex-col justify-between gap-6 ${plan.id === selectedPlan ? 'bg-[#111] border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.1)]' : 'bg-[#0a0a0a] border-white/10 hover:border-white/20'}`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-display font-medium text-white">{plan.name}</h3>
              {plan.active && <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">Current Plan</span>}
            </div>

            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-display font-medium text-white">{plan.price}</span>
              <span className="text-xs text-white/50">/ {plan.period}</span>
            </div>

            <ul className="flex flex-col gap-3 text-sm text-white/70">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> {f}
                </li>
              ))}
            </ul>
          </div>

          <button 
            onClick={() => setSelectedPlan(plan.id)}
            className={`w-full py-3.5 rounded-full font-medium text-sm transition-all ${plan.id === selectedPlan ? 'bg-white text-black' : 'bg-transparent text-white border border-white/20 hover:bg-white/10'}`}
          >
            {plan.id === selectedPlan ? 'Active Subscription' : 'Upgrade Plan'}
          </button>
        </div>
      ))}
    </div>
  );
}
