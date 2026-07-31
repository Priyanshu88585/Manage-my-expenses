"use client";

export default function CategoryFilter({ categories, activeCategory, onFilterChange }) {
  if (!categories || categories.length === 0) return null;

  return (
    <div className="w-full" aria-label="Filter expenses by category">
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => onFilterChange('')}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
            activeCategory === '' 
              ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
              : 'bg-[#111] text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
          }`}
          aria-pressed={activeCategory === ''}
        >
          All Categories
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === category 
                ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                : 'bg-[#111] text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
            }`}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
