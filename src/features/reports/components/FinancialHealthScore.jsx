"use client";

export default function FinancialHealthScore({ score = 78, trends = [] }) {
  // Score interpretation
  let status = "Good";
  let color = "text-emerald-400";
  let ringColor = "stroke-emerald-500";
  let bgGlow = "from-emerald-500/20 to-transparent";

  if (score < 50) {
    status = "Needs Attention";
    color = "text-red-400";
    ringColor = "stroke-red-500";
    bgGlow = "from-red-500/20 to-transparent";
  } else if (score < 70) {
    status = "Fair";
    color = "text-amber-400";
    ringColor = "stroke-amber-500";
    bgGlow = "from-amber-500/20 to-transparent";
  } else if (score >= 90) {
    status = "Excellent";
    color = "text-blue-400";
    ringColor = "stroke-blue-500";
    bgGlow = "from-blue-500/20 to-transparent";
  }

  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className={`relative overflow-hidden p-6 rounded-3xl bg-[#0a0a0a] border border-white/10 flex items-center justify-between gap-6 group`}>
      <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-radial ${bgGlow} blur-[80px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700`}></div>
      
      <div className="relative z-10 flex flex-col gap-2">
        <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Financial Health</span>
        <h3 className={`text-2xl font-display font-medium ${color}`}>{status}</h3>
        <p className="text-xs text-white/40 mt-1 max-w-[200px]">
          Based on your savings rate, budget adherence, and anomaly detection.
        </p>
      </div>

      <div className="relative z-10 w-24 h-24 flex items-center justify-center shrink-0">
        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
          {/* Background Ring */}
          <circle 
            cx="50" cy="50" r="40" 
            className="stroke-white/10" 
            strokeWidth="8" 
            fill="none" 
          />
          {/* Progress Ring */}
          <circle 
            cx="50" cy="50" r="40" 
            className={`${ringColor} transition-all duration-1000 ease-out`} 
            strokeWidth="8" 
            fill="none" 
            strokeLinecap="round"
            style={{ 
              strokeDasharray: circumference, 
              strokeDashoffset: strokeDashoffset 
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-display font-bold text-white">{score}</span>
        </div>
      </div>
    </div>
  );
}
