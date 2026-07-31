import './CategoryFilter.css';

function CategoryFilter({ categories, activeCategory, onFilterChange }) {
  return (
    <div className="category-filter" role="region" aria-label="Filter by category">
      <h3 className="category-filter__title">Filter by Category</h3>
      <div className="category-filter__pills">
        <button
          className={`category-filter__pill ${!activeCategory ? 'category-filter__pill--active' : ''}`}
          onClick={() => onFilterChange('')}
          aria-pressed={!activeCategory}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-filter__pill ${activeCategory === cat ? 'category-filter__pill--active' : ''}`}
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
