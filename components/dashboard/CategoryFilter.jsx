function CategoryFilter({ categories, activeCategory, onFilterChange }) {
  return (
    <div className="flex flex-col gap-3" role="region" aria-label="Filter by category">
      <h3 className="text-base font-semibold text-text-secondary">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-all duration-150 border ${!activeCategory ? 'bg-accent border-accent text-background hover:bg-accent-hover hover:border-accent-hover' : 'bg-surface border-border text-text-secondary hover:text-text-heading hover:border-border-subtle hover:bg-surface-hover'}`}
          onClick={() => onFilterChange('')}
          aria-pressed={!activeCategory}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-all duration-150 border ${activeCategory === cat ? 'bg-accent border-accent text-background hover:bg-accent-hover hover:border-accent-hover' : 'bg-surface border-border text-text-secondary hover:text-text-heading hover:border-border-subtle hover:bg-surface-hover'}`}
            onClick={() => onFilterChange(cat)}
            aria-pressed={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
